function func() {
    console.log(arguments)
}

Function.prototype.call.apply(func, [null, 2, 3])