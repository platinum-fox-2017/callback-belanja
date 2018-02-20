const Beli = require('./beli.js')
const beli = Beli.beli;
const callback = Beli.callback;

let obj = [{ item: 'Kopi', harga: 5000, waktu: 1000},
          {item: 'Roti', harga: 7000, waktu: 1000},
          {item: 'Gorengan', harga: 3000, waktu: 1000},
          {item: 'Kerupuk', harga: 2000, waktu: 1000},
          {item: 'Pisang', harga: 3000, waktu: 1000}];

beli(50000, obj[0], callback, 0);
