function beli(uang, obj, cb){
  console.log(`Saya punya uang sejumlah ${uang}`)
  setTimeout(function(){
    if (uang - obj.harga >= 0) {
      console.log(`Kemudian saya membeli ${obj.item} dengan harga ${obj.harga} sehingga sisa uang saya sejumlah ${uang - obj.harga}`);
      cb(uang - obj.harga)
    }else{
      console.log(`uang gk cukup nih buat beli ${obj.item} yang harganya ${obj.harga}, butuh uang lagi sejumlah ${(uang - obj.harga)*-1}`);
      cb(uang);
    }
  }, obj.waktu);
}

module.exports = beli;
