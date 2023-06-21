//

// Temizle butonunun görünürlüğünü  gizle

const metinInput = document.getElementById("metinInput");
const sonucElementi = document.getElementById("sonuc");
const sesliHarflerElementi = document.getElementById("sesliHarfler");
const temizleButton = document.getElementById("temizleButton");

function hesapla() {
  let metin = metinInput.value;
  // Metni küçük harflere dönüştürme ve karakter dizisini diziye ayırma
  let karakter = metin.toLowerCase().split("");
  console.log(karakter);
  // Sesli harfleri filtreleme ve yeni bir dizi oluşturma
  let sesliHarfler = karakter.filter(function (karakter) {
    return ["a", "e", "i", "o", "u"].includes(karakter);
  });
  // Sesli harf sayısını elde etme
  let sesliHarfSayisi = sesliHarfler.length;
  console.log(sesliHarfSayisi);
  // sonucun  görüntülenmesi
  sonucElementi.textContent = `Sesli harf sayısı: ${sesliHarfSayisi}`;
  // Sesli harflerin görüntülenmesi
  sesliHarflerElementi.textContent = `Sesli harfler:  ${sesliHarfler.join(
    ", "
  )}`;
  // Temizle butonunun görünürlüğünü ayarla
  temizleButton.style.display = "inline-block";
}

function temizle() {
  metinInput.value = "";
  sonucElementi.textContent = "";
  sesliHarflerElementi.textContent = "";

  temizleButton.style.display = "none";
}
