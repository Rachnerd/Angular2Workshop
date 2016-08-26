const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: [
        './main.ts'
    ],

    output: {
        filename: "./.dist/bundle.js",
    },


    resolve: {
        extensions: ["", ".ts", ".js", "scss"]
    },
    devtool: "source-map",
    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                test: /\.ts/, loader: "ts-loader"
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    plugins: [

        new BrowserSyncPlugin({
            port: 3000,
            server: {baseDir: ['.']},
            ui: false,
            files: ['app/**/*', 'index.html']
        })
    ],
    externals: {

    }
};