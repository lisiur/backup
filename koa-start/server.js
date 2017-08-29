const path = require('path')
const Koa = require('koa')
const serve = require('koa-static')
const fs = require('fs')
const Router = require('koa-router')
// const router = require('./router.js')

const app = new Koa()
const router = new Router()

router.get('/', function(ctx, next) {
  ctx.body = 'GET index'
})

router.get('/user/:username', function(ctx, next) {
  let username = ctx.params.username
  ctx.body = `GET user:${username}`
})

app.use(router.routes())

app.listen(3001)
