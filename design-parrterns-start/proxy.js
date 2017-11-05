var myImage,
    proxyImage,
    synchronousFile,
    proxySynchronousFile

// No proxy
myImage = (() => {
    var imgNode = document.createElement('img')
    document.body.appendChild(imgNode)
    return {
        setSrc(src) {
            imgNode.src = src
        }
    }
})()

myImage.setSrc('https://image.com/image.jpg')

// With proxy
myImage = (() => {
    var imgNode = document.createElement('img')
    document.body.appendChild(imgNode)
    return {
        setSrc(src) {
            imgNode.src = src
        }
    }
})()

proxyImage = (function() {
    var img = new Image()
    img.onload = function() {
        myImage.setSrc(this.src)
    }
    return {
        setSrc(src) {
            myImage.setSrc('loading.gif')
            img.src = src
        }
    }
})()

proxyImage.setSrc('https://image.com/image.jpg')

// Another example
synchronousFile = function(id) {
    console.log('开始同步文件，id 为:' + id)
}

proxySynchronousFile = (function() {
    var cache = [],
        timer

    return function(id) {
        cache.push(id)
        if (timer) {
            return
        }
        timer = setTimeout(function() {
            synchronousFile(cache.join(','))
            clearTimeout(timer)
            timer = null
            cache.length = 0
        }, 2000)
    }
})()