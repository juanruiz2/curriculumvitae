const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports= {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        resolve: {
            extensions: ['.js', '.jsx']
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
                
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: "babel-loader",
                
            },
            {
            test: /\.html$/,
            use: "html-loader",
                
            },
        ]
    },
            plugins: [
                new HtmlWebPackPlugin({
                    template: "./public/index.html",
                    file: "./index.html"
                                    })
                    ]
}