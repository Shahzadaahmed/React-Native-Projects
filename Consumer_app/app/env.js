/*
	AUTHOR: QASIM ZUBAIR
   SUMMARY: TO DEFINE THE REACT NATIVE APP ENVIRONMENT VARIABLES. FOR EXAMPLE, SERVER URL.
*/
import React from 'react';
const server = "https://dev.homeats.com";
export const MapKey = "AIzaSyAog7HDdJENr2KfNMrmoKLrGlDIXI83i6I";
export const env =
{
	"api_url": server + "/server/api/",
	"image_url": server + "/server/",
	"socket_path": "/server/socket.io",
	"socket_url": server,
}
