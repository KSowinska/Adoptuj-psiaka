$(function() {


	$(".rslides").responsiveSlides({

		nav: false,
		auto: true,
		speed: 500,
		timeout: 4000,
		pager: false, 
		namespace: "callbacks",
		maxwidth: 750,
	});
	







//slider 

/*
function slider() {
	//var nextBtn = $("#nextPicture");
	//var prevBtn = $("#prevPicture");	
	var liAll = $(".slider").find("li");
	var number = $(".slider").find("img").index(0);
	var width1 = liAll.first().width();
	var images = $(".slider").find("img");
	var imagesNumber = images.length;
	var ul = $(".slider").find("ul");
	var cloneLi1 = liAll.first().clone()
	var cloneLi7 = liAll.last().clone()

	cloneLi1.appendTo(ul);

	cloneLi7.prependTo(ul);


	//console.log(nextBtn,prevBtn,liAll,number,width1,imagesNumber,images,ul);
	//console.log(cloneLi1, cloneLi7);



ul.css("left", "-="+width1+ "px"); //żeby nie widzieć klona ostatniego przesuwam 
//calą listę w prawo

nextBtn.on("click", function(){
	number++
	//console.log("klikam next ");
	ul.animate ({
		"left": "-="+width1+"px"
	}, function() {
		
		if (number -2 >= liAll.length - 2) {
			number = 0;
			ul.css("left", - width1 + "px");
		}
	})

	

});

prevBtn.on("click", function(){
	number--
	
	//console.log("klikam prev ");
	ul.animate ({
		"left": "+="+width1+"px"
	}, function() {
		
		if (number <=-1) {
			number = liAll.length -1;
			ul.css("left", (width1*imagesNumber)*-1);
		}
	})

	

});


};

slider();


*/








});

