const Beli = require('./beli.js');

let ikan = {
  item: 'ikan hiu',
  harga: 2000,
  waktu: 2000
}
let pesawat = {
  item: 'pesawat',
  harga: 7000,
  waktu: 5000
}
let whiskas = {
  item: 'whiskas',
  harga: 1000,
  waktu: 2000
}
let voucher = {
  item: 'voucher delta',
  harga: 2000,
  waktu: 2000
}
let buku = {
  item: 'buku',
  harga: 1000,
  waktu: 3000
}


let items = [ikan,pesawat,whiskas,voucher,buku]
let cash = 10000

Beli(cash,items[0],cb = uang_sisa => {
  Beli(uang_sisa,items[1], cb = uang_sisa2 => {
    Beli(uang_sisa2,items[2], cb = uang_sisa3 => {
      Beli(uang_sisa3,items[3], cb = uang_sisa4 => {
        Beli(uang_sisa4,items[4], cb = uang_sisa5 => {
          if(uang_sisa5 === 0) {
            console.log('yah duitnya udah abis');
          } else {
            console.log('Alhamdulillah masih sisa',uang_sisa5,'masih bisa jajan')
          }
        })
      })
    })
  })
})
