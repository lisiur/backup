const { Map } = require('immutable')
const map1 = Map({ a: 1, b: 2, c: 3})
const map2 = map1.set('b', 50)
const a = map1.get('b') + ' vs. ' + map2.get('b')
console.log(a)

const b = (11 / 10)
console.log(b)
