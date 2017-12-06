import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Routes from './routes';
import store from './store';

ReactDOM.render(<Provider store = {store}>
	<Routes />
	</Provider>,
	document.getElementById('container'));