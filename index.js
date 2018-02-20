const beli = require('./beli.js')

let indomie =  {item: 'indomie', harga: 1500, time: 500}
// beli(100000, indomie, (callback))

let sarden =  {item: 'sarden', harga: 7000, waktu: 500}
let gula = {item : 'gula', harga: 4000, waktu: 500}
let garam = {item : 'garam', harga: 3000, waktu: 500}
let royco = {item : 'royco', harga: 2000, waktu: 500}
// beli(100000, sarden, (callback))

beli(100000, indomie, (callback) => {
  beli(callback, sarden, (callback) => {
    beli(callback, gula, (callback) => {
      beli(callback, garam, (callback) => {
        beli(callback, royco, (callback) => {})
      })
    })
  })
})