// All our code goes here

$(document).ready(function (e) {
    var numberOfDivs = 10;
    var score = 0;
    var pucksRemaining = numberOfDivs;
    var highScore = 0;
    var timer = 30;
    var maxHeight = 590;
    var maxWidth = 750;
    var elementName = "countdown";

    // add # of divs to page.
    for (var i = 0; i < numberOfDivs; i++) {
        var c = Math.floor(Math.random() * 13);
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
    $('.puck').on("click", function(){
    	$(this).remove();
    	scoreTally();
    });

   /* function pointTally() {
    	score += 5;
	    return;
    } */
	
	function scoreTally() {
	    pucksRemaining--;
	    if (pucksRemaining == 0) {
	    	gameOver();
	    } else {
	    	console.log(pucksRemaining + ' Pucks remaining');
	    }
	    score += 5;
	    return;
	};

	function countdown( elementName, seconds ) {
	    var element, endTime, msLeft, time;

	    function digits( n ) {
	        if (n >= 100) {
	        	return n;
	        } else if (n <= 99) {
	        	return ("0" + n)
	        } else {
	        	return (n <= 9 ? "0" + n : n);
	        }
	    }

	    function updateTimer() {
	        msLeft = endTime - (+new Date);
	        if ( msLeft < 1000 ) {
	            element.innerHTML = "Times Up!";
	            gameOver();
	        } else if (pucksRemaining == 0){
	        	gameOver();
	        	element.innerHTML = "You don't seem to need the rest of your time! Good job!";
	        } else {
	            time = new Date( msLeft );
	            seconds = (time.getUTCMinutes() * 60) + time.getUTCSeconds();
	            element.innerHTML = (digits( seconds ));
	            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
	        }
	    }

	    element = document.getElementById( elementName );
	    endTime = (+new Date) + (1000 * seconds);
	    updateTimer();
	};

	function gameOver(){
		console.log('Game over! You caught ' + numberOfDivs + ' pucks in ' + timer + ' seconds!');
		$('#gameArea').append('<div id=\"messageOverlay\"><h1>Game Over, Yo!<br>You\'re score is: ' + score + '</h1></div>');
	}

	function updateHighScore(){
		return "Not yet implemented"
	}

	function addOverlay(){
		var output = "<div id=\"messageOverlay\"><h1>Ready?</h1></div>";
		$('#gameArea').append(output);
	}

	function removeOverlay (){
		$('#messageOverlay').remove();
	}

	function ping () {
		console.log('ping function fired');
	}

	$("#messageOverlay" ).on("click", function (){
		removeOverlay();
		ping();
		$('.puck').movingBubble();
		countdown( "countdown", timer );
	});

	// start movement: $('.puck').movingBubble();
	// stop movement: $('.puck').stop();
	// toggle hidden pucks: $('.puck').toggle();

	// Done: implement a timer loop using setInterval to check if we have run out of time yet
	// https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval
	// Done: implement READY? screen on page load and wait for the a click to start the game
	// TODO: break out ready screen into more functions for game start
	// Done: implement Game Over! screen
	// TODO: implement reset button
	// TODO: pass config vars through to library rather than hand code
	// TODO: implement levels with increasing numbers of pucks
	// TODO: persistant high scores with user input names
	
	
});

