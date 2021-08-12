

// Toss Part --------------------------------------------------------------------

var isStarted = false;

$("#toss-button").click(function() {
	if(isStarted === false) {
		var result = Math.floor((Math.random()*2));
		var resultImage ;
		if(result === 0){
			resultImage =  "images/heads.jpg";
		}else {
			resultImage = "images/tails.jpg";
		}
		$("#toss-image").attr("src" , resultImage);
		$("#toss-image").addClass("centralize-toss");
		isStarted = true;
	}else{
		console.log("Game is already started");
	}
	
})