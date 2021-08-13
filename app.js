

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


class dragon {
	constructor(id){
		this.moveX = 2;
		this.moveY = 2;
		this.position = 1;
		this.toRight = true;
		this.id = id;
	}
	getPosition(){
		return this.position;
	}
	move(no){
		if(this.toRight){
			if(this.moveX + (no*52) > 470){
				this.toRight = false;
				this.position = this.position + (470 - this.moveX)/52 + 1;
				let prevX = this.moveX;
				this.moveX = 470;
				this.render()
				setTimeout(()=>{
					this.moveY = this.moveY + 52;
					this.render();
					setTimeout(()=>{
						this.move(no - ((470 - prevX)/52) - 1);
					},1000);
				},1000);
			}
			else{
				this.moveX = this.moveX + no*52;
				this.position = this.position + no;
				this.render();
			}
		}else{
			if(this.moveX - (no*52) < 2){
				this.toRight = true;
				this.position = this.position + (this.moveX - 2)/52 + 1;
				let prevX = this.moveX;
				this.moveX = 2;
				this.render();
				setTimeout(()=>{
					this.moveY = this.moveY + 52;
					this.render();
					setTimeout(()=>{
						this.move(no - (prevX - 2)/52 - 1); 
					},1000);
				},1000);
			}else{
				this.moveX = this.moveX - no*52;
				this.position = this.position + no;
				this.render();
			}
		}
	}
	render(){
		$(this.id).css("transform", "translate( "+this.moveX+"px , "+ (this.moveY * -1 ) +"px )");
	}
}

let dragon1 = new dragon("#dragon1");

dragon1.move(67);