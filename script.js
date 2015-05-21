function draw(){
	var canvas = document.getElementById('tutorial');
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");
		
		/* Uncomment to see rectangles
		ctx.fillStyle = "rgb(200,0,0)";
		ctx.fillRect (100, 100, 55, 50);

		ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
		ctx.fillRect (130, 130, 55, 50);
		*/
	}
}

window.onload = function() {
	draw();
}
