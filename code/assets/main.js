// All our code goes here

$(document).ready(function (e) {
    var numberOfDivs = 3;
    var score = 0;
    var pucksRemaining = numberOfDivs;
    var highScore = 0;
    var timer = 0;
    var maxHeight = 590;
    var maxWidth = 750;

    // add # of divs to page.
    for (var i = 0; i < numberOfDivs; i++) {
        var c = Math.floor(Math.random() * 10);
		var x = Math.floor(Math.random() * maxWidth);
        var y = Math.floor(Math.random() * maxHeight);
        //Create div with class c0/c10 to give them random and different colors
        var p = $('<div/>')
        	.addClass('c' + c).addClass('g0').addClass('puck')
        	.css("left", x + 'px')
        	.css("top", y + 'px');
        //Add object to gameArea
        $('#gameArea').append(p);
    }

    //Animate our pucks
    $('.puck').movingBubble({ addCss: false });
    $('.puck').on("click", function(){
    	$(this).remove();
    	scoreTally();
    });
	
	function scoreTally() {
	    pucksRemaining--;
	    if (pucksRemaining == 0) {
	    	gameOver();
	    } else {
	    	console.log(pucksRemaining + ' Pucks remaining');
	    }
	    };

	function timeRemaining(){
		return "Not yet implemented"

	}

	function gameOver(){
		console.log('Game over! You caught ' + numberOfDivs + ' pucks in ' + timeRemaining() + ' seconds!')
	}

	function updateHighScore(){
		return "Not yet implemented"
	}

});

