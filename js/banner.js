window.onload=function(){
var img1=document.getElementById("banner");
var oImg=img1.getElementsByTagName("img")[0];
var aSpan=img1.getElementsByTagName("span");
var k=1;
setInterval(function(){
	oImg.src="images/banner_0"+k+".jpg";
	for(var i=0;i<aSpan.length;i++){
		aSpan[i].style.background="url(images/dot_06.png)";
		aSpan[k-1].style.background="url(images/dot_08.png)";
	}
	k++;
	if(k>4){
		k=1;
	}
},1000);
}