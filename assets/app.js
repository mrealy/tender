// GLOBAL VERIABLES //

var allergies;
var recipeCount;
var restrictions;
var comparisonArray = [];

//jQuery
$(document).ready(function () {

	//collecting info on 
	$('#submit-data').on('click', function(event) {
		event.preventDefault();

		console.log('submit button has been clicked');
		//collecting the user responses
		allergies = $('#allergies').val().trim();
		recipeCount = $('#recipe-count').val();
		//adding user responses to local storage
		localStorage.clear();
		localStorage.setItem('allergies', allergies);
		localStorage.setItem('recipe count', recipeCount);

	//collecting restrictions may be tricky if they're multiple choice.
	//let's talk about what data we want to collect, and how we're collecting it.

		console.log(allergies + ' ' + recipeCount);

	});

recipeCount = parseInt(localStorage.getItem('recipe count'));

		for (i = 1; i <= recipeCount; i++) {
			// placeholder images, will be replaced with data from API
			$('#recipe-comparisons').append('<img src="http://www.sluniverse.com/200.jpg">');
		}
	

//  console.log(localStorage.getItem('allergies'));
	$('.no').on('click', function() {
		
		console.log('Next recipe image/name would generate / be called from API');
		// calls another recipe from API
	});

	$('.yes').on('click', function(){
		console.log(recipeCount);

		console.log('Either continues "swiping" or goes to the comparison page');
		// Store approved recipe into comparison array.
		comparisonArray.push('test');
		console.log(comparisonArray + comparisonArray.length);
		// if comparison array.length < numRecipes: next recipe generates on swipe screen
		if (comparisonArray.length < recipeCount) {
			console.log('next recipe will pull from API');
		}
		// else if comparison array.length = numRecipes: go to comparison page
		if (comparisonArray.length === recipeCount) {
			location.href='comparison.html';
		}
	});

	function callAPI () {
			var URL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?limitLicense=false&" +cuisine+ "&" + restriction + "&" + allergies;
	console.log(URL);
	$.ajax({
            url: URL,
            type: 'GET',
            dataType: 'json',
            headers: {
                'X-Mashape-Key': 'ZdKhTNFHHDmshquH7By5lOHgNXebp1m1xmfjsnQzYt1dr9fosl',
                'Accept': 'application/json'
            },
            contentType: 'application/json; charset=utf-8',
            success: function (result) {
              console.log(result);
              console.log(result.results[0].title);

               // $("#food-view").text(result[0].name);
            },
            error: function (error) {
                
            }
        });
};

//end document ready, end script
});