function prepareRollovers()
{
	if(document.getElementsByTagName && document.getElementById)
	{
		var images = document.getElementsByTagName("img");
		for(var i=0; i < images.length; i++)
		{
			if(images[i].className.indexOf("rollover") > -1)
			{
				images[i].onmouseover = function()
				{
					var over_image = "Image/titan_carette.jpg";
					swapImageSrc(this, over_image, "over");
				}
				images[i].onmouseout = function()
				{
					var normal_image = "Image/BigDoggo.jpg";
					swapImageSrc(this, normal_image, "out");
				}
			}
		}
	}
}

function swapImageSrc(sna, src_image, whichEvent)
{
	if(whichEvent == "over")
	{
		var source = sna.getAttribute("src");
		var lastdot = source.lastIndexOf(".");
		var lastchar = source.length -1;
		var extension = source.substr(lastdot, lastchar);
		var name = source.substr(0, lastdot);
		var source = "Image/titan_charette" + extension;
		//alert(orig_lastdot + " / " + orig_lastchar + " / " + extension);
		sna.setAttribute("src", source);
	}
	else
	{
		var source = sna.getAttribute("src");
		var lastdot = source.lastIndexOf(".");
		var lastchar = source.length -1;
		var extension = source.substr(lastdot, lastchar);
		var name = source.substr(0, lastdot - 5);
		var source = name + extension;
		//alert(orig_lastdot + " / " + orig_lastchar + " / " + extension);
		sna.setAttribute("src", source);
	}
}


function addLoadEvent(func)
{
	var oldonload = window.onload;
	if(typeof window.onload != 'function')
	{
		window.onload = func;
	}
	else
	{
		window.onload = function()
		{
			oldonload();
			func();
		}
	}
}