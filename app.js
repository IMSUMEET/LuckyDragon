

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

// getting position of the block with the given number -------------------------------------------------------------

function findPosition(blockPosition) {

	let row ;
	let toLeft = false;
	let toRight = false;


	// check row of the block
	if(blockPosition % 10 === 0){
		row = Math.floor(blockPosition / 10);
	}else {
		row  = Math.floor(blockPosition/10) + 1;
	}
	
	// check direction
	if(row % 2 === 0) {
		// if row number is even
		toLeft = true;
	}else {
		// if row number is odd
		toRight = true;
	}

	let actualPosition = 0;

	// final calculation
	if(toRight) {
		if(blockPosition % 10 === 0){
			actualPosition += (11 - row) * 10;
		}else {
			actualPosition += ((10 - row) * 10) + (blockPosition % 10);
		}
		
	}else{
		if(blockPosition % 10 === 0) {
			actualPosition += ((10 - row) * 10) + 1;
		}else {
			actualPosition += ( ( (10 - row) * 10) + (11 - (blockPosition % 10)) );
		}
	}

	return actualPosition;

}

