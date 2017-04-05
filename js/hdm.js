$(function(){
$("#center .right .ti a").click(function(){
	$(this).addClass("sp").siblings("a").removeClass("sp");
	$index=$(this).index();
	$("#center .right .it:eq("+$index+")").show().siblings("div.it").hide();
});
});