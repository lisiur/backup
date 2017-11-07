const R = require('ramda')

var greet = R.replace('{name}', R.__, 'Hello, {name}')
console.log(greet('Alice'))