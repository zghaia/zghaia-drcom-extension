/*
                    <tips.js of Dr.com Extension.>
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

function showTips(flag)
{
	
	var time=6000;
	switch(flag)
	{
	case 0:                         
		var notification = webkitNotifications.createNotification(
			'logo.png',             
			'注销提示', 					
			'你已经顺利注销'    
		);break;
	case 10:                         
		var notification = webkitNotifications.createNotification(
			'logo.png',             
			'注销提示', 					
			'注销失败，检查服务器地址是否正确'    
		);break;
	case 1:						
		var notification = webkitNotifications.createNotification(
			'logo.png',             
			'登录提示', 					
			'你已经成功登录'    
		);break;
	case 11:						
		var notification = webkitNotifications.createNotification(
			'logo.png',             
			'登录提示', 					
			'登录失败，检查帐号密码是否正确'    
		);break;		
	case 588:
		var notification = webkitNotifications.createNotification(
			'logo.png',             
			'错误提示', 						
			'你需要先设置，右键图标选项'      
		);break;
	case 912:
		var notification = webkitNotifications.createNotification(
			'logo.png',             
			'设置提示', 						
			'设置已经保存，需要重新登录'      
		);break;
	case 325:
		var notification = webkitNotifications.createNotification(
			'logo.png',             
			'设置提示', 						
			'设置已经清除，登陆需要设置'      
		);break;
	case 123:
		var notification = webkitNotifications.createNotification(
			'logo.png',             
			'输入提示', 						
			'输入有空，重新输入'      
		);break;
    case 404:
		var notification = webkitNotifications.createNotification(
			'logo.png',             
			'错误提示', 						
	    '服务器链接失败，检查服务器设置'      
		);break;
    case 505:
		var notification = webkitNotifications.createNotification(
			'logo.png',             
			'关闭提示', 						
	    '是否注销拨号'      
		);break;
	default:
    var notification = webkitNotifications.createNotification(
			'logo.png',            
			'其他提示', 						
			'发生未知错误，请更新最新版'     
		  );
	}

	notification.show();
	setTimeout(
		function()
		{
			notification.cancel();
		}, time);
	
}