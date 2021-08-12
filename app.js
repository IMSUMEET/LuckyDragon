

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
		$(".toss-roll").css("transition-delay", "2s");
		$(".toss-roll").css("transform", "translateX(125%)");
	}else{
		console.log("Game is already started");
	}
	
});

$(".toss-roll").css("transform", "translateX(0%)");

for(let i = 100; i >=1 ; i-- ){
	$(".main").append("<div class='block'>"+i+"</div>");
}

function findPosition(blockPosition){
	blockPosition = blockPosition - 1;
	const row = 10 - Math.floor(blockPosition/10);
	const toLeft = row % 2 === 0;
	const column = blockPosition%10
}

