define(['jquery'],function($){
   function Carousel(options){
   	 var setting={
   	 	arrowPos:"bottom",
   	 	buttonType:'squire'
   	 };
   $.extend(setting,options);
 // Carousel.prototype.run=function(){
 	$Container=$("<div class='carousel-container'></div>");
	$Tab=$('<ul class="carousel-tab"></ul>');
	$Content=$('<div class="carousel-content"></div>');
	$Arrow=$('<div class="carousel-arrow"></div>');
	$Prew=$('<span class="carousel-prew">&lt;</span>');
	$Next=$('<span class="carousel-next">&gt;</span>');
	
 // }
 	$(setting.selector).append($Container);
  var index=0;
 	for (var i = 0; i < setting.imgData.length; i++) {
 		var oLi=$('<li class="'+setting.buttonType+(i==0?' selected':'')+'">'+(setting.buttonType=="squire"?i+1:"")+"</li>")
    	oLi.on("click",function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        index=$(this).index();
        $("img",$Content).eq(index).fadeIn().siblings().fadeOut();
      })
      $Tab.append(oLi);
    	$Content.append('<img src="'+setting.imgData[i]+'"'+'class="'+(i==0?' selected':'')+'"'+'></img>');
 		}
    $Arrow.addClass(setting.arrowPos).append($Prew).append($Next);
  	$Container.append($Tab).append($Content).append($Arrow);
    $Next.on("click",function(){
      index++; 
      if(index>3){
        index=0;
      }
      $("li",$Tab).eq(index).trigger("click");
     
    })
    $Prew.on("click",function(){
      index--; 
      if (index<0) {
        index=3;
      }
      $("li",$Tab).eq(index).trigger("click");
     
    })
 }
return Carousel;
})