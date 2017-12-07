function get() {
    return Promise.resolve(1)
}

function middle() {
    return get().then(res => {
        throw new Error(1)
    })
}

let a = middle()

a.then(res => {
    console.log(res)
}).catch(err => {
    console.log(err.message)
})

a.then(res => {
    console.log(1)
}).catch(err => {
    console.log(err)
})