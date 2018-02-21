const beli = require('./beli.js');
 belanjaan = {
  item: 'baju',
  harga: 1000,
  waktu: 1000
}
const belanja = (uangBelanja) => {
  if(uangBelanja <= 0 ){
    console.log('Belanja Selesai');
  } else {
    beli(uangBelanja,belanjaan,belanja);
  }
}
belanja(10000);
