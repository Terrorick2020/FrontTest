const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const fs = require('fs');
const { VueLoaderPlugin } = require('vue-loader');


module.exports = {
    mode: 'development',
    entry: path.resolve( __dirname, 'src/index.js' ),
    output: {
        path: path.resolve( __dirname, 'public' ),
        filename: 'index.[contenthash].js',
        assetModuleFilename: 'asset/[name][ext]',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ['vue-style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|ico)$/i,
                type: 'asset/resource'

            },
            {
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    },
    devServer: {
        port: 1111,
        compress: true,
        hot: true,
        static: {
            directory: path.resolve( __dirname, 'public' )
        },
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve( __dirname, './src/index.html' ),
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/asset',
                    to: 'asset',
                    filter: (resourcePath) => {
                        console.log(`Checking directory: ${resourcePath}`);
                        const listDir = fs.readdirSync('./src/asset');
                        return listDir.length > 0;
                    }
                }
            ]
        })
    ]
}