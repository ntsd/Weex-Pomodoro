// // You can see all the config in `./configs`.
// var path = require('path')
// var webpack = require('webpack')

// var bannerPlugin = new webpack.BannerPlugin({
//   banner: '// { "framework": "Vue" }\n',
//   raw: true
// })

// function getBaseConfig () {
//   return {
//     entry: {
//       'index': path.resolve('src', 'entry.js')
//     },
//     output: {
//       path: path.resolve(__dirname, 'dist')
//     },
//     module: {
//       rules: [
//         {
//           test: /\.js$/,
//           loader: 'babel-loader',
//           exclude: /node_modules/
//         }, {
//           test: /\.vue(\?[^?]+)?$/
//         }
//       ]
//     },
//     plugins: [
//       // new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }}),
//       bannerPlugin
//     ]
//   }
// }

// var webConfig = getBaseConfig()
// webConfig.output.filename = '[name].web.js'
// webConfig.module.rules[1].loader = 'vue-loader'
// /**
//  * important! should use postTransformNode to add $processStyle for
//  * inline style normalization.
//  */
// webConfig.module.rules[1].options = {
//   compilerModules: [
//     {
//       postTransformNode: el => {
//         el.staticStyle = `$processStyle(${el.staticStyle})`
//         el.styleBinding = `$processStyle(${el.styleBinding})`
//       }
//     }
//   ]
// }

// var nativeConfig = getBaseConfig()
// nativeConfig.output.filename = '[name].weex.js'
// nativeConfig.module.rules[1].loader = 'weex-loader'

// module.exports = [webConfig, nativeConfig]

const  buildPlugins = require('./configs/plugin');
let webpackConfig;
module.exports = env => {
  switch (env.NODE_ENV) {
    case 'prod':
    case 'production':
      webpackConfig = require('./configs/webpack.prod.conf');
      break;
    case 'test':
    case 'testing':
      webpackConfig = require('./configs/webpack.test.conf');
      break;
    case 'plugin':
      buildPlugins();
    case 'common':
      webpackConfig = require('./configs/webpack.common.conf');
      break;
    case 'release':
      webpackConfig = require('./configs/webpack.release.conf');
      break;
    case 'dev':
    case 'development':
    default:
      webpackConfig = require('./configs/webpack.dev.conf');
  }
  return webpackConfig;
}
