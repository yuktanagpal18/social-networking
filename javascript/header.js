// change header icon text color and image when mouse over it
function headerchange(check)
{
	if(check==1)
	{
		
		var img=document.getElementById('homaj-home').src="../images/login/home-hover.png";
	}
	else if(check==2)
	{
		
		var img=document.getElementById('homaj-profile').src="../images/login/profile-hover.png";
	}
	else if(check==3)
	{
		
		var img=document.getElementById('homaj-society').src="../images/login/society-hover.png";
	}
	else if(check==4)
	{
		
		var img=document.getElementById('homaj-message').src="../images/login/message-hover.png";
	}
	else if(check==5)
	{
		
		var img=document.getElementById('homaj-notification').src="../images/login/notification-hover.png";
	}
}


// change header icon text color and image to origin when mouseout
function headerorigin(check)
{
	if(check==1)
	{
		var img=document.getElementById('homaj-home').src="../images/login/home.png";
	}
	else if(check==2)
	{
		var img=document.getElementById('homaj-profile').src="../images/login/profile.png";
	}
	else if(check==3)
	{
		var img=document.getElementById('homaj-society').src="../images/login/society.png";
	}
	else if(check==4)
	{
		var img=document.getElementById('homaj-message').src="../images/login/message.png";
	}
	else if(check==5)
	{
		var img=document.getElementById('homaj-notification').src="../images/login/notification.png";
	}
}


/* ============ Message button bottom =========*/
var check=0; // to check if it is show or not

function showhide()
{
	var msg1=document.getElementById("msg1");
	var msg2=document.getElementById("msg2");
	if(check==0)
	{
		//Expand message box
		msg1.style.height="400px";
		msg2.style.borderBottom="2px solid #BBBBBB"
		check=1;
	}
	else
	{
		//Compress message box
		msg1.style.height="30px";
		check=0;
	}
}
