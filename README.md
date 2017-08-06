# Websocket Server Boilerplate

Boilerplate for a websocket-based “micro service” server running on Node.js, Express, MongoDB.

This is for when you DON’T want websocket client files to be hosted on the websocket server.

The client can run on another machine and connect over websockets:

![Chart](http://i.stack.imgur.com/eC1Va.png)


## Server

Found in `/server` folder.

Start with:

	grunt serve

The server is based on the [angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack) generator and contains Node.js, Express, MongoDB.


## Client

Found in `/client` folder. This is like a “dashboard” for the websocket server. The “Test Client” below is more interesting.


## Test Client

Found in `/test-client` folder.

Start with:

	cd test-client
	python -m SimpleHTTPServer 9007

The test client is written in AngularJS and uses [angular-socket-io](https://github.com/btford/angular-socket-io).


## Thanks to

Big thanks to [Leszek Hanusz](http://stackoverflow.com/users/1221252/leszek-hanusz) for solving [my Socket.io issues](http://stackoverflow.com/questions/27998407/socket-io-cannot-connect-resorts-to-polling).
