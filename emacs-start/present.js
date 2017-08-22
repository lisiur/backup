/* @flow */

export const max_update_count = 100
let waiting = false
let flushing = false
let index = 0

function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0
  has = {}
  if (process.env.NODE_ENV !== 'production') {
    circular = {}
  }
  waiting = flushing = false
}

var hw = [ "hello", "world", "hihao", "shijie" ]
var sdf = [ "sdfd", "sdf", "d",  "sdfds",  "sdfds",  "sdf" ]
var test = [ "nihoa", "shijie", "hello", "world" ]
var sfds = [ "sdfdsf",  "sdfsdfs",  "sdfsdf", "sdsfsdf", "]"
