const Beli = require('./beli')

let bahan = [
    {
        item: "Pisang",
        harga : 50000,
        waktu: 1000,
    }, {
        item: "Mangga",
        harga : 20000,
        waktu: 1000,
    }, {
        item: "Manggis",
        harga: 25000,
        waktu: 1000,
    }, {
        item: "Rambutan",
        harga: 15000,
        waktu: 1000,
    }, {
        item: "Jeruk",
        harga: 30000,
        waktu: 1000,
    }
]

Beli(200000, bahan[0], (data)=> {
    Beli(data, bahan[1], (data2) => {
       Beli(data2, bahan[2], (data3) => {
           Beli(data3, bahan[3], (data4) => {
               Beli(data4, bahan[4], (data5) => {
                   console.log(`SISA UANG ${data5}`)
               })
           })
       })
    })
})