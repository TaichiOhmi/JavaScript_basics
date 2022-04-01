let string = '革命はテレビでは放送されない。';
string;

/* 以下はエラー
let badString = これはテストです; // ''で囲ってない
let badString = 'これはテストです;　// 'が片方しないので囲えてない
let badString = これはテストです'; // 'が片方しかないので囲えてない
*/

let badString = string;
badString; //'革命はテレビでは放送されない。'
let sgl = 'シングルクォーテーション';
let dbl = "ダブルクォーテーション";
sgl; // 'シングルクォーテーション'
dbl; // 'ダブルクォーテーション'

//let badQuotes = 'なんということだ！"; シングルとダブルを混ぜて使うとエラー

// let bigmouth = 'I've got no right to take my place...'; 囲んでいるのと同じ種類の引用符を含めてしまってもエラー

let bigmouth = 'I\'ve got no right to take my place...'; //エスケープすればエラーが起きない。ここでは\(バックスラッシュ)
bigmouth; //"I've got no right to take my place..."


//concatenate
let one = 'こんにちは、';
let two = 'ご機嫌いかがでしょう？';

let joined = one + two;
joined; // 'こんにちは、ご機嫌いかがでしょう？'

let multiple = one + one + one + one + two;
multiple; // 'こんにちは、こんにちは、こんにちは、こんにちは、ご機嫌いかがでしょう？'

let response = one + '私は元気です。' + two;
response; // 'こんにちは、私は元気です。ご機嫌いかがでしょう？'



/**
 * ユーザに答えてもらうため、Window.prompt()関数を使用。
 * テキストを入力できるポップアップダイアログを表示し、ユーザによって入力された文字列を name 変数に格納している。
 * そして、Window.alert()関数を使用し、2 つの文字列リテラルと name 変数を結合して別のポップアップに文字列を作り上げている。
 */
let button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('あなたの名前は？');
  alert('こんにちは、' + name + 'さん。初めまして！');
}



// string + number 
'フロント' + 242;
// = string
'フロント242'

// string + string
let myDate = '19' + '67';
typeof myDate; //'string'
myDate; //'1967'

// string to number
let myString = '123';
let myNum = Number(myString); 
typeof myNum; // 'number'

// number to string
let Num = 123;
let String = myNum.toString();
typeof myString;


/*
 * テンプレートリテラル
*/
let score = 9;
let highestScore = 10;

//こっちよりも、
let output = 'I like the song "' + song + '". I gave it a score of ' + (score/highestScore * 100) + '%.';
output;'I like the song "Fight the Youth". I gave it a score of 90%.'

//長い文をより短くかける！！
output = `I like the song "${ song }". I gave it a score of ${ score/highestScore * 100 }%.`;

let examScore = 45;
let examHighestScore = 70;

examReport = `You scored ${ examScore }/${ examHighestScore } (${ Math.round((examScore/examHighestScore*100)) }%). ${ examScore >= 49 ? 'Well done, you passed!' : 'Bad luck, you didn\'t pass this time.' }`;

"You scored 45/70 (64%). Bad luck, you didn't pass this time." // examScoreが45で49以下の場合、不合格
'You scored 50/70 (71%). Well done, you passed!' // examScoreが50で50以上の場合、合格

// 最初の2つのプレースホルダーは非常に単純で、変数を参照する単純な文字列のみが含まれています。
// 3つ目は、パーセンテージの結果を計算し、それを最も近い整数に丸めます。
// 4つ目は、三項演算子を使用してスコアが特定の値を超えているかどうかを確認し、結果に応じて合格または不合格のメッセージを出力します。


//従来の文字列リテラルで複数の行に分割する場合は、改行文字 \n を含める必要がありました。
output = 'I like the song "' + song + '".\nI gave it a score of ' + (score/highestScore * 100) + '%.';

//テンプレートリテラルはソースコードの改行をそのまま再現するため、改行文字は不要になります。
output = `I like the song "${ song }".
I gave it a score of ${ score/highestScore * 100 }%.`;

'I like the song "Fight the Youth".\nI gave it a score of 90%.'