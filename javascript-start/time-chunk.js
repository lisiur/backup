function timeChunk( ary, fn, count = 1 ) {
    var obj,
        t

    var len = ary.length

    var start = function() {
        for ( let i = 0; i < Math.min( count, ary.length ); i++ ) {
            obj = ary.shift()
            fn( obj )
        }
    }

    return function() {
        t = setInterval(function() {
            if ( ary.length === 0) {
                return clearInterval( t )
            }
            start()
        }, 200)
    }
}