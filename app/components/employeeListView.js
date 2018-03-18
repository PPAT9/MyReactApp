import React, {PureComponent}  from 'react';
import {render} from 'react-dom';

import employees from '../assets/sample-data.json';

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

export default class EmployeeListView extends PureComponent {
	
	render(){
		const employeeview = employees.employees.map(			
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

