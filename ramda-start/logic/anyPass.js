const R = require('ramda')

var isClub = R.propEq('suit', '♣')
var isSpade = R.propEq('suit', '♠')
var isBlackCard = R.anyPass([isClub, isSpade])

isBlackCard({rank: '10', suit: '♣'})
isBlackCard({rank: 'Q', suit: '♠'})
isBlackCard({rank: 'Q', suit: '♦'})