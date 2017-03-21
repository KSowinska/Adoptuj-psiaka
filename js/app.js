$(function() {

	$(".info").on("mouseenter", function(){
		console.log("działa js");
	});

	var whatFor = $(".main").find("#whatFor");

	$(".why").on("click", function(){
		whatFor.show();
		//console.log("dziala");

	});



});