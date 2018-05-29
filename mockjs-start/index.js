var Mock = require('mockjs')
var data = Mock.mock({
  'list|1-10': [{
    'id|1-100.1-10': 0
  }]
})
 var data = Mock.mock({
   'id|1-3': [1,2,3]
 })

 var data = Mock.mock({
   first: '@FIRST',
   middle: '@FIRST',
   aaa: '@FIRST',
   lst: '@LAST',
   full: '@first @middle @aaa @lst'
 })

console.log(JSON.stringify(data, null, 4))
