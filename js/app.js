$(function() {

	//$(".info").on("mouseenter", function(){
	//	console.log("działa js <3");
	//});

/*	var whatFor = $(".main").find("#whatFor");

	$(".why").on("click", function(){
		whatFor.toggle();
		//console.log("dziala");


	});
	*/
	
	var linki = $(".main").find(".list");
	$(".links").on("click", function(){
		linki.toggle();
	}); 
});

