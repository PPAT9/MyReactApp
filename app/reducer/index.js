import { combineReducers } from 'redux';
import * as employeeReducer from './../components/employeeListView';
import * as employeeConstant from '../components/constants';



const rootReducer = combineReducers(
	{[employeeReducer.constants.name]: employeeReducer.reducer}
);

export default rootReducer