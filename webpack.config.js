var path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/a.js'
    // bundle1: './src/e.js',
    // bundle2: './src/f.js'
  },
  devtool: 'none',
  output: {
    path: __dirname + '/dist',
    filename: '[name].[chunkhash:4].js',
    chunkFilename: '[name].[chunkhash:8].js'
  },
  mode: 'development',
  resolve: {
    alias: {
      Src: path.resolve(__dirname, 'src/')
    }
  },
  // plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     minSize: 0, //当模块小于这个值时，就不拆
  //     maxSize: 0, //当模块大于这个值时，尝试拆分
  //     minChunks: 1, //重复一次就打包
  //     name: true, //是否以cacheGroups中的filename作为文件名
  //     automaticNameDelimiter: '~', //打包的chunk名字连接符
  //     cacheGroups: {
  //       default: {
  //         chunks: 'all',
  //         minChunks: 2,
  //         priority: -10
  //       }
  //     }
  //   }
  // }
};
