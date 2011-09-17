/*
                  <dr.com.js of Dr.com Extension.>
    Copyright (C) <2011> <Dr.com Extension Authors :zghaia@gmail.com>
                          All rights reserved.
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details 
                      <./GNU GENERAL PUBLIC LICENSE>
*/
function login()
{           
	var lUser = localStorage["User"];
	var lPassword = localStorage["Password"];
	var lServer = localStorage["Server"];
	
	var loginServer = "http://"+lServer+"/";
	var loginSend = "DDDDD="+lUser+"&upass="+lPassword+"&0MKKey=%B5%C7%C2%BC+Login";
	var loginXHR = new XMLHttpRequest();
	
	loginXHR.open("POST",loginServer,false);
	if(loginXHR.readyState==1)
	{
		loginXHR.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		loginXHR.send(loginSend);
		if(loginXHR.readyState==4)
		{
			localStorage["State"] =1;	
			showState();
			showTips(1);
		}
		else
		{
		    showTips(11);
		}
	}
	else
	{
	    showTips(404);
	}
}

function logout()
{       
	var lServer = localStorage["Server"];
	var logoutServer = "http://"+lServer+"/"+"F.htm";
	var logoutXHR = new XMLHttpRequest();

	logoutXHR.open("GET",logoutServer,false);
	if(logoutXHR.readyState==1)
	{
		logoutXHR.send();
		if(logoutXHR.readyState==4)
		{
			localStorage["State"] =0;
			showState();
			showTips(0);
		}
		else
		{
		   showTips(10);
		}  
	}
	else
	{
	    showTips(404);
	}
}

function unset()
{
	showState();
	showTips(588);
}

function error()
{
	showState();
	showTips(999);
}

function getState()
{
	var lState = localStorage["State"];
	
	if(!lState)
	{
		return 9;
	}
	else
	{
		return parseInt(lState);
	}
}

function switchState()
{
	switch(getState())
	{
		case 0:login();break;
		case 1:logout();break;
		case 5:logout();break;
		case 9:unset();break;
		default:error();
	}
}

function setState(color,text)
{
	chrome.browserAction.setBadgeBackgroundColor({color:color});
	chrome.browserAction.setBadgeText({text:text});
}

function showState()
{
	switch(getState())
	{
		case 0:setState([0, 200, 0, 100],"0");break;
		case 1:setState([255, 0, 0, 100],"1");break;
		case 5:setState([255, 0, 0, 100],"1");localStorage["State"] =1;break;
		case 9:setState([0, 0, 200, 100],"?");break;
		default:setState([255, 255, 255, 255],"X");break;
	}
}