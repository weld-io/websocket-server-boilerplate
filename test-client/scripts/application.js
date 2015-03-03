 // Setter
var socketTestApp = angular.module('SocketTestApp', ['btford.socket-io']);

socketTestApp.factory('mySocket', function (socketFactory) {
	var myIoSocket = window.io.connect('http://localhost:9006');

	// I expect this event to be triggered
	myIoSocket.on('connect_failed', function(){
		console.log('Connection Failed');
	});
	myIoSocket.on('connect', function(){
		console.log('Connected');
	});
	myIoSocket.on('disconnect', function () {
		console.log('Disconnected');
	});
	myIoSocket.send('hi there');

	
	var mySocket = socketFactory({
		ioSocket: myIoSocket
	});

	mySocket.forward('pong');

	console.log('mySocket', mySocket);
	return mySocket;
});

socketTestApp.controller('SocketTestCtrl', function ($scope, mySocket) {

	$scope.testVal = "adfasd";

	$scope.$on('socket:pong', function (ev, data) {
		console.log('socket:pong', ev, data);
	});

	//mySocket.emit('info');

});





// var MYAPP = MYAPP || {};

// (function(MYAPP) {

// 	MYAPP.log = function (str) {
// 		console.log(str);
// 	};

// }(MYAPP));


// (function($) {
	
// }(jQuery));