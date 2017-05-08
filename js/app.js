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



if (window.matchMedia("max-width:375px")) {
	btn.on("click" , function() {
		navUl.add("invisible");
		navUl.toggle("showMenu");
	});

} 


//quiz


var breedQuiz = {
	questions: [
	{
		title: "Jak dużo czasu spędzasz poza domem?",
		answers: [
		{
			answer: "2-3 godziny",
			result: "labrador"

		},
		{
			answer: "11-12 godzin",
			result: "york"
		},
		{
			answer: "5-6 godzin",
			result: "kundelek"

		},
		{
			answer: "8-9 godzin",
			result: "amstaff"
		}
		]
	},
	{
		title: "Jak wygląda Twoja aktywność?",
		answers: [
		{
			answer: "Lubię spacerować i robię to 2-3 razy w tygodniu",
			result: "labrador"

		},
		{
			answer: "A liczy się, że przedwczoraj wstałem/łam po pilota? :)",
			result: "york"
		},
		{
			answer: "Raz w tygodniu jeżdzę na rowerze lub pływam",
			result: "kundelek"
		},
		{
			answer: "Co drugi dzień biegam lub ćwiczę",
			result: "amstaff"
		}
		]
	},
	{
		title: "Czy wielkość psa ma dla Ciebie znaczenie?",
		answers: [
		{
			answer: "Lubię duże psy",
			result: "labrador"

		},
		{
			answer: "Chcę małego psa, do 10 kg",
			result: "york"
		},
		{
			answer: "Nie",
			result: "kundelek"

		},
		{
			answer: "Chcę średniej wielkości psa do ok 20 kg",
			result: "amstaff"

		}
		]
	},
	{
		title: "Które zdanie najlepiej do Ciebie pasuje:",
		answers: [
		{
			answer: "Nie lubię zmian, wolę sprawdzone rzeczy",
			result: "labrador"

		},
		{

			answer: "Lubię przebywać w towarzystwie, poznawać nowe osoby, nowe miejsca",
			result: "york"
		},
		{

			answer: "Jestem optymistą, zawsze wierzę, że będzie dobrze",
			result: "kundelek"
		},
		{
			answer: "Jestem domatorem - herbata, książka, bliska osoba to wszystko co mi potrzeba do szczęścia",
			result: "amstaff"
		}
		]
	}
	],

	results: ["labrador", "york", "kundelek", "amstaff"],
	descriptions: [
	"Labradory to psy, które chętnie sie uczą, lubią aktywny tryb życia i zabawę. Jeśli możesz mu to dać to pies dla Ciebie",
	"Chciałbyś psa, ale takiego z którym nie będziesz musiał dużo chodzić, i który chętnie posiedzi z Tobą na kanapie - yorkowi zwykle wystarczy niedługa rundka koło bloku więc może pasujecie do siebie?",
	"Wiesz, że chcesz psiaka ale nie masz wymagań co do wielkości czy rasy, więc idealnym wyborem będzie kundelek ze schroniska, który akurat poruszy Twoje serce, może być mały lub średniej wielkości, na pewno będzie Twoim wiernym przyjacielem",
	"Lubisz psy średniej wielkości, aktywne, które są zapatrzone w swojego człowieka; jeśli nie patrzysz stereotypowo - przygarnij amstaffa."
	]
};




function randomize(elements) {
	for (var i = 0; i < elements.length; i++) {
		var j = Math.floor(Math.random() * elements.length);
		var temp = elements[i];
		elements[i] = elements[j];
		elements[j] = temp;
	}
	return elements;
}

var index = 0; 
var quiz = breedQuiz;
var questions = quiz.questions;
var questionSet = questions.length;
var collectedAnswers = []; 
var startingBtn = $("#start");

startingBtn.on("click", function(event) {
	$(this).remove();
	$(this).parent().remove();
	var testBoard = $("<div>");
	testBoard.addClass("board");
	testBoard.appendTo($("body"));
	testBoard.attr("id", "testBoard");

	var button = $("<button>Zaczynamy!</button>");
	button.appendTo(testBoard);
	button.attr("class", "startTest");
});


function createQuestion() {
	if (index < questionSet) {
		var answers = questions[index].answers;
		randomize(answers);

		var title = $("<h5>", {
			class: "title"
		});
		title.appendTo(testBoard);
		var quizDiv = $("<div>", {
			class: "quizDiv"
		});
		quizDiv.insertAfter(title);
		title.text(questions[index].title);
		for (var i = 0; i < answers.length; i++) {
			var label = $("<label>");
			label.appendTo(quizDiv);
		}

		var labels = quizDiv.find("label");
		for (var i = 0; i < labels.length; i++) {
			$(labels[i]).text(answers[i].answer); 
			$(labels[i]).attr("data", answers[i].result);
		}

		labels.each(function(index2, value) {
			var input = $("<input>");
			input.attr("type", "radio");
			input.attr("name", "one");
			input.prependTo($(this));
		});

		var inputs = quizDiv.find("input");
		inputs.on("change", function(event) {
			$(this).parent().addClass("checked");
			$(this).parent().siblings("label").removeClass(); 
		});

		var button = $("<button>", {
			class: "quizButton"
		});
		button.appendTo(quizDiv);
		button.text("dalej");
	} else {
		showResults();
	}
}

function showResults() {
	var resultsBoard = $("<div>", {
		class: "resultsBoard"
	});
	resultsBoard.appendTo($("body"));
	$("body").children().not(resultsBoard).hide();
	var resultsParagraph = $("<p>", {
		class: "resultsParagraph"
	});
	resultsParagraph.appendTo(resultsBoard);
	var result0 = collectedAnswers.filter(function(item) {
		return item === quiz.results[0];
	}).length;
	var result1 = collectedAnswers.filter(function(item) {
		return item === quiz.results[1];
	}).length;
	var result2 = collectedAnswers.filter(function(item) {
		return item === quiz.results[2];
	}).length;

	if (result0 > result1 && result0 > result2) {
		resultsParagraph.text(quiz.descriptions[0]);
	} else if (result1 > result0 && result1 > result2) {
		resultsParagraph.text(quiz.descriptions[1]);
	} else if (result2 > result0 && result2 > result1) {
		resultsParagraph.text(quiz.descriptions[2]);
	} else {
		resultsParagraph.text(quiz.descriptions[3]);
	}
}

function createAlertBox(element) {
	var alertBox = $("<div>", {
		class: "alertBox"
	});
	var alertP = $("<p>");
	alertBox.prependTo(element);
	alertP.appendTo(alertBox);
	alertP.text("Zaznacz odpowiedź zanim pójdziesz dalej");

	var hideAlertBtn = $("<button>", {
		class: "hideAlertBtn"
	});
	hideAlertBtn.appendTo(alertBox);
	hideAlertBtn.text("OK");
}


$("body").on("click", ".startTest", function() {
	$(this).remove();
	randomize(questions);
	createQuestion();
});

$("body").on("click", ".quizButton", function() {
	var labels = $(this).siblings("label");
	
	var checked = labels.find("input:checked");
	
	var labelText = checked.parent().text();
	
	var dataText = checked.parent().attr("data");
	if (index < questionSet) {
		
		if (dataText === undefined) {
			createAlertBox($("#testBoard"));
		} else {
			index++;
			collectedAnswers.push(dataText);
			console.log(collectedAnswers, collectedAnswers.length);
			createQuestion();
			$(this).parent().hide();
			$(this).parent().prev().hide();
		}
		
	} else {
		showResults();
	}
});

$("body").on("click", ".hideAlertBtn", function() {
	$(this).parent().remove();
});






});





