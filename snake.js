
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