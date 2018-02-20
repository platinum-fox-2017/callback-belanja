const beli = require('./beli.js')

var obj = [{
    item: 'roti',
    harga: 2000,
    waktu: 500
  }, {
    item: 'kopi',
    harga: 1500,
    waktu: 400
  }, {
    item: 'beras',
    harga: 15000,
    waktu: 800
  }, {
    item: 'sabun',
    harga: 5000,
    waktu: 500
  }, {
    item: 'sampo',
    harga: 2000,
    waktu: 300
  }]  

beli(25000, obj[0], function(kembalian){
    beli(kembalian, obj[1], function(kembalian){
        beli(kembalian, obj[2], function(kembalian){
            beli(kembalian, obj[3], function(kembalian){
                beli(kembalian, obj[4], function(kembalian){
        
                })
            })
        })
    })
})

//   console.log(obj[1].item)
