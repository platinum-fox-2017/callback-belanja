const beli = require('./beli');
var uang = 100000;

function store_kembalian(sisa_uang){
    kembalian = sisa_uang;
}

class objItem {
    constructor(item,harga,waktu){
        this.item = item;
        this.harga = harga;
        this.waktu = waktu;
    }
}

beli(uang, new objItem('Baju',30000,1),function(kembalian){
    beli(kembalian, new objItem('Celana',30000,1),function(kembalian){
        beli(kembalian, new objItem('Topi',30000,1),function(kembalian){
            beli(kembalian, new objItem('Celana Dalam',30000,1),function(kembalian){
                beli(kembalian, new objItem('Rok',30000,1),function(kembalian){
                    console.log(`Sisa Kembalian Anda: ${kembalian}`);
                });
            });
        });

    });
});
