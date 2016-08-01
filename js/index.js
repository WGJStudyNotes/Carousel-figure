require(['jquery','carousel'],function($,Carousel){
var imgData=['../images/1.jpg','../images/2.jpg','../images/3.jpg','../images/4.jpg'];
new Carousel({
	selector:"#carousel",
	arrowPos:"bottom",
   	buttonType:'squire',
   	imgData:imgData
});
})