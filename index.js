var beli = require ('./beli.js');

beli(30000,{item:'oreo',harga:5000,waktu:1000},function(kembalian){
  beli(kembalian,{item:'mentos',harga:5000,waktu:1000},function(kembalian){
    beli(kembalian,{item:'bengbeng',harga:3000,waktu:1000},function(kembalian){
      beli(kembalian,{item:'chitato',harga:5000,waktu:1000},function(kembalian){
        beli(kembalian,{item:'doritos',harga:7000,waktu:1000},function(kembalian){});
      });
    });
  });
});
