import React from 'react';
import {
	render
} from 'react-dom';
import {
	Provider
} from 'react-redux';
import configureStore from './stores';
import {
	browserHistory,
	Router,
	Route,
	IndexRoute
} from 'react-router';

import Hello from './containers/Hello'
const store = configureStore();

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={Hello}></Route>
		</Router>
  	</Provider>,
	document.getElementById('app')
);