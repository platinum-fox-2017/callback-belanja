const functionBeli = require('./beli.js')

let barang1= {
    item: 'teri',
    harga: 5000,
    waktu: 1000
}

let barang2 = {
    item: 'sambel',
    harga: 4000,
    waktu: 1000
}

let barang3 = {
    item: 'botol minum',
    harga: 5000,
    waktu: 1000,
}

let barang4 = {
    item: 'Pulsa',
    harga: 40000,
    waktu: 1000,
}

let barang5 = {
    item: 'Charger',
    harga: 40000,
    waktu: 1000,
}

functionBeli(100000,barang1,(kembalian)=>{
    functionBeli(kembalian,barang2,(kembalian)=>{
        functionBeli(kembalian,barang3,(kembalian)=>{
            functionBeli(kembalian,barang4,(kembalian)=>{
                functionBeli(kembalian,barang5,(kembalian)=>{

                })
            })
        })
    })
})