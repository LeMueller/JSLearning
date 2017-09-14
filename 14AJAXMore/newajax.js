function ajax(url, fnSucc, fnFaild){
	//1.创建ajax对象
				
	if(window.XMLHttpRequest){
		//非IE6
		var oAjax=new XMLHttpRequest();
	}else{
		//IE6
		var oAjax=new ActiveXobject("Microsoft.XMLHTTP");
	}
	
	//2.链接服务器
	//open(方法,文件名, 异步传输)
	oAjax.open('GET',url, true);

	//3.发送请求
	oAjax.send();

	//4.接收返回
	oAjax.onreadystatechange=function(){

		//oAjax.readyState 浏览器和服务器进行到哪一步
		if(oAjax.readyState==4){ //读取完成
			if(oAjax.status==200){//成功
				fnSucc(oAjax.responseText);
			}else{
				if(fnFaild){
					fnFaild(oAjax.status);
				}
			}
		} 

	}
}