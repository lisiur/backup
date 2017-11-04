Function.prototype.before = function( beforeFn ) {
    const __self = this
    return function() {
        beforeFn.apply( this, arguments )
        return __self.apply( this, arguments )
    }
}

Function.prototype.after = function( afterFn ) {
    const __self = this
    return function() {
        const ret = __self.apply( this, arguments )
        afterFn.apply( this, arguments )
        return ret
    }
}

var func = function() {
    console.log( 2, this.name )
}

func = func.before(function() {
    console.log( 1, this.name )
}).after(function() {
    console.log( 3, this.name )
})

var obj = {
    name: 'name'
}

func.apply(obj)