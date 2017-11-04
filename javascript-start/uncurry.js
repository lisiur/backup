Function.prototype.uncurrying = function() {
    var self = this
    return function() {
        var context = Array.prototype.shift.call( arguments )
        return self.apply( context, arguments )
    }
}

Function.prototype.uncurrying2 = function() {
    var self = this
    return function() {
        return self.call.apply( self, arguments )
    }
}

Function.prototype.uncurrying3 = function() {
    var self = this
    return function( context, ...args ) {
        return self.apply( context, args )
    }
}

for ( let i = 0, fn, ary = [ 'push', 'shift', 'forEach' ]; fn = ary[ i++ ]; ) {
    Array[ fn ] = Array.prototype[ fn ].uncurrying2()
}

var obj = {
    length: 3,
    0: 1,
    1: 2,
    2: 3,
}

Array.push( obj, 4 )