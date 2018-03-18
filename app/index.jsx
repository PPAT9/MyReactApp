var React = require('react');
var ReactDOM = require('react-dom');

require('../css/styles.css');
import EmployeeListView from './components/employeeListView.js'

ReactDOM.render(<EmployeeListView />, document.getElementById('app'));