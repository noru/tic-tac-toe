const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const ExtractTextPlugin = require('mini-css-extract-plugin')
const config = require('./webpack.config.base')
const appConfig = require('.')

const GLOBALS = {
  'process.env': {
    'NODE_ENV': JSON.stringify('production')
  },
  __USE_MOCK__: 'false',
}
const extractProjectStyle = new ExtractTextPlugin({
  filename: 'assets/css/[name].[hash].css',
  chunkFilename: 'assets/css/[name].[id].[hash].css'
})

module.exports = merge(config, {
  mode: 'production',
  entry: {
    app: path.join(__dirname, '../src/js/index'),
  },
  output: {
    filename: 'assets/js/[name].[hash].js',
    chunkFilename: 'assets/js/[name].[chunkhash].js',
    path: path.resolve(__dirname, '../build'),
    publicPath: appConfig.publicPath
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    extractProjectStyle,
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.s?css$/,
        include: [ path.resolve(__dirname, '../node_modules') ],
        exclude: [ path.resolve(__dirname, '../src') ],
        use: [
          ExtractTextPlugin.loader,
          'css-loader',
            { loader: 'sass-loader', query: { outputStyle: 'compressed' } },
          'postcss-loader',
        ],
      },
      {
        test: /\.s?css$/,
        include: [ path.resolve(__dirname, '../src') ],
        exclude: [ path.resolve(__dirname, '../node_modules') ],
        use: [
          ExtractTextPlugin.loader,
          'css-loader',
            { loader: 'sass-loader', query: { outputStyle: 'compressed' } },
          'postcss-loader',
        ]
      }
    ]
  },
})
