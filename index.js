const beli = require('./beli.js')

cabe = {
    item : "cabe",
    harga : 5000,
    waktu : 1000
  }

bawang = {
    item : "bawang",
    harga : 5000,
    waktu : 2000 
  }
timun = {
    item : "timun",
    harga : 5000,
    waktu : 3000 
  }

terong = {
    item : "terong",
    harga : 5000,
    waktu : 2000  
  }

bayam = {
    item : "bayam",
    harga : 5000,
    waktu : 1000
  }

  beli(50000,cabe,kembalian=>{
    beli(kembalian,bawang,kembalian2=>{
        beli(kembalian2,timun,kembalian3=>{
            beli(kembalian3,terong,kembalian4=>{
                beli(kembalian4,bayam,kembalian5=>{
                })
            })
        })
    })
  })