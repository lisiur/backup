const R = require('ramda')

var lessThan0 = R.flip(R.lt)(0)
var lessThan2 = R.flip(R.lt)(0)

R.any(lessThan0)([1,2])
R.any(lessThan2)([1,2])