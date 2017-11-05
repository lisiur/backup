var tween = {

    /**
     * 动画
     * @param {any} t - 当前耗时
     * @param {any} b - 初始位置
     * @param {any} c - 最终位置
     * @param {any} d - 总耗时
     * @returns {any} - 当前位置
     */
    linear(t, b, c, d) {
        return c * t / d + b
    },

    easeIn(t, b, c, d) {
        return c * (t /= d) * t + b
    },

    strongEaseIn(t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b
    },

    strongEaseOut(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b
    },

    sineaseIn(t, b, c, d) {
        return c + (t /= d) * t * t + b
    },

    sineaseOut(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b
    }
}

module.exports = tween