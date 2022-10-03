const quizQuestions = [
  {
    id: 1,
    question:
      'Hangi yöntem bir indeks verildiğinde  o indeks için bir dize arar ve belirtilen adresteki karakteri getirip yeni bir dize olarak döndürür? İpucu: 0 ile str.length - 1 arasında pozitif bir tamsayı sağlamalısınız.',
    choices: ['concat()', 'charAt()', 'at()', 'indexOf()'],
    answer: 'charAt()',
  },
  {
    id: 2,
    question:
      'Hangi yöntem bir tamsayı değeri alır ve belirtilen yerde bulunan karakterden oluşan yeni bir Dize döndürür? İpucu: Bu yöntem, pozitif ve negatif tam sayılara izin verir. Negatif tamsayılar  son dize karakterinden geriye doğru sayılır.',
    choices: ['at()', 'charAt()', 'indexOf()', 'match()'],
    answer: 'at()',
  },
  {
    id: 3,
    question:
      'Hangi yöntem, (Legolar gibi) dize argümanlarını çağıran dizeyle birleştirir veya bağlar ve yeni bir dize döndürür?',
    choices: ['shift()', 'concat()', 'slice()', 'push()'],
    answer: 'concat()',
  },
  {
    id: 4,
    question:
      'Hangi yöntem  bir dizenin başka bir dize içinde bulunabileceğini belirlemek için büyük/küçük harfe duyarlı bir arama gerçekleştirir ve uygun şekilde true veya false döndürür?',
    choices: ['split()', 'includes()', 'indexOf()', 'match()'],
    answer: 'includes()',
  },
  {
    id: 5,
    question:
      'Hangi yöntem  var olan bir dizi içerisinde aradığımız bir elemanın indeks numarasını geriye döndürür?',
    choices: ['indexOf()', 'includes()', 'substr()', 'replace()'],
    answer: 'indexOf()',
  },
  {
    id: 6,
    question:
      'Kendisine parametre olarak verilen düzenli ifadenin isteklerini kontrol eder ve istenen değerlerde eşleşen sonucu bize dizi olarak hangi yöntem döndürür?',
    choices: ['replace()', 'split()', 'sort()', 'match()'],
    answer: 'match()',
  },
  {
    id: 7,
    question:
      'Hangi yöntem  bir kelime ya da kelimeleri değiştirmek istediğimiz zaman yeni bir dize döndürür?',
    choices: ['slice()', 'repeat()', 'replace()', 'match()'],
    answer: 'replace()',
  },
  {
    id: 8,
    question:
      'Bir normal ifade ile bu String nesnesi arasında bir eşleşme aramak için hangi yöntem yürütülür?',
    choices: ['match()', 'replace()', 'repeat()', 'search()'],
    answer: 'search()',
  },
  {
    id: 9,
    question:
      'Hangi yöntem bir dizenin bir bölümünü çıkarır ve orijinali değiştirmeden onu yeni bir dize olarak döndürür?',
    choices: ['trim()', 'search()', 'includes()', 'slice()'],
    answer: 'slice()',
  },
  {
    id: 10,
    question:
      'Hangi yöntem string bir ifadeyi belirli sembol yada kelimeye göre bölmek ve bu parçalardan bir dizi oluşturmak için kullanılır?',
    choices: ['split()', 'replace()', 'slice()', 'search()'],
    answer: 'split()',
  },
  {
    id: 11,
    question:
      'Hangi yöntem  dizenin belirtilen dizinden başlayıp daha sonra belirli sayıda karaktere kadar uzanan bir bölümünü döndürür?',
    choices: ['indexOf()', 'match()', 'substr()', 'includes()'],
    answer: 'substr()',
  },
  {
    id: 12,
    question:
      'Hangi yöntem küçük harfe dönüştürülmüş çağıran dize değerini döndürür?',
    choices: ['subStr()', 'toLowerCase()', 'toUpperCase()', 'indexOf()'],
    answer: 'toLowerCase()',
  },
  {
    id: 13,
    question:
      'Hangi yöntem  büyük harfe dönüştürülmüş çağıran dize değerini döndürür ?',
    choices: ['indexOf()', 'toLowerCase()', 'toUpperCase()', 'trim()'],
    answer: 'toUpperCase()',
  },
  {
    id: 14,
    question: 'Hangi yöntem bir dizenin her iki ucundaki boşlukları kaldırır?',
    choices: ['trim()', 'replace()', 'slice()', 'concat()'],
    answer: 'trim()',
  },
]
