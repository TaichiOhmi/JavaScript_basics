/*
 * JavaScript を使用して、見出しの文字列が Hello world! に変更される。
 * 最初に querySelector() と呼ばれる関数を使用して見出しの参照を取得し、 myHeading と呼ばれる変数に格納している。
 * これは CSS のセレクターを使用するのととてもよく似ています。要素に対して何かをしたくなったら、まずその要素を選択する必要があります。
 * その後、myHeading 変数の textContent プロパティ (見出しの内容を表す) の値を Hello world! に設定している。
 * これらはどちらもDOM(Document Object Model)の一部、これを使ってこのプログラムからHTMLにアクセスし、値をとってきたり変更する。
 */
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';


/*変数: let 変数名, case sensitive（大文字小文字区別あり)
let myVariable;
myVariable = 'Bob';
*/
//上の２行とこの１行は同義
let myVariable = 'Bob';

//変数呼び出し
myVariable;

//値の変更
myVariable = 'Steve';


//Datatype

// string
let str = 'Bob';
//number
let num = 10;
//boolen
let bool = true;
//array
let array = ['Bob', 10, 'Mary', 22];
//object
let object = document.querySelector('h1');


//演算子は他のと一緒。等価だけ===で＝３つ
myVariable === 4;


//条件文
let player = 'ベイル';
if(player === 'ベイル') {
  //alert('Wales!! Golf!! Madrid!!');
} else {
  //alert('Hala Madrid!!');
}


//関数
function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }
//consoleで実行
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

function whichnum(num1,num2) {
    let result = 0;
    if(num1 > num2){
        result = num1;
    }
    else if(num1 < num2){
        result = num2;
    }
    else{
        result = 'equal';
    }
    return result;
  }
//consoleで実行
whichnum(4, 7);
whichnum(20, 20);
whichnum(0.5, 3);


//イベント

//querySeloctorで選んだhtml要素(この場合はhtml)が クリックされた時、
document.querySelector('html').onclick = function() {
    //この関数を実行
    alert('Clicked.');
}

/*
document.querySelector('html').onclick = function() {};

上の１行と、下の2行は同義。

let myHTML = document.querySelector('html');
myHTML.onclick = function() {};
*/

