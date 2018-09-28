/* eslint-env node */
const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const isDebug = process.argv.includes('--debug');

const ExtractChokhmahCSS = new ExtractTextPlugin({
  filename: 'chokhmah.css',
});

const config = {
  context: path.resolve(__dirname),
  devServer: {
    contentBase: `${__dirname}/dist`,
    hot: true,
  },
  devtool: 'source-map',
  entry: './components/index.js',
  externals: ['lodash', 'moment', 'react', 'react-dom'],
  module: {
    rules: [
      {
        enforce: 'pre',
        include: [
          path.resolve(__dirname, 'components'),
          path.resolve(__dirname, 'utils'),
        ],
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, 'components'),
          path.resolve(__dirname, 'utils'),
          path.resolve(__dirname, 'icons'),
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'scss'),
        ],
        loader: ExtractChokhmahCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDebug,
                minimize: !isDebug,
              },
            },
            'resolve-url-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        }),
      },
      // node_modules css
      {
        test: /\.css/,
        include: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, '../../node_modules'),
        ],
        loader: ExtractChokhmahCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDebug,
                minimize: !isDebug,
              },
            },
          ],
        }),
      },
    ],
  },
  output: {
    filename: 'index.js',
    chunkFilename: '[id].js',
    library: 'chokhmah',
    libraryTarget: 'umd',
    path: `${__dirname}/dist`,
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    ExtractChokhmahCSS,
    new StyleLintPlugin({
      failOnError: !isDebug,
      files: ['scss/**/*.scss'],
      quiet: false,
    }),
    new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
  ],
};

module.exports = config;