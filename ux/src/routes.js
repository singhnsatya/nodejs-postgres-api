import React from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from './helpers';
import Home from './components/Home';
import List from './components/List';

class Routes extends React.Component {
	render() {
		return (
			<Router history = {history}>
			<div>
			<Route exact path = "/" component={Home} />
			<Route path = "/list" component={List} />
			</div>
			</ Router>
		)
	}
}

export default Routes