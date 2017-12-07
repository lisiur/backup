async function read() {
    let a = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 1000)
    })
    return a
}

async function test() {
    let a = await read()
    return a
}

test()
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})