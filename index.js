const beli = require('./beli.js');

let ayam ={
    item:'ayam',
    harga:5000,
    waktu:1000
};
let sapi ={
    item : 'sapi',
    harga : 15000,
    waktu : 2000
};
let udang ={
    item : 'udang',
    harga : 1000,
    waktu : 2000
};
let kambing ={
    item : 'kambing',
    harga : 2000,
    waktu : 2000
};
let telur ={
    item : 'telur',
    harga : 500,
    waktu : 2000
};


beli(23000,ayam,(change1)=>{
    beli(change1,sapi,(change2)=>{
        beli(change2,udang,(change3)=>{
            beli(change3,kambing,(change4)=>{
                beli(change4,telur,(change5)=>{
                    console.log(`Sisa uang ${change5}`);
                })
            })
        })
    })
})