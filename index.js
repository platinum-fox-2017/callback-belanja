"use strict"
const beli=require('./beli.js')
var uang=10000
var obj=[{
            item:'kopi',
            harga: 2000,
            waktu : 2000
          },
          {
            item:'permen',
            harga: 500,
            waktu: 2000
          },
          {
            item:'teh',
            harga: 5000,
            waktu: 2000
          },
          {
            item:'ciki',
            harga: 3500,
            waktu: 2000
          },
          {
            item:'kue',
            harga: 1000,
            waktu: 2000
          }
      ]

beli(uang,obj[0],function(sisa){
  beli(sisa,obj[1],function(sisa){
    beli(sisa,obj[2],function(sisa){
      beli(sisa,obj[3],function(sisa){
        beli(sisa,obj[4],function(sisa){
        });
      });
    });
  });
});
