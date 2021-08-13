
let dragon1 = new dragon("#dragon1");
let dragon2 = new dragon("#dragon2");
let player = 1;




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
		setTimeout(()=>{
			$("#toss-image").css("visibility", "hidden");
			$("#toss-button").css("visibility", "hidden");
			$("#roll-img").css("visibility" , "visible");
			$("#roll-dice").css("visibility" , "visible");
		},1500);
		// $(".toss-roll").css("transition-delay", "2s");
		// // $(".toss-roll").css("transform", "translateX(125%)");				
	}else{
		console.log("Game is already started");
	}
});

$(".toss-roll").css("transform", "translateX(0%)");




// Rolling Dice Part ------------------------------------------------------------------

$("#roll-dice").click(function() {

	$("#roll-dice").css("visibility", "hidden");

	var diceValue = Math.floor((Math.random() * 6) + 1);
	$("#roll-img").attr("src", "images/dice" + diceValue + ".jpg");

	if($("#roll-dice").text() === "Roll Player 1"){
		setTimeout(()=>{
			$("#roll-dice").text("Roll Player 2");
		},2500);
	}else {
		setTimeout(()=>{
			$("#roll-dice").text("Roll Player 1");
		},2500);
		
	}

	$(".toss-roll").css("transition-delay", "2s");
	$(".toss-roll").css("transform", "translateX(180%)");


	setTimeout(()=>{
		if(player === 1){
			dragon1.move(diceValue);
			player = 2;
		}else {
			dragon2.move(diceValue);
			player = 1;
		}
		$(".toss-roll").css("transform", "translateX(0%)");
		$("#roll-dice").css("visibility", "visible");
	},3500)
	
});




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

for(let i = 100; i >=1 ; i-- ){
	$(".main").append("<div class='block' style='order :"+ findPosition(i) + ";'>"+ i +"</div>");
}



