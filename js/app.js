$(function() {
	//slider

	$(".rslides").responsiveSlides({

		nav: false,
		auto: true,
		speed: 500,
		timeout: 4000,
		pager: false, 
		namespace: "callbacks",
		maxwidth: 750,
	});
	

//generator imion 

var sheButton = $(".div-generator").find("#female");
var heButton = $(".div-generator").find("#male");



var femaleArray = [  "Afryka",  "Aida",  "Alfa", "Ambra", "Amanda", "Andzia",  "Aria", "Atena", "Aura", "Azja", "Bajka" , "Balbina", "Beksa", "Bella",  "Beta", "Beza", "Bianka", "Birka", "Bierka", "Blanka", "Bona",  "Borówka", "Bójka", "Bramka", "Brenda", "Bryza", "Buba", "Bunia", "Burza", "Busia" , "Madam",
"Armia",  "Awaria",  "Basta",  "Czili", "Mafia",  "Era", "Furia",  "Gama",  "Horka",  "Iryda",  "Narewka",  "Sparta",   "Teba",  "Xara", "Xena",  "Eta",  "Etna",  "Fuga", "Furia",  "Gama",   "Hera", "Horka",  "Kara",  "Kartagina",  "Kobra",  "Ksena", "Leda", "Magnolia", "Mona", "Petra", "Sparta",  "Teba",  "Uza",  "Kaja", "Kalka", "Kama", "Karma", "Karo", "Kawa", "Kita", "Kiwi", "Kleo",  "Klimka",  "Kobra", "Koka", "Kora", "Korka", "Korsa", "Kosa"];
var maleArray = [ "Agat", "Afro", "Ajaks", "Akryl", "Alf", "Alik",  "Amant", "Amor", "Antek", "Aramis", "Ares", "Argus", "Atos", "Apsik",  "Aron", "Asfalt", "Raf",  "Rik",  "Robin",  "Rudi", "Skip",  "Snoopy",  "Szogun", "Tarzan",  "Tedi", "Tolek", "Tutuś",  "Wifi",  "Wigor",  "Wycior",  "Yogi",   "Cezar",  "Dark",  "Diablo",  "Disel", "Fidel",  "Hunter",  "Koks",  "Lester",    "Portos",  "Thor",  "Turbo", "Figo", "Tajfun", "Toffi",
"Macho", "Mad",	"Madox", "Madras", "Majlo", "Major","Makao", "Makbet","Mako","Maks","Makumba"
]; 


var articleG = $(".articleGenerator");
var randomIndexFemale = Math.round(Math.random() * femaleArray.length -1);
var randomIndexMale = Math.round(Math.random() * maleArray.length -1 );	


		//przycisk male
		heButton.on("click", function(){
			var randomIndexMale = Math.round(Math.random() * maleArray.length -1 );	
			if($('#dogname').length != 0){
				
				$('#dogname').text(maleArray[randomIndexMale]);
			} else {
				
				var newDivMale = $("<div>", {id: "dogname"});	
				$(".articleGenerator").append(newDivMale);
				newDivMale.text(maleArray[randomIndexMale]);
			}


		})
		

		//przycisk female 
		sheButton.on("click", function(){
			var randomIndexFemale = Math.round(Math.random() * femaleArray.length -1);
			if($('#dogname').length != 0){
				$('#dogname').text(femaleArray[randomIndexFemale]);
			}else{

				var newDivFemale = $("<div>", {id: "dogname"});
				$(".articleGenerator").append(newDivFemale);
				newDivFemale.text(femaleArray[randomIndexFemale]);
			}
		})




//menu

var btn = $("nav button");
var navUl = $("nav ul");

//console.log(btn, navUl);

if (window.matchMedia("max-width:374px")) {
	btn.on("click" , function() {

		navUl.toggle("showMenu");
	});

}








});

