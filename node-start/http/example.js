const https = require('https')

const req = https.request('https://lisiur.com', res => {
  console.log('statusCode', res.statusCode)
  console.log('headers:', res.headers)
  res.on('data', d => {
    console.log(d)
    // process.stdout.write(d)
  })
})

req.on('error', e => {
  console.log(error)
})

req.end()
