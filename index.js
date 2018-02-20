const beli = require('./beli.js');
 belanjaan = {
  item: 'baju',
  harga: 1000,
  waktu: 1000
}
const printSisaKembalian = (data) => {
  console.log(`Sisa Kembalian : ${data}`);
}
beli(5000,belanjaan,printSisaKembalian);
 belanjaan = {
  item: 'celanan',
  harga: 3000,
  waktu: 1000
}
beli(5000,belanjaan,printSisaKembalian);
 belanjaan = {
  item: 'topi',
  harga: 500,
  waktu: 1000
}
beli(5000,belanjaan,printSisaKembalian);
 belanjaan = {
  item: 'jaket',
  harga: 5000,
  waktu: 1000
}
beli(5000,belanjaan,printSisaKembalian);
 belanjaan = {
  item: 'dompet',
  harga: 2500,
  waktu: 1000
}
beli(5000,belanjaan,printSisaKembalian);
