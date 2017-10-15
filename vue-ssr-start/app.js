const Vue = require('vue')
module.exports = function createApp (ctx) {
  return new Vue({
    data: {
      url: ctx.url
    },
    template: `<div>访问的 URL 是：{{ url }}</div>`
  })
}