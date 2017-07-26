let net = require('net');

let server = net.createServer(socket => {
	socket.on('data', data => {
		socket.write(data)
	})

	socket.on('end', () => {
		console.log('connection closed')
	})

	socket.write("welcome\n")
})

server.listen(8000)


