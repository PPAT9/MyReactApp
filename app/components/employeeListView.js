export const constants = require('./constants');
export const reducer = require('./reducer').default;
		
import React, {PureComponent}  from 'react';
import {render} from 'react-dom';

import employees from '../assets/sample-data.json';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as employeeActions from './actions';

class Employeeitem extends PureComponent {	
	render(){	
		let item = this.props.detials;
		let id = this.props.id;
		return (			
		   <div className="item-{id}" key={item.id}>
		    <a href="" className="card">		      
		      <img className="thumb"  src={item.avatar} />
		      <article>
		      <h1>{item.firstName}.{item.lastName}</h1>
             <span>{item.jobTitle}</span>
             </article>
		      </a>
           </div>        
		);
	}
}

class EmployeeListView extends PureComponent {
	constructor(props){
	   super(props);
	   this.state = {
			   employeeData: [],
			   companyInfo: {}
	   }
	}
	
	componentWillMount(){
		this.props.actions.fetchJson();
	}
	
	componentWillReceiveProps(nextProps){
		if ( nextProps.employeeData !== undefined && nextProps.employeeData !== this.props.employeeData){
			console.log('componentWillReceiveProps', nextProps);
			this.setState({
				employeeData: nextProps.employeeData.employees,
				companyInfo: nextProps.employeeData.companyInfo,
			});
			
		}
	}
	
	render(){		
		const employeeview = this.state.employeeData.map(			
			(item, i) => {					
				return (<Employeeitem detials={item} id={i} key={i}/>)
			}
		);
		
		return (
			<div className="prashant">
			<div className="band">				
				{employeeview}
			</div>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return ({
		employeeData: state.employee.employeeData
	})
}

const mapDispatchToProps = (dispatch) => {
	return ({actions: bindActionCreators(employeeActions, dispatch)});
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListView);









