const beli = require('./beli.js')

beli(800000,{item: 'topi', harga: 50000, waktu:1000}, function(kembalian){
    beli(kembalian,{item: 'kaos', harga: 120000, waktu:2000}, function(kembalian){
        beli(kembalian,{item: 'celana', harga: 320000, waktu:1000}, function(kembalian){
            beli(kembalian,{item: 'sepatu', harga: 320000, waktu:2000}, function(kembalian){
                beli(kembalian,{item: 'kemeja', harga: 100000, waktu:1000}, function(kembalian){

                });
            });
        });
    });
});