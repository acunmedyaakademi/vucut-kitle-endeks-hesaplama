alert ('Vücut Kitle Endeksi Hesaplamasına Hoşgeldiniz! Devam etmek için "Tamam" butonuna basın ve istenilen bilgileri adım adım takip ederek doğru ölçüleri girip öğrenebilirsiniz. :)')

let boy = Number(prompt("Boyunuzu Giriniz."));
let kilo = Number(prompt("Kilonuzu giriniz"));

let boyToplam = boy * boy;
let endeksHesaplama = kilo / boyToplam;


if (endeksHesaplama >= 40) {
  console.log(endeksHesaplama.toFixed(2) + ':'+" İdeal kilonun çok üstünde (morbid obez)");
} else if (endeksHesaplama > 30) {
  console.log( endeksHesaplama.toFixed(2) + ':'+" İdeal kilonun çok üstünde (obez)");
} else if (endeksHesaplama > 25) {
  console.log( endeksHesaplama.toFixed(2) + ':'+" İdeal kilonun üstünde");
} else if (endeksHesaplama > 18.5) {
  console.log( endeksHesaplama.toFixed(2) + ':'+" İdeal kiloda");
} else {
  console.log( endeksHesaplama.toFixed(2) +':'+ " İdeal kilonun altında");
}
