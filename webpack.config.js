const path = require("path")
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
    mode: 'development',
    target: 'node',
    watch: true,
    externals: [nodeExternals()],
    entry: {
        index: './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'] // Расширения, которые используются
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ["ts-loader"]
            },
        ]
    },
    plugins: [
        new WebpackShellPlugin({
            onBuildEnd: ['yarn run:dev']
        })
    ]
};