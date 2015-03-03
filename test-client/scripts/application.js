 // Create module
var socketTestApp = angular.module('SocketTestApp', ['btford.socket-io']);

socketTestApp.factory('mySocket', function (socketFactory) {
	var myIoSocket = window.io.connect('http://localhost:9006');
	//var myIoSocket = window.io.connect('http://localhost:9006', { transports: ['websocket'] });

	var mySocket = socketFactory({ ioSocket: myIoSocket });

	mySocket.forward('pong'); // Creates a $scope.$on event called 'socket:pong'

	return mySocket;
});

socketTestApp.controller('SocketTestCtrl', function ($scope, mySocket) {

	$scope.statusMessage = "Angular is online.";

	mySocket.on('connect', function (event, data) {
		$scope.statusMessage = "Socket.io is connected";
	})

	mySocket.on('pong', function (data) {
		console.log('mySocket.pong', data);
	})

	// Same as mySocket.on('pong') but on $scope and with an event object
	$scope.$on('socket:pong', function (event, data) {
		console.log('socket:pong', event, data);
		$scope.statusMessage = event.name + ' - ' + data;
	});

	$scope.sendPing = function () {
		mySocket.emit('ping');
	};

});