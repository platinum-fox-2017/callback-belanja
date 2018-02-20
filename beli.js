function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (kembalian > 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else{
      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
      cb(0)
    }
  }, obj.waktu);
}

var obj1 = {};
obj1.item = 'bubur';
obj1.harga = 1000;
obj1.waktu = 2000;

var obj2 = {};
obj2.item = 'ayam';
obj2.harga = 2000;
obj2.waktu = 2000;

var obj3 = {};
obj3.item = 'sayur';
obj3.harga = 4000;
obj3.waktu = 2000;

var obj4 = {};
obj4.item = 'nasi';
obj4.harga = 5000;
obj4.waktu = 2000;

var obj5 = {};
obj5.item = 'sate';
obj5.harga = 7000;
obj5.waktu = 2000;

beli(20000,obj1,function(kembalian){
  beli(kembalian,obj2,function(kembalian){
    beli(kembalian,obj3,function(kembalian){
      beli(kembalian,obj4,function(kembalian){
        beli(kembalian,obj5,function(kembalian){
          // console.log('Yeay sudah bisa belanja dengan benar !')
        })
      })
    })
  })
});





module.exports = beli;
