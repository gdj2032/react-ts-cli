#!/usr/bin/env node

const ora = require('ora');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const config = require('../config/custom');
const { getWebpackConfig, exitError } = require('../utils');

const server = () => {
    const spinner = ora(`building for DLL...\n`);
    spinner.start();

    // 处理DLL中引用另外一个DLL中模块的情况
    const baseConfig = getWebpackConfig('dll');
    const normalConfig = [], refConfig = [];
    Object.keys(config.DLL.entry || {}).map(key => {
        const { modules, ref } = config.DLL.entry[key];

        const webpackConfig = webpackMerge(baseConfig, {
            entry: { [key]: modules,},
            plugins: ref ? [
                new webpack.DllReferencePlugin({
                    context: process.cwd(),
                    manifest: `${config.DLL.outputDir}/${ref}-manifest.json`
                }),
            ] : []
        });
        if (ref) {
            refConfig.push(webpackConfig);
        } else {
            normalConfig.push(webpackConfig);
        }
    });

    const runWebpack = (webpackConfig) => {
        return new Promise((resolve, reject) => {
            webpack(webpackConfig, function (err, stats) {
                if (err || stats.hasErrors()) {
                    reject();
                } 
                resolve();
            });
        });
    }

    runWebpack(normalConfig)
        .then(() => runWebpack(refConfig))
        .then(() => {
            console.log(chalk.cyan(`  ${chalk.green('Build Complete!\n')}  Please check if the file in the directory(${config.DLL.outputDir}) is generated. \n`));
            spinner.stop();
        })
        .catch(() => exitError('  Build failed with errors.\n'))
}

server();
