const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

/**
 * 抛出错误，并终止程序
 * @param {string} msg 
 */
const exitError = (msg) => {
  console.log(chalk.red(msg));
  process.exit(1);
};

/**
 * 获取对应webpack配置
 * @param {string} env 
 */
const getWebpackConfig = (env) => {
  let webpackConfig = {};
  const webpackConfigPath = path.resolve(path.resolve(__dirname), `../config/webpack/webpack.${env}.config.js`);
  try {
    fs.accessSync(webpackConfigPath, fs.constants.R_OK);
    webpackConfig = require(webpackConfigPath);
    return webpackConfig;
  } catch (err) {
    exitError(err);
  }
};

/**
 * 获取代理配置
 */
const getHttpProxy = () => {
  const proxyConfig = path.resolve(process.cwd(), 'mock/pathRewrite.js');
  try {
    fs.accessSync(proxyConfig, fs.constants.R_OK);
    return require(proxyConfig);
  } catch (err) {
    errorMsg(err);
  }
};

/**
 * 将tsConfig中的别名转换为webpack的别名
 * @param {string} tsconfigPath 
 * @param {string} context
 */
const resolveTsconfigPathsToAlias = (tsconfigPath = './tsconfig.json', context = './') => {
  const { paths } = require(tsconfigPath).compilerOptions;

  const aliases = {};

  Object.keys(paths).forEach((item) => {
    const key = item.replace('/*', '');
    const value = path.resolve(context, paths[item][0].replace('/*', ''));

    aliases[key] = value;
  });

  return aliases;
}

/**
 * 检查文件或者目录是否存在
 *
 * @param {string} path 
 * @param {string} type [file, dir]
 *
 * @return boolean
 */
const isExist = (path, type) => {
  let result = false;
  try {
    const stat = fs.statSync(path);
    if (type === 'file' && stat.isFile()) result = true;
    if (type === 'dir' && stat.isDirectory()) result = true;
  } catch (e) {
    result = false;
  }
  return result;
}

exports.exitError = exitError;
exports.getWebpackConfig = getWebpackConfig;
exports.getHttpProxy = getHttpProxy;
exports.resolveTsconfigPathsToAlias = resolveTsconfigPathsToAlias;
exports.isExist = isExist;
