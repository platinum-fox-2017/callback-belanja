const beli = require('./beli')

class ObjItem {
  constructor(item,harga,waktu) {
    this.item = item
    this.harga = harga
    this.waktu = waktu
  }
}

let cabe = new ObjItem('cabe',3500,1000)
let bawang = new ObjItem('bawang',4500,1000)
let kangkung = new ObjItem('kangkung',5500,1000)
let tomat = new ObjItem('tomat',3200,1000)
let wafer = new ObjItem('wafer',5000,1000)

beli(5000,cabe,function(kembalian){
  beli(kembalian,bawang,function(kembalian){
    beli(kembalian,kangkung,function(kembalian){
      beli(kembalian,tomat,function(kembalian){
        beli(kembalian,wafer,function(kembalian){
            console.log('sisa uang '+kembalian)
        })
      })
    })
  })
})
