const beli = require('./beli')


let objectBelanja =
    [{
        item: 'nasi',
        harga: 2000,
        waktu: 20
    }, {
        item: 'nasi padang',
        harga: 20000,
        waktu: 30
    }, {
        item: 'nasi goreng',
        harga: 30000,
        waktu: 30
    }, {
        item: 'nasi asin',
        harga: 20000,
        waktu: 30
    }, {
        item: 'nasi putih',
        harga: 5000,
        waktu: 30
    }]


beli(20000, objectBelanja[0], (data) => {
    beli(data, objectBelanja[1], (data2) => {
        beli(data2, objectBelanja[2], (data3) => {
            beli(data3, objectBelanja[3], (data4) => {
                beli(data4, objectBelanja[4], (data5) => {
                    console.log('kembalian 0');
                })
            })
        })
    })
})
