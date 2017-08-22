const http = require('http')
const server = http.createServer((req, res) => {
  req.on('error', err => {
    console.error(err.stack)
    res.statusCode = 400
    res.end()
  })
  res.on('error', err => {
    console.error(err.stack)
    res.statusCode = 500
    res.end()
  })

  if (req.url === '/echo') {
    req.pipe(res)
  } else {
    res.statusCode = 404
    res.end()
  }
}).listen(1234, '172.20.5.164')
