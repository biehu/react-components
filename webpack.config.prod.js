var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'source-map',
    entry: [
		'./src/index.js'
	],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'scripts/bundle.js',
		chunkFilename: 'scripts/[chunkhash:8].bundle.js',
		publicPath: '/dist/'
    },
	plugins: [
		new ExtractTextPlugin('styles/bundle.css', {
			allChunks: true
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
	    new webpack.DefinePlugin({
	      'process.env': {
	        'NODE_ENV': JSON.stringify('production')
	      }
	    }),
		new webpack.optimize.UglifyJsPlugin({
	      compressor: {
	        warnings: false
	      }
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
