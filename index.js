const beli = require('./beli.js');

var uang   = 950000;

let arrObjItem  = [
                    {
                        item: 'jersey',
                        harga: 100000,
                        waktu: 10000
                    },
                    {
                        item: 'sepatu',
                        harga: 700000,
                        waktu: 8000
                    },
                    {
                        item: 'kaos kaki',
                        harga: 50000,
                        waktu: 3000
                    },
                    {
                        item: 'dekker',
                        harga: 20000,
                        waktu: 1000
                    },
                    {
                        item: 'celana',
                        harga: 80000,
                        waktu: 9000
                    }
                ]

beli(uang,arrObjItem[0], function(sisa){
    beli(sisa,arrObjItem[1],function(sisa){
        beli(sisa,arrObjItem[2],function(sisa){
            beli(sisa,arrObjItem[3],function(sisa){
                beli(sisa,arrObjItem[4],function(sisa){   
                })
            })
        })
    })
})