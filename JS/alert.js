/*
               <alert.js  of Dr.com Extension.>
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
 
function closeAlert()
{
     chrome.windows.getCurrent(function(windows){
	       chrome.windows.remove(windows.id);
	 }); 
}

function openAlert(u, w, h) {
	var l = 2 * (screen.width - w) / 5;
	var t = (screen.height - h) / 3;
	var s = 'width=' + w + ', height=' + h + ', top=' + t + ', left=' + l;
	s += ', toolbar=no, scrollbars=no, menubar=no, location=no, resizable=no';
	window.open(u, 'oWin', s);
}

function showAlert()
{
	chrome.windows.getAll({populate: false},function(windows){
		var flag=(windows.length==0)&&(getState()==1); 
	    if(flag)
	    {
            openAlert('alert.html',200,100);
        }
	});
}

function OK()
{       
    logout();
    closeAlert();
}

function NO()
{
    localStorage["State"] =5;
	closeAlert();
}

