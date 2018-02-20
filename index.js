const beli = require('./beli.js')

let mouse = {
  item: 'Mouse',
  harga: 50000,
  waktu: 1000
}
let money = 90000000


beli(money, mouse, function(kembalian){
  beli(kembalian, mouse, function(kembalian){
    beli(kembalian, mouse, function(kembalian){
      beli(kembalian, mouse, function(kembalian){
        beli(kembalian, mouse, function(kembalian){
        })
      })
    })
  })
})

// 
// for (let i = 0; i < 5; i++) {
//   let time = 1000
//   setTimeout(function(){
//     beli(money, mouse, function(kembalian){
//       money = kembalian
//     })
//   } , time)
//
//   time += 1000
//
// }
