const Koa = require('koa')
const fs = require('fs')
const path = require('path')

const app = new Koa()

const server = require('http').createServer(app.callback())
const io = require('socket.io')(server)

app.use(async ctx => {
  const html = fs.readFileSync(path.resolve(__dirname, './index.html')).toString()
  ctx.body = html
})

io.on('connection', function(socket) {
  console.log('a user connected')
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg)
  })
  socket.on('disconnect', function() {
    console.log('user disconnected')
  })
})

server.listen(3000)