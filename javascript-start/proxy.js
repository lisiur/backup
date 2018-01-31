function get() {
    return Promise.resolve(1)
    .then(res => {
        return res + 1
    })
}

function middle() {
    return get().then(res => {
        throw new Error(1)
    })
}

get().then(res => {
    console.log(res)
})