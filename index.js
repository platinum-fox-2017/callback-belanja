const beli = require('./beli.js')

let uang = 7000

let buku = {}
buku.item = 'Buku'
buku.harga = 2000
buku.waktu = 1000

let pulpen = {}
pulpen.item = 'Pulpen'
pulpen.harga = 1000
pulpen.waktu = 1500

let makanan = {}
makanan.item = 'Makanan'
makanan.harga = 5000
makanan.waktu = 2000

let minuman = {}
minuman.item = 'Minuman'
minuman.harga = 4000
minuman.waktu = 2000

let susu = {}
susu.item = 'Susu'
susu.harga = 7000
susu.waktu = 2000


beli(uang, buku, function(callback){
  beli(callback, pulpen, function(callback){
    beli(callback, makanan, function(callback){
      beli(callback, minuman, function(callback){
        beli(callback, susu, function(callback){
        })
      })
    })
  })
})
