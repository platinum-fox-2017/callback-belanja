const beli = require('./beli.js')


// let obj = {
//   item : 'baju baru',
//   harga : 100,
//   waktu : 1000
// }
let arrOfObj = [{
  item : 'baju baru',
  harga : 400,
  waktu : 1000
},{
  item : 'celana baru',
  harga : 500,
  waktu : 2000
},{
  item : 'kue keranjang meleleh',
  harga : 100,
  waktu : 3000
},{
  item : 'ayam goreng bumbu seaweed',
  harga : 100,
  waktu : 5000
},{
  item : 'thai milk tea with black pearl',
  harga : 100,
  waktu : 6000
}]
// console.log(arrOfObj[0])
let cb = function(kembalian){
  console.log(`sisa uang adalah ${kembalian} dollar`)
  beli(kembalian,arrOfObj[1],function(kembalianSatu){
    console.log(`sisa uang adalah ${kembalianSatu} dollar`)
    beli(kembalianSatu,arrOfObj[2],function(kembalianDua){
      console.log(`sisa uang adalah ${kembalianDua} dollar`)
      beli(kembalianDua,arrOfObj[3],function(kembalianTiga){
        console.log(`sisa uang adalah ${kembalianTiga} dollar`)
        beli(kembalianTiga,arrOfObj[4],function(sisaUang){
          console.log(`sisa uang adalah ${sisaUang} dollar`)
        })
      })
    })
  })
}
// beli(1000,obj,cb)
let belanja = beli(2000,arrOfObj[0],cb)
