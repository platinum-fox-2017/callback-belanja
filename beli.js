function beli(uang, obj, cb, index){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (kembalian >= 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb((index+1), kembalian)
    }else{
      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`);
      cb((index+1), 0)
    }
  }, obj.waktu);
}

function callback(index, kembalian){
  if(kembalian == 0){
    return;
  }
  if(index == obj.length){
    index = 0;
  }
  beli(kembalian, obj[index], callback, index);
}


module.exports = {
  beli: beli,
  callback: callback
}
