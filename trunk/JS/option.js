/*
                    <option.js  Dr.com Extension.>
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

function showOption()
{
	var lUser = localStorage["User"];
	var lPassword = localStorage["Password"];
	var lServer = localStorage["Server"];
	var iUser = document.getElementById("User");
	var iPassword = document.getElementById("Password");
	var iServer = document.getElementById("Server");
	
	if(!lUser){lUser = "";}
	if(!lPassword){lPassword = "";}
	if(!lServer){lServer = "";}
	
	iUser.value = lUser;
	iPassword.value = lPassword;
	iServer.value = lServer;
	
    if(getState()==1)
	{
	   logout();
	}
	
	showState();
}
	
function saveOption()
{
	var vUser = document.getElementById("User").value;
	var vPassword = document.getElementById("Password").value;
	var vServer = document.getElementById("Server").value;
	
    if((vUser=="") ||(vPassword=="") ||(vServer==""))
  	{
        showTips(123);
  	}
  	else
  	{
		localStorage["User"] = vUser;
		localStorage["Password"] = vPassword;
		localStorage["Server"] = vServer;
		localStorage["State"] =0;
		showTips(912);
	}
	
	showState();
}

function cleanOption()
{
	var iUser = document.getElementById("User");
	var iPassword = document.getElementById("Password");
	var iServer = document.getElementById("Server");
	
	iUser.value = "";
	iPassword.value = "";
	iServer.value = "";
	
	localStorage["User"] = "";
	localStorage["Password"] = "";
	localStorage["Server"] = "";
	localStorage["State"] =0;
	showTips(325);
	showState();
}
