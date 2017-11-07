const R = require('ramda')

var mapIndexed = R.addIndex(R.map)
var rst = mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r'])
console.log(rst)