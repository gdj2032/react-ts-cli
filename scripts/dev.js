#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const express = require('express');
const proxy = require('http-proxy-middleware');
const IP = require('ip');
const PortFinder = require('portfinder');
const OpenUrl = require('openurl');
const url = require('url');
const bodyParser = require('body-parser');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../config/custom');
const { getWebpackConfig, getHttpProxy, exitError } = require('../utils');

const app = express();
let port = config.DEVELOPMENT.port || 8000;
const server = () => {
    const webpackConfig = getWebpackConfig('dev');
    // HMR
    Object.keys(webpackConfig.entry).forEach((name) => {
        webpackConfig.entry[name] = ['webpack-hot-middleware/client?noInfo=true&reload=true'].concat(webpackConfig.entry[name]);
    });
    const compiler = webpack(webpackConfig);
    const devMiddleware = webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: 'minimal'
    });
    const hotMiddleware = webpackHotMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      noInfo: true,
    });
    app.use(devMiddleware);
    app.use(hotMiddleware);
    app.use(express.static(process.cwd()));
    
    // 解决BrowserRoute路由问题
    if (config.DEVELOPMENT.supportBrowserRouter) {
      app.use('*', function (req, res, next) {
        var filename = path.join(compiler.outputPath,'index.html');
        compiler.outputFileSystem.readFile(filename, function(err, result){
          if (err) {
            return next(err);
          }
          res.set('content-type','text/html');
          res.send(result);
          res.end();
        });
      });
    }

    // 是否开启代理
    if (config.DEVELOPMENT.proxy) {
      const httpProxy = proxy(getHttpProxy());

      app.use(config.DEVELOPMENT.xhrPath, httpProxy);
    }

    // 是否开启本地mock
    if (config.DEVELOPMENT.mock) {
      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(bodyParser.json());

      app.use(config.DEVELOPMENT.mockPath, function (req, res) {
        let data = path.join(process.cwd(), '/mock', req.path);
        if (fs.existsSync(data)) {
          res.send(fs.readFileSync(data));
        } else {
          res.status(404).send('file not exist !');
        }
      });
    }

    //start server & listen
    PortFinder.getPortPromise({ port: port })
    .then(unConflictPort => {
      const ip = IP.address();
      const clientUrl = url.format(url.parse(`http://${ip}:${unConflictPort}`));
      devMiddleware.waitUntilValid(() => {
        console.log(chalk.green('\nLive Development Server is listening on '), chalk.blue.underline(clientUrl));
        OpenUrl.open(clientUrl);
      });
      app.listen(unConflictPort);
    })
    .catch(err => {
      exitError(err);
    });
}

server();
