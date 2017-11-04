function Singleton(name) {
    this.name = name
}

Singleton.prototype.getName = function () {
    return this.name
}

Singleton.getInstance = (function () {
    var instance = null
    return function (name) {
        if (!instance) {
            instance = new Singleton(name)
        }
        return instance
    }
})()

var CreateDiv = (function () {
    var instance

    var CreateDiv = function (html) {
        if (instance) {
            return instance
        }
        this.html = html
        this.init()
        return instance = this
    }

    CreateDiv.prototype.init = function () {
        var div = document.createElement('div')
        div.innerHTML = this.html
        document.body.appendChild(div)
    }

    return CreateDiv
})()


// version 2
var CreateDiv = function (html) {
    this.html = html
    this.init()
}

CreateDiv.prototype.init = function (html) {
    var div = document.createElement('div')
    div.innerHTML = this.html
    document.body.appendChild(div)
}

var ProxySingletonCreateDiv = (function () {
    var instance
    return function (html) {
        if (!instance) {
            instance = new CreateDiv(html)
        }
        return instance
    }
})()

// split line
var getSingle = function (fn) {
    var result
    return function () {
        return result || (result = fn(arguments))
    }
}