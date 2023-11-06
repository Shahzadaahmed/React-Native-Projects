/*
	AUTHOR: QASIM ZUBAIR
   SUMMARY: CONTAINS COMMONLY USED FUNCTIONS. FOR EXAMPLE, DISPLAYING MESSAGE FORM MESSAGE TABLE.
*/

// TBD
import React from 'react';
import {env} from "../env";
import {globals} from "../utils/globals"
// import codePush from "react-native-code-push"
import {showMessage, hideMessage, MessageType} from "react-native-flash-message";
import AsyncStorage from "@react-native-async-storage/async-storage"

// CREATE A SOCKET CONNECTION WITH NODE SERVER.
export const connectSocket = () =>
{
	// return io.connect (env.socket_url, {path:env.socket_path});
}

// PRINT THE MESSAGE FROM MESSAGE-LKP TABLE.
export const siteMessage = (code:string) =>
{
	// IF THERE IS MESSAGE AVAILABLE FOR THE GIVEN CODE THE RETURN THE MESSAGE.
	if (typeof globals.messages[code] !== "undefined")
	{
		return globals.messages[code].message;
	}
	else // OTHERWISE RETURN THE CODE THAT WAS SENT.
	{
		return code;
	}
}

// SHOW TOAST/FLASH MESSAGE.
export const showToast = (message:string, type?:MessageType, duration?:number) =>
{
	showMessage
	({
		message: message,
		type: type? type : "default",
		duration: duration ? duration : 5000,
		icon: (type?"auto":"info"),
		titleStyle: {}
	});
}

// GET A RANDOM UNIQUE KEY.
export const getUniqueKey = () =>
{
	return (new Date().getTime ()) +""+ Math.floor((Math.random() * (999999 - 111111) + 999999))+"";
}

// WHEN USER CLICK ON "CANCEL" BUTTON ON BUSY CALL SCREEN. THIS WILL TAKE USER TO THE PREVIOUS SCREEN.
export const cancelTheScreen = (navigation:any) =>
{
	// THERE IS A SCREEN TO GO BACK TO THEN GO THERE, OTHERWISE GO TO HOME SCREEN.
	if (navigation.canGoBack ())
		navigation.pop ();
	else
		navigation.replace ("Home");
}

// CHECK FOR UPDATES IN CODEPUSH. WE WILL ONLY DO IT IF THERE IS NO INCOMING CALL.
export const checkForCodePushUpdates = () =>
{
	// codePush.sync
    // ({
    //     installMode: codePush.InstallMode.IMMEDIATE
    // });
}

// THIS FUNCTION WILL REPLACE VARIABLES IN MESSAGE WITH THE REAL DATA. IT WILL EXPECT MESSAGE
// CODE AS FIRST PARAMETER.
export const decodeMessageCode = (code:string, variables?:any, values?:any) =>
{
	let message = globals.messages[code]?.message;
	
	// IF THE MESSAGE CODE IS NOT VALID THEN DO NOTHING.
	if (!message) return message;
	
	// LOOPING THROUGH THE LIST OF VARIABLES TO REPLACE THEM WITH VALUES.
	if (variables)
	{
		for (let i = 0; i < variables.length; i++)
		{
			message = message.replace ('[$' + variables[i] + ']', values[i]);
		}
	}
	message = message.replace(/\<br>/g,'\n');
	message = message.replace(/\&nbsp;/g,'\u00A0');
	return message;
}

