const Router = require(koa-router)
const router = new Router()

router
	.get('/', (ctx, next) => {
		ctx.body = "GET '/'"
	})
	.get('/success', (ctx, next) => {
		ctx.body = "GET '/success'"
	})
	.post('/upload', (ctx, next) => {
		ctx.redirect('/success')
	})

module.exports = router
