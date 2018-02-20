const beli = require('./beli.js');

const uang = 1000000;

let objTas = {
	item: 'Tas',
	harga: 250000,
	waktu: 1000
};

let objSepatu = {
	item: 'Sepatu',
	harga: 100000,
	waktu: 1000
};

let objBaju = {
	item: 'Baju',
	harga: 300000,
	waktu: 1000
};

let objCelana = {
	item: 'Celana',
	harga: 450000,
	waktu: 1000
};

let objDompet = {
	item: 'Dompet',
	harga: 100000,
	waktu: 1000
};

beli(uang, objTas, function (uang_sisa_tas) {
	beli(uang_sisa_tas, objSepatu, function (uang_sisa_sepatu) {
		beli(uang_sisa_sepatu, objBaju, function (uang_sisa_baju) {
			beli(uang_sisa_baju, objCelana, function (uang_sisa_celana) {
				beli(uang_sisa_celana, objDompet, function (uang_sisa_dompet) {
					console.log('sisa uang: ' + uang_sisa_dompet);
				});
			});
		});
	});
});