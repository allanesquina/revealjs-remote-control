;(function(win, doc, io){

	"use strict";

	var _socket, 
		_server = "http://localhost:8080";

	//Namespace
	var RemoteControl = win.RemoteControl || {

		init: function() {
			_socket = io.connect(_server);
			this.configureEvents();
		},

		action: function(data) {
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
		},

		configureEvents: function() {
			_socket.on('action', this.action);
		}
	};

	win.RemoteControl = RemoteControl;

}(window, document, io));

window.onload = function() {	
	RemoteControl.init();
};





