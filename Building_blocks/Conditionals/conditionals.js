let shoppingDone = false;

if (shoppingDone === true) {
  let childsAllowance = 10;
} else {
  let childsAllowance = 5;
}

// selectタグ と pタグ 
const select = document.querySelector('#weather');
const para = document.querySelector('p');

// select に イベントを追加。changeした時に setWeather()関数を呼び出す。
select.addEventListener('change', setWeather);

// setWeather 関数
function setWeather() {
  // choice に select の value を格納
  const choice = select.value;

  // choice が sunny なら、
  if (choice === 'sunny') {
    // para の textContent に この文を格納。
    para.textContent = '今日はとてもいい天気です。短いパンツをはいて、砂浜や公園に出かけ、アイスクリームを食べましょう！';
    // choice が rainy rainy なら、    
  } else if (choice === 'rainy') {
    // para の textContent に　雨の問いの文章を格納

    // 繰り返す。
    para.textContent = '雨が降っています。レインコートと傘を忘れないようにして、できる限り室内で過ごしましょう。';
  } else if (choice === 'snowing') {
    para.textContent = '雪が降ってとても寒いです！室内でホットチョコレートを飲むか、雪だるまを作るのがよいでしょう。';
  } else if (choice === 'overcast') {
    para.textContent = '雨は降っていませんが、空はとても暗くなっています。万が一に備えレインコートを持ちましょう。';
  } else {
    // それ以外の時は 空
    para.textContent = '';
  }
}


let cheese = 'チェダー';

if (cheese) {
  console.log('やった！チーズトーストを作るチーズがあるよ。');
} else {
  console.log('今日はチーズトーストのチーズがないよ。');
}


// こういう書き方もできる
if (shoppingDone) { // '=== true' を明示的に指定する必要はありません
  let childsAllowance = 10;
} else {
  let childsAllowance = 5;
}


// 入れ子にもできる。
const choice = select.value;
if (choice === 'sunny') {
    if (temperature < 86) {
      para.textContent = '外の気温は ' + temperature + ' 度です — とてもいい天気です。海水浴や、公園に出かけてアイスクリームを食べましょう';
    } else if (temperature >= 86) {
      para.textContent = '外の気温は ' + temperature + ' 度です — かなり暑いです！外出する場合にはアイスクリームを持って出かけましょう。';
    }
  }


// && を使ってみる。
if (choice === 'sunny' && temperature < 86) {
para.textContent = '外の気温は ' + temperature + ' 度です — とてもいい天気です。海水浴や、公園に出かけてアイスクリームを食べましょう';
} else if (choice === 'sunny' && temperature >= 86) {
para.textContent = '外の気温は ' + temperature + ' 度です — かなり暑いです！外出する場合にはアイスクリームを持って出かけましょう。';
}

// || を使ってみる
let iceCreamCarOutside = "";
let houseStatus = "";
if (iceCreamCarOutside || houseStatus === '火事') {
    console.log('すぐに家から出ましょう。');
  } else {
    console.log('それでは家にいましょう。');
  }

let iceCreamVanOutside = "";
// ! をつければ否定。
if (!(iceCreamVanOutside || houseStatus === '火事')) {
console.log('それでは家にいましょう。');
} else {
console.log('すぐに家から出ましょう。');
}

// いくつでも繋げられるよ！！
x = 5;
y = 1;
z = 89;
let loggedIn = "";
let userName = "";
// （xはnum(5) or yは3より大きい or zは10以下）かつ (loggedIn or userName が’スティーブ’)
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === 'スティーブ')) {
    // コードを実行
  }


// if (x === 5 || 7 || 10 || 20) {　　　　}
// 上の書き方はエラー
if (x === 5 || x === 7 || x === 10 ||x === 20) {
// コードを実行する
}


// switch文
// switch ( 式 ) {
//     case 選択肢1:
//       このコードを実行する
//       break;
  
//     case 選択肢2:
//       代わりにこのコードを実行する
//       break;
  
//     // 以下に選択肢を好きなだけ並べる
  
//     default:
//       既定でこのコードを実行する
//   }
/*
switch キーワードに続き、一組の括弧があります。
括弧の中には、式または値があります。
case キーワードに続き、選択肢となる式または値、それにコロン (:) が並んでいます。
もしその選択肢にマッチすれば、コードが実行されます。
break ステートメントとセミコロン (;) があります。
もし前の選択肢にマッチして入ればブラウザーはコードの実行をここでやめ、switch ステートメントの後ろにあるコードに移動します。
case 節 (上記 3. から 5. ) は好きなだけ書くことができます。
上記 3. から 5.の case 節と全く同じコードパターンで書かれている default キーワードがあります。
違いは default の後ろに選択肢が書かれていないことです。
また、後ろに続くコードがないので、ここには break ステートメントが必要ありません。
もし、選択肢のどれにもマッチするものがない場合に既定のオプションとして実行されます。
*/


select.addEventListener('change', setWeather2);

function setWeather2() {
  const choice = select.value;

  switch (choice) {
    // choice が sunny の処理
    case 'sunny':
      para.textContent = '今日はとてもいい天気です。短いパンツをはいて、砂浜や公園に出かけ、アイスクリームを食べましょう！';
      break;
    // choice が rainy の処理
    case 'rainy':
      para.textContent = '雨が降っています。レインコートと傘を忘れないようにしましょう。';
      break;
    // choice が snowing の処理
    case 'snowing':
      para.textContent = '雪が降ってとても寒いです！室内でホットチョコレートを飲むか、雪だるまを作るのがよいでしょう。';
      break;
    // choice が overcast の処理
    case 'overcast':
      para.textContent = '雨は降っていませんが、空はとても暗くなっています。万が一に備えレインコートを持ちましょう。';
      break;

    // choice が default(どのケースにもマッチしない) の処理
    default:
      para.textContent = '';
  }
}




// 三項演算子  ( 条件式 ) ? こちらのコードを実行する : 代わりにこちらのコードを実行する

//  isBirthday という変数が true の場合、誕生日を祝福するメッセージを送ります。そうでなければ、通常の挨拶を送ります。
isBirthday = true;
let greeting = ( isBirthday ) ? 'スミスさん、誕生日おめでとうございます！良い一日を。' : 'スミスさんおはようございます。';


// themeを変更する
const select2 = document.querySelector('#theme');
const html = document.querySelector('html');

document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select2.onchange = function() {
  ( select2.value === 'black' ) ? update('black','white') : update('white','black');
}



// active learning1
// const select3 = document.querySelector('calender');
// const list = document.querySelector('ul');
// const h1 = document.querySelector('h1');

// select3.onchange = function() {
//   const choice = select3.value;
//   const daysList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   let days = daysList[choice-1];
//   createCalendar(days, choice + ' 月');
// }

// function createCalendar(days, choice) {
//   list.innerHTML = '';
//   h1.textContent = choice;
//   for (let i = 1; i <= days; i++) {
//     const listItem = document.createElement('li');
//     listItem.textContent = i;
//     list.appendChild(listItem);
//   }
// }

// createCalendar(31,'1 月');


/*
const select4 = document.querySelector('select');
const html = document.querySelector('.output');

select4.onchange = function() {
  const choice = select4.value;

  switch(choice){
	case 'white':
	  update("white", "black");
          break;
        case 'black':update("black","white");break;
        case 'purple':update("purple", "white");break;
        case 'yellow':update("yellow", "black");break;
        case 'psychedelic':update("lime", "white");
  }
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
*/


/*
let season = '';
let response;

// Add your code here
if (season === 'summer'){
response = 'hot,hot,hot!!';
}else if (season === 'winter'){
response = 'cool';
}else{
response = "I don't know the season."}
// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);
*/


// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals