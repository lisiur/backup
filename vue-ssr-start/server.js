#!/Users/lisiur/.nvm/versions/node/v8.2.1/bin/node
const Vue = require('vue')
const fs = require('fs')
const Koa = require('koa')
const { promisify } = require('./utils')
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./template/index.html', 'utf-8')
})
const renderToString = promisify(renderer.renderToString)
const createApp = require('./app')

const server = new Koa()

server.use(async ctx => {
  const context = {
    title: 'Index'
  }
  const app = createApp({
    url: ctx.request.url
  })
  await renderToString(app, context)
        .then(html => {
          ctx.body = html
        })
        .catch(err => {
          if (err.code === 404) {
            ctx.status = 404
            ctx.body = 'Page not found'
          } else {
            ctx.status = 500
            ctx.body = 'Internal Server Error'
          }
        })
})

server.listen(3000)