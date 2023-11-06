/*
	 AUTHOR: QASIM ZUBAIR
	SUMMARY: THIS SERVICE IS USED FOR MAINTAINING NETWORK RELATED TASKS.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react';
// import NetInfo from "@react-native-community/netinfo";
import {env} from "../env";

// MAKE HTTP REQUEST TO THE NODE.JS SERVER TO GET DATA. FOR EXAMPLE TO PUT OR RETRIEVE DATA FROM DATABASE.
export const httpRequest = async (endPoint:string, method:string,requestData?:any) =>
{
	let params:any = // PARAMETERS TO SENT TO SERVER WITH HTTP REQUEST.
	{
		method: method,
		headers:
		{
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
	}
	
	// IF REQUEST DATA WAS PROVIDED THEN ADD IT.
	if (requestData)
	{
		params.body = requestData;
	}
	
	// SEND DATA TO SERVER.
	return fetch (env.api_url + endPoint, params).then((response) =>
	{
		//console.log ("response ",response);
		return response.json();
	}).catch(error=>
	{
		return {success:false, error: "Error in network request. "+error};
	});
}

// CHECK IF THE INTERNET IS CONNECTED OR NOT?
export const isConnected = () =>
{
	// NetInfo.fetch().then((state: { type: any; isConnected: any; }) =>
	// {
	// 	console.log ("Connection type", state.type);
	// 	console.log ("Is connected?", state.isConnected);
	// });
};
