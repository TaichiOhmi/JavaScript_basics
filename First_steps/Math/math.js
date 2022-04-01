var myInt = 5;
var myFloat = 6.667;

typeof myInt; // number
typeof myFloat; // number

let lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal; //1.7665849586757463
let twoDecimalPlaces = lotsOfDecimal.toFixed(2); //　toFixed()は引数の数字分に、小数点以下の桁を丸める
twoDecimalPlaces; //'1.77'

/* toFixed() *//*

let numObj = 12345.6789

numObj.toFixed()       // '12346' を返す : 四捨五入され小数部がなくなる
numObj.toFixed(1)      // '12345.7' を返す : 四捨五入
numObj.toFixed(6)      // '12345.678900'を返す : 0 を追加する
(1.23e+20).toFixed(2)  // '123000000000000000000.00' を返す
(1.23e-10).toFixed(2)  // '0.00' を返す
2.34.toFixed(1)        // '2.3' を返す
2.35.toFixed(1)        // '2.4' を返す。切り上げ。
2.55.toFixed(1)        // '2.5' を返す。切り捨て。上記警告を参照。
-2.34.toFixed(1)       // -2.3 を返す (演算子の優先順位上、マイナスの数値リテラルは文字列を返さない)
(-2.34).toFixed(1)     // '-2.3'
*/


let myNumber = '74';

myNumber + 3; // '743' myNumberはstrだから。
Number(myNumber) + 3; // 77


10 + 7 // 17
9 * 8 // 72
60 % 3 // 0

let num1 = 10;
let num2 = 50;

9 * num1; // 90
num1 ** 3; // 1000
num2 / num1; // 5
5 + 10 * 3; // 35
num2 % 9 * num1; // 50
num2 + num1 / 8 + 2; // 53.25
(num2 + num1) / (8 + 2); // 6


/* インクリメント演算子とデクリメント演算子 */

let num3 = 4;
num3++; // num3 = num3 + 1
num3; // 5

var num4 = 6;
num4--; // num4 = num4 -1
num4; // 5


/* 代入演算子 */
let x = 3; // x には 3 が入る
let y = 4; // y には 4 が入る
x = y; // x には y と同じ値:4 が入る

x += y; // x = 7
x -= y; // x = -1
x *= y; // x = 12
x /= y; // x = 0.75




const btn = document.querySelector('button');
const txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === '起動する') {
    btn.textContent = '停止する';
    txt.textContent = 'マシンが起動しました！';
  } else {
    btn.textContent = '起動する';
    txt.textContent = 'マシンは停止中です。';
  }
}



let result = 10;
let result2 = 0.14257389143168974230689531;

finalResult = result *= result2
finalResult.toFixed(2);
typeof finalResult;
finalNumber = Number(finalResult)



// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;
weightComparison = eleWeight < mouseWeight;

// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;
heightComparison = ostrichHeight > duckHeight;

// Statement 3: The two passwords match
const pwd1 = 'stromboli';
const pwd2 = 'stROmBoLi'
pwdMatch = pwd1 === pwd2;