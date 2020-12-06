const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (_, argv) => {
  const isProductionMode = argv.mode === 'production';
  return {
    mode: isProductionMode ? 'production' : 'development',
    target: 'node',
    externals: [nodeExternals()],
    entry: {
      index: './src/index.ts',
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
    },
    resolve: {
      extensions: ['.ts', '.js', '.json'], // Расширения, которые используются
    },
    devtool: isProductionMode ? false : 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.(js|ts)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
    plugins: [
      new WebpackShellPluginNext({
        onBuildEnd: {
          scripts: ['npm run-script run'],
        },
      }),
      new ESLintPlugin({
        extensions: ['ts', 'js'],
      }),
    ],
  };
};
