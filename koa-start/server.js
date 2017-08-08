const path = require('path')
const Koa = require('koa')
const serve = require('koa-static')
const fs = require('fs')

const app = new Koa()
const router = require('./router.js')

app.use(async (ctx, next) => {
	console.log(ctx.request)
	await next()
	console.log(ctx.response)
})

app.use(serve('public'));

// app.use(async (ctx, next) => {
// 	if (ctx.request.url === '/boom') {
// 		ctx.redirect('/')
// 		ctx.body = 'World'
// 	} else {
// 		let file = await new Promise((res, rej) => {
// 			res(fs.readFileSync('./public/rebot.txt'))
// 		})
// 		ctx.type = '.txt'
// 		ctx.response.attachment()
// 		ctx.body = file
// 	}
// })

app.listen(3001)
