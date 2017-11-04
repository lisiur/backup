// var p1 = new Promise((resolve, reject) => {
//     var p2 = new Promise((resolve2, reject2) => {
//         throw (2)
//     }).catch(err => {
//         return reject(err)
//         console.log('p2', err)
//     })
// }).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log('p1', err)
// })

function ajax() {
    return new Promise((resolve, reject) => {
        reject(3)
    })
}

function wrapper() {
    return ajax()
        .then(res => {
            return Promise.reject(3)
        })
        .catch(err => {
            console.log('3',err)
        })
}

wrapper().then(res => {
    console.log(res)
}).catch(err => {
    console.log('outer', err)
})