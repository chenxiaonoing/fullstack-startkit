import promiseMiddleware from 'redux-promise';
import {
	createStore,
	applyMiddleware
} from 'redux';

const redux = require('redux');
const reducers = require('../reducers');
module.exports = function() {
	const store = createStore(reducers, applyMiddleware(promiseMiddleware));

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers')
			store.replaceReducer(nextReducer)
		})
	}

	return store
}