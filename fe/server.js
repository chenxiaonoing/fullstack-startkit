'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

new WebpackDevServer(webpack(config), config.devServer)
	.listen(config.port, 'localhost', (err) => {
		if (err) {
			console.log(err);
		}
		console.log('Listening at localhost:' + config.port);
		console.log('Opening your system browser...');
		open('http://127.0.0.1:' + config.port + '/webpack-dev-server/');
	});