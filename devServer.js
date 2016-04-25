var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

var port = config._port;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    },
	inline: true
}).listen(port, 'localhost', function(err) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:' + port);
});

