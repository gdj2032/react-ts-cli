module.exports = {
  /* [!important]路径基于项目根目录 */

  svgDir: 'images/svg', // svg存放目录

  tsConfigPath: 'tsconfig.json', // tsconfig.json文件路径

  tsLintPath: 'tslint.json', // tslint.json文件路径

  // 仅作用于DLL
  DLL: {
    entry: {
      vendor: {
        modules: [
          'react', 
          'react-dom', 
          'react-router', 
          'react-router-dom', 
          'react-redux', 
          'redux',
        ],
      },
      antd: {
        modules: [
          'antd/lib/button',
          'antd/lib/input',
          'antd/lib/rate',
        ],
        ref: 'vendor' // 依赖项
      }
    },
    outputDir: 'vendor/dll', // DLL输出目录
  },

  // 仅作用在dev
  DEVELOPMENT: {
    BUILD_ENV: 'development',

    port: '8000',  // dev server 运行的端口

    mock: true, // 是否开启mock

    proxy: true, // 是否开启代理

    xhrPath: '/xhr', // 代理请求前缀

    mockPath: '/mock', // mock请求前缀

    supportBrowserRouter: false, // 是否支持BrowserRouter
  },

  // 仅作用在build
  PRODUCTION: {
    BUILD_ENV: 'production',

    outputDir: 'dist', // 递交目录

    copy: ['images', 'vendor'], // 需要拷贝到递交目录的资源列表

    BundleAnalyzer: false, // 分析打包出的bundle构成, 需要时开启
  }
} 