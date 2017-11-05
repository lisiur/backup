/**
 * TimeChunk
 * @param {array} ary fn的参数
 * @param {function} fn 需要执行的函数
 * @param {number} [count=1] 每次最多执行的个数
 * @returns {function} 返回一个 chunked 函数
 */
function timeChunk(ary, fn, count = 1) {
    var obj,
        t,
        start = function() {
            for (let i = 0; i < Math.min(count, ary.length); i++) {
                obj = ary.shift()
                fn(obj)
            }
        }

    return function() {
        t = setInterval(function() {
            if (ary.length === 0) {
                return clearInterval(t)
            }
            start()
        }, 200)
    }
}

module.exports = timeChunk