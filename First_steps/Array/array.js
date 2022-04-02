// 配列には何でも格納することができる。
// 文字列、数値、オブジェクト、その他の変数、さらには別の配列ですら格納することができます。
// そして混ぜ合わせることも。すべて同じデータ型である必要はありません。
let shopping = ['パン', '牛乳', 'チーズ', 'ハム', '麺'];
let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ['tree', 795, [0, 1, 2]];

shopping[0];
// "パン"という値が戻ります

shopping[0] = 'タヒーニ';
// ショッピングリストは[ "タヒーニ", "牛乳", "チーズ", "ハム", "麺" ]に変更されています。

random[2][2];

sequence.length;
// 7 が返る

// 配列中の項目 0 番よりループを開始します。
// 項目番号が配列の長さと同じ数になったら、繰り返しを終了します。
// これで配列中の要素がいくつであっても動くようになります。
// 今回の場合は、項目の番号が 7 のときに終了します(ループでカバーしたい最後の項目番号は 6 なので、これで問題ありません)。
// そして、各項目を console.log() メソッドを使用してブラウザーのコンソールに出力しています。
for (let i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}

// 文字列と配列を相互に変換する
let myData = '札幌,仙台,東京,名古屋,大阪,博多';
// この文字列をカンマで区切ります。
let myArray = myData.split(',');
myArray; // ['札幌', '仙台', '東京', '名古屋', '大阪', '博多']
// そして、できた配列の長さを確認して、その中身を見てみましょう。
myArray.length; // 6
myArray[0]; // 配列の最初の項目 → 札幌
myArray[1]; // 配列の二番目の項目 → 仙台
myArray[myArray.length-1]; // 配列の最後の項目 → 博多

// join() メソッドを使うことで、逆のことができます。
let myNewString = myArray.join(',');
myNewString; // '札幌,仙台,東京,名古屋,大阪,博多'

// 配列を文字列にするもう一つの方法は、toString() メソッドを使うことです。
// 引数を取らない toString() は join() と比べ簡単でしょうが、制限があります。
// join() を使えば、他の区切り文字を指定することもできます。
let dogNames = ['ポチ','ハチ','タロウ','モコ'];
dogNames.toString(); //ポチ,ハチ,タロウ,モコ


// 項目の追加と削除
// push()で配列の最後に項目を追加するには 1 つ以上の項目を引数に指定します。
myArray.push('横浜');
myArray; // ['札幌', '仙台', '東京', '名古屋', '大阪', '博多', '横浜']
myArray.push('神戸', '広島');
myArray; // ['札幌', '仙台', '東京', '名古屋', '大阪', '博多', '横浜', '神戸', '広島']

// メソッドの呼び出しが終わると、新しい配列の長さが返ります。もし新しい配列の長さを変数に格納したければ、次のようにできます。
let newLength = myArray.push('京都');
myArray; // ['札幌', '仙台', '東京', '名古屋', '大阪', '博多', '横浜', '神戸', '広島', '京都']
newLength; // 10

// 配列の最後の要素を削除するには pop() を呼び出すだけです。
let removedItem = myArray.pop();
myArray; // ['札幌', '仙台', '東京', '名古屋', '大阪', '博多', '横浜', '神戸', '広島']
removedItem; // 京都

// unshift() で最初に要素を追加
myArray.unshift('奈良');
myArray; // ['奈良', '札幌', '仙台', '東京', '名古屋', '大阪', '博多', '横浜', '神戸', '広島']

// shift() で最初の要素を削除
let removedItem2 = myArray.shift();
myArray; // ['札幌', '仙台', '東京', '名古屋', '大阪', '博多', '横浜', '神戸', '広島']
removedItem2; // '奈良'



// アクティブラーニング: 商品を印字しよう！
const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// No.1
let products = [
                'パンツ:6.99',
                '靴下:5.99',
                'T シャツ:14.99',
                'ズボン:31.99',
                '靴:23.99'
]

for (let i = 0; i <= products.length - 1; i++) { // No.2
  // No.3
product[i] = products[i].split(':')
  // No.4
product[i][1] = Number(product[i][1])
  // No.5
  let itemText = `${product[i][0]} - $${product[i][1]}`;
total += product[i][1]
  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = '合計: $' + total.toFixed(2);


// アクティブラーニング: 上位5件の検索
const list = document.querySelector('.output ul');
const searchInput = document.querySelector('.output input');
const searchBtn = document.querySelector('.output button');

list.innerHTML = '';

let myHistory = [];

searchBtn.onclick = function() {
  // 検索ボックスが空ではない場合のみ検索語を受け付けるようにします
  if (searchInput.value !== '') {
    // No.1
    myHistory.unshift(searchInput.value);
    // 表示中の一覧を空にして、同じ項目が表示されないようにして、
    // 結果は検索語が入力される度に毎回作り直されます。
    list.innerHTML = '';
    // 配列をループして、リスト内の全ての検索語を表示します
    for (let i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      const listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // 配列の長さが 5以上になったら一番古い検索語を削除します
    if (myHistory.length >= 5) {
      // No.2
      myHistory.pop()
    }

    // 次の検索語を受け付けるため、検索ボックスを空にしてフォーカスします
    searchInput.value = '';
    searchInput.focus();
  }
}


// Test_your_skills:_Arrays

// Add your code here
myArray = ['sushi', 'rice', 'ramen', 'curry']
myArray[0] = 'miso soup'
myArray[1] = 'udon'
myArray.unshift('pure tofu')
// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `Array: ${ myArray }`;

section.appendChild(para1);



// Add your code here

let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
myArray = myString.split('+');
arrayLength = myArray.length
lastItem = myArray[arrayLength - 1]
// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `Array: ${ myArray }`;

let para2 = document.createElement('p');
para2.textContent = `The length of the array is ${ arrayLength }.`;

let para3 = document.createElement('p');
para3.textContent = `The last item in the array is "${ lastItem }".`;

section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);
    

let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

// Add your code here
myArray.pop();
myArray.push('Naruto','Sasuke');
for (i=0;i<myArray.length;i++){
    myArray[i] = myArray[i] + " (" + i +")";
}
myString = myArray.join(' - ')
// Don't edit the code below here!

section.innerHTML = ' ';

let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);
    
    

const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

// Add your code here
birds.splice(birds.indexOf('Eagles'),1);
eBirds = [];
for (i=0;i<birds.length;i++){
  if(birds[i].startsWith('E')){
    eBirds.push(birds[i]);
}
}
// Don't edit the code below here!

section.innerHTML = ' ';

const para1 = document.createElement('p');
para1.textContent = eBirds;

section.appendChild(para1);
    

// startsWith();
//const str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat'));
// expected output: true
console.log(str1.startsWith('Sat', 3));
// expected output: false

