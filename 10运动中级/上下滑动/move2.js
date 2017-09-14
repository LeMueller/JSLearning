function getStyle(obj, name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj, false)[name];
	}
}

//startMove(oDiv, {width:400, height:400})
function startMove(obj, json, fnEnd)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){

		var bStop=true; //假设，所有值都到了

		for(var attr in json){

			var cur=0;

			//取整
			//如果取值是不透明度（特殊情况）
			if(attr=='opacity')
			{
				cur=Math.round(parseFloat(getStyle(obj, attr))*100);
			}
			//如果取值是其他
			else
			{
				cur=parseInt(getStyle(obj, attr));
			}
			
			//设定速度
			var speed=(json[attr]-cur)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(cur!=json[attr]){
				bStop=false;
			}

			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
					//document.getElementById('txt1').value=obj.style.opacity;
			}else{
				obj.style[attr]=cur+speed+'px';
			}
			
		}

		if(bStop){
				clearInterval(obj.timer);
				if(fnEnd)fnEnd();
		}
	}, 30);
}