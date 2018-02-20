'use strict'
const belanja = require ('./beli')

let beliTopi = {
    item: 'topi',
    harga: 100000,
    waktu: 2000
}

let beliBaju = {
    item: 'baju',
    harga: 500000,
    waktu: 1000
}

let beliCelana = {
    item: 'celana',
    harga: 350000,
    waktu: 1000
}

let beliSepatu = {
    item: 'sepatu',
    harga: 1000000,
    waktu: 1000
}

let beliMobil = {
    item: 'mobil',
    harga: 1000000000,
    waktu: 1000
}

belanja(500000000, beliTopi, (cb) => {
    belanja(cb, beliBaju, (cb2) => {
        belanja(cb2, beliCelana, (cb3)=> {
            belanja(cb3, beliSepatu, (cb4) => {
                belanja(cb4, beliMobil, (cb5) => {
                    return cb5
                })
            })
        })
    })
})