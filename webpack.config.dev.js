var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var port = 3000;

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	_port: port,
    entry: [
        'webpack-dev-server/client?http://localhost:' + port,
        'webpack/hot/only-dev-server',
		'./src/index.js'
	],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'scripts/bundle.js',
		chunkFilename: 'scripts/[chunkhash:8].bundle.js',
		publicPath: '/dist/'
    },
	plugins: [
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('styles/bundle.css', {
			allChunks: true
		})
	],
	resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
			{
	            test: /\.js$/,
	            loaders: ['react-hot', 'babel'],
	            exclude: /node_modules/
	        }, 
			{
	            test: /\.css$/,
	            loader: ExtractTextPlugin.extract('style', 'css')
	        }, 
			{ 	
				test: /\.(ttf|eot|woff|woff2|otf|svg)/, 
				loader: 'file-loader?name=./font/[name].[ext]' 
			},
			{
	            test: /\.(png|jpg|jpeg|gif)$/,
	            loader: 'url-loader?limit=8192&name=image/[hash:8].[name].[ext]'
	        }
		]
    }
};
