// All our code goes here

$(document).ready(function (e) {
    var numberOfDivs = 3;
    var score = 0;
    var pucksRemaining = numberOfDivs;
    var highScore = 0;
    var timer = 60;
    var maxHeight = 590;
    var maxWidth = 750;

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
	});

	// start movement: $('.puck').movingBubble();
	// stop movement: $('.puck').stop();
	// toggle hidden pucks: $('.puck').toggle();

	// TODO: implement a timer loop using setInterval to check if we have run out of time yet
	// https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval
	// TODO: implement READY? screen on page load and wait for the a click to start the game
	// TODO: break out ready screen into more functions for game start
	// TODO: implement Game Over! screen
	// TODO: implement reset button
	// TODO: pass config vars through to library rather than hand code
	// TODO: implement levels with increasing numbers of pucks
	// TODO: persistant high scores with user input names
	
	// found this countdown at http://jsfiddle.net/mrwilk/qVuHW/  -- I only used the top countdown timer
	function countdown( elementName, minutes, seconds )
	{
	    var element, endTime, hours, mins, msLeft, time;

	    function twoDigits( n )
	    {
	        return (n <= 9 ? "0" + n : n);
	    }

	    function updateTimer()
	    {
	        msLeft = endTime - (+new Date);
	        if ( msLeft < 1000 ) {
	            element.innerHTML = "countdown's over!";
	        } else {
	            time = new Date( msLeft );
	            hours = time.getUTCHours();
	            mins = time.getUTCMinutes();
	            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
	            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
	        }
	    }

	    element = document.getElementById( elementName );
	    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
	    updateTimer();
	};

	countdown( "countdown", 0, timer );

});

