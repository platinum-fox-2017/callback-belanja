function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    if (uang - obj.harga > 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${uang - obj.harga}`);
      cb(uang - obj.harga)
    }else{
      console.log(`uang gk cukup nih buat beli ${obj.item}, uangnya kurang ${(uang - obj.harga) * -1}`);
      cb(uang)
    }
  }, obj.waktu);
}

module.exports = beli;
