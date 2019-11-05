const fs = require('fs-extra')
const path = require('path');
const chalk = require('chalk');
const merge = require('lodash.merge');
const { isExist } = require('../../utils');
const { CONFIG_FILENAME } = require('./constant');
const defaultConfig = require('./default.config');

const configPath = path.resolve(fs.realpathSync(process.cwd()), CONFIG_FILENAME);
let config = {};

try {
    if (isExist(configPath, 'file')) {
        config = require(configPath);
    }
} catch (err) {
    console.log(chalk.red('Load config file: ' + chalk.cyan(configPath) + ' occur error!'));
    process.exit(1);
}

module.exports = merge(defaultConfig, config)
