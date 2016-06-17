var webpack = require('webpack');

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var plugins = [];
console.log("Running in NODE Environment: " + process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') plugins.push(new CommonsChunkPlugin({ name: 'vendor' }));

module.exports = {
    debug: true,
    devtool: 'source-map',
    entry: {
        'vendor': ['./app/polyfills', './app/vendor'],
        'app': './app/main'
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        publicPath: "dist/"
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.jpg', '.jpeg', '.gif', '.png', '.css']
    },
    module: {
        loaders: [
            { test: /\.(jpg|jpeg|gif|png)$/, loader:'file-loader?name=img/[path][name].[ext]' },
            { test: /\.css$/, loader:'raw-loader' },
            { test: /\.html$/,  loaders: ['html-loader'] },
            { test: /\.ts$/, loaders: ['awesome-typescript-loader'], exclude: /node_modules/}
        ]
    },
    modulesDirectories: ['node_modules'],
    plugins: plugins,
    node: {
        __filename: true
    },
    devServer: {
        inline:true,
        port: 8080,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
  
};
