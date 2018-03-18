var React = require('react');
var ReactDOM = require('react-dom');

import {Provider} from 'react-redux';
import store from './store';

require('../css/styles.css');
import EmployeeListView from './components/employeeListView.js'

ReactDOM.render(
	<Provider store={store}>
		<EmployeeListView />
	</Provider>, 
	document.getElementById('app')
);