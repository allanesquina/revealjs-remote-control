window.onload = function() {	
	var socket = io.connect('http://localhost:3000');
	socket.on('action', function (data) {
		console.log(data);
		switch(data.act){
			case "next":
				Reveal.next();
				break;
			case "prev":
				Reveal.prev();
				break;
			case "left":
				Reveal.left();
				break;
			case "right":
				Reveal.right();
				break;
			case "up":
				Reveal.up();
				break;
			case "down":
				Reveal.down();
				break;				
		}
	});
}





