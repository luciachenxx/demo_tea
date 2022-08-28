var s = skrollr.init();//初始化

$(window).scroll(function(evt){
	if($(window).scrollTop()>0)
		$(".navbar").removeClass("navbar-top");
	else
		$(".navbar").addClass("navbar-top");
});

//$(window).scrollTop() 
//console找高度

//查看navbar-top樣式 bootstrap

//茶葉悖論：說明攪動茶杯中的茶後，茶葉不會如預期因離心力而分散在茶杯邊緣，反而集中在茶杯中央的現象。