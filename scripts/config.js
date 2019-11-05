#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const { CONFIG_FILENAME } = require('../config/custom/constant');

const destConfigPath = path.resolve(process.cwd(), CONFIG_FILENAME);
const defualtConfigPath = path.resolve(__dirname, '../config/custom/default.config.js')

const copyFile = () => {
    try {
        fs.copySync(defualtConfigPath, destConfigPath);
        console.log(chalk.green.bold(`${CONFIG_FILENAME} init success!\n`));
    } catch (e) {
        console.log(chalk.red(`init config file error: ${e}`));
    }
}

if (fs.existsSync(destConfigPath)) {
    inquirer
        .prompt([
            {
              type: 'confirm',
              name: 'status',
              message: '您当前目录下已存在配置文件，是否覆盖?',
            },
        ])
        .then((answer) => {
            if (answer['status']) {
                copyFile();
            }
        });
} else {
    copyFile();
}