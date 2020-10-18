// ## Promise ##

// Callback mi döver, Promise mi?
// Callback, en basit haliyle herhangi bir fonksiyona parametre olarak verdiğimiz ve sonra geri çağıracağımız fonksiyonlardır.
// Callback’in beklenenden erken çağırılması
// Callback’in hiç çağırılmaması
// Callback’in beklenilenden az veya çok çağırılması
// Gerekli parametreleri doğru bir şekilde alamaması
// Hataların yutulması

// Promise, callback’lerin sıkıntılı yönlerini düzeltmek amacıyla önerilmiş bir yapıdır.
// Promise istenilen görevi yerine getirdiğinde değeri değişmez (immutable)
// Sadece bir kere başarıya (resolved) ulaşır, veya başarısız (rejected) olur.
// Öngörülemeyen hatalar otomatik olarak Promise’i başarısız (rejected) sonuca götürür. Bu da hataları kontrol etme noktasında faydalıdır.
// Yapısı gereği, gelecekteki bir değerin göstergesi olduğundan daha güvenilirdir.

// En basitinden bir promise örneği:
var everythingIsOk = true;

const myProm = new Promise(function(resolve, reject){
  if (everythingIsOk) {
    resolve('YES');
  } else {
    reject('NO');
  }
})

myProm.then(function(cevap){
  console.log(cevap) 
}).catch(function(hata){
  console.log(hata) 
})

// ## Promise Zincirleri ##
// Zincir diyerek kastettiğim şu: biri diğerini bekleyen asenkron işlemlerin arka arkaya çalıştırılması.
asenkronIslem()
.then(sonuc => {
  return baskaAsenkronIslem(sonuc);
})
.then(zincirSonuc => {
  return zincirSonuc.json();
})
.catch(hata => {
  console.log(hata);
});

// ## Promise metodları ##
// Anında başarıya ulaşan(resolve) promise nesnesi
const basarili = Promise.resolve(42);

// Anında başarısız olan(reject) promise nesnesi
const basarisiz = Promise.reject('Tüh ya');

// Promise'lerden oluşan bir dizinin gelecekteki değerlerinin hepsinin başarılı sonuçlanması için oluşturulan promise nesnesi 
const tumIslerBitti = Promise.all([promise1, promise2, ...]);

// Bu metod ise adından anlaşılacağı gibi dizi içerisindeki promise’lerin yarıştırılmasıdır. Galip olan, yani en hızlı sonuca ulaşan promise dönüş değeri olarak alınır.
const enHizliYapan = Promise.race(promiseDizisi);

// ## Async/Await ##
// Öncelikle bu özellik ES7 kapsamında olup, promise’e nazaran tarayıcı desteği daha azdır.
// Eğer NodeJS 8 üstü kullanıyorsanız, ya da transpiler’a (bkz: babel) güvenerek bu özelliği denerim diyorsanız, anlatacaklarıma kulak verin.

// Async/await bize neler katacak? Maddelerimiz şöyle:
// Kod daha okunaklı hale gelecek
// Asenkron işlemlerin gerçekleşme sırasını takip etmek kolaylaşacak
// Promise zincirleri için birçok .then() yazmak gerekmeyecek
// Diğer programlama dillerinden aşina olunan try-catch yapısı kullanılabilecek

// Promise zinciri
const zincirES6 = () => {
  return asenkronIslem1()
    .then(asenkronIslem2)
    .then(asenkronIslem3)
}

zincirES6()
  .then(cevap => console.log(cevap))
  .catch(hata => console.log(hata))


// Async/await 
const zincirES7 = async () => {
  const sonuc1 = await asenkronIslem1();
  const sonuc2 = await asenkronIslem2(sonuc1);
  return asenkronIslem3(sonuc2);
}

try {
  const cevap = await zincirES7();
  console.log(cevap);
}catch(hata){
  console.log(hata);
}
