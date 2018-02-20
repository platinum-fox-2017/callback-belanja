const beli = require('./beli')
let sepatu =
  {
    item: 'sepatu',
    harga: 10000,
    waktu: 5000
  }
let tas =
  {
    item: 'tas',
    harga: 12000,
    waktu: 5000
  }
let jam =
  {
    item: 'jam',
    harga: 14000,
    waktu: 5000
  }
let topi =
  {
    item: 'topi',
    harga: 16000,
    waktu: 5000
  }
let jaket =
  {
    item: 'jaket',
    harga: 18000,
    waktu: 5000
  }


beli(1000000000, sepatu, function (data) {
  beli(data, tas, function (data) {
    beli(data, jam, function (data) {
      beli(data, topi, function (data) {
        beli(data, jaket, function (data) {
          console.log('sisa uang saya: '+data);
        })
      })
    })
  })
})
