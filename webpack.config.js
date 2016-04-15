const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const NpmInstallPlugin = require('npm-install-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'app'),
  dist: path.join(__dirname, 'dist')
};

const common = {
  entry: {
    vendor: ['./app/vendor.ts'],
    main: ['./app/main.ts']
  },
  output: {
    filename: '[name].bundle.js',
    path: PATHS.dist
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'NG2 Starter',
      template: 'index.template.ejs',
      baseHref: '/',
      unsupportedBrowser: true,
      mobile: true,
      appMountId: 'app'
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loaders: ['ts-loader']
      },
      {
        test: /\.scss$/,
        loader: 'raw-loader!sass-loader'
      },
      {
        test: /\.html$/,
        loader: "html"
      }
    ]
  }
}

// Dev Settings
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({
        save: true
      })
    ]
  });
}

// Prod Settings
if(TARGET === 'build') {
  module.exports = merge(common, {
    devtool: 'cheap-module-source-map',
    plugins: [
      // new webpack.optimize.UglifyJsPlugin({
      //   beautify: false,
      //   mangle: false,
      //   compress : { screw_ie8 : true },
      //   comments: false
      // }),
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      }),
    ]
  });
}
