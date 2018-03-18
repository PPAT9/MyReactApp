import "whatwg-fetch";

import * as actionTypes from './constants';


export function fetchJson(){
	return function(dispatch, getState){
		return fetch("sample-data.json", {method: "GET", credentials: 'include'})
		.then((response) =>{
			if (!response.ok) {throw Error(response.statusText);}
			return response.json();
		}) 
		.then((data) =>{
			console.log('fetch', data);
			dispatch({type: actionTypes.GET_DATA, playload: data});
		})
		.catch((error) => {
			console.log('Error fetching and parsing json');
		})
	}
}