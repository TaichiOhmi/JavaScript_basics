// random(x) はコードの前半で定義され、0 から x-1 までの整数を返します
// WIDTH と HEIGHT は、内側のブラウザーウィンドウの幅と高さです。
// for (let i = 0; i < 100; i++) {
//     ctx.beginPath();
//     ctx.fillStyle = 'rgba(255,0,0,0.5)';
//     ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
//     ctx.fill();
//   }

const cats = ['ビル', 'ジェフ', 'ピート', 'ビッグルズ', 'ジャスミン'];
let info = '私の猫の名前は、';
// const para = document.querySelector('p');

for (let i = 0; i < cats.length; i++) {
  info += cats[i] + '、';
}
// para.textContent = info; 
//'私の猫の名前は、ビル、ジェフ、ピート、ビッグルズ、ジャスミン、'

let info2 = '私の猫の名前は、';
for (let i = 0; i < cats.length; i++) {
    if (i === cats.length - 1) {
      info += cats[i] + 'です。';
    } else {
      info += cats[i] + '、';
    }
  }
//'私の猫の名前は、ビル、ジェフ、ピート、ビッグルズ、ジャスミンです。'
// 配列宣言
const contacts = ['クリス:2232322', 'サラ:3453456', 'ビル:7654322', 'メアリー:9998769', 'ダイアン:9384975'];
// 要素
const param = document.querySelector('#contact');
const input = document.querySelector('#search');
const btn = document.querySelector('#searchBtn');

// btn が クリックされた時の関数を 定義。
btn.addEventListener('click', function() {
  // searchName に inputのvalueを小文字にしたものを格納
  let searchName = input.value.toLowerCase();
  // input を 空に
  input.value = '';
  // input を フォーカス
  input.focus();

  // contacts の 配列の中身を繰り返し、
  for (let i = 0; i < contacts.length; i++) {
    // contacts の要素を一行ずつ ':' で分割して splitContact に配列として格納
    let splitContact = contacts[i].split(':');
    // splicContactに格納した１番目の部分（名前）を小文字にしたものが searchName（inputで受け取った名前）と同じなら、
    if (splitContact[0].toLowerCase() === searchName) {
      // p に 新しい文字列を格納
      param.textContent = splitContact[0] + ' の電話番号は ' + splitContact[1] + ' です。';
      break;
    // selectContact の名前と input の値が異なる時、
    } else {
      param.textContent = '連絡先が見つかりません。';
    }
  }
});


/* continue で繰り返しをスキップする
continue 文は break と同じような動作をしますが、ループを完全に抜けてしまうのではなく、次の繰り返しまで飛ばします。
*/

// const para2 = document.querySelector('#root');
// const input2 = document.querySelector('#num');
// const btn2 = document.querySelector('#rootBtn');
// let num = input2.value;

// btn2.addEventListener('click', function() {
//     for (let i = 1; i <= num; i++) {
//     let sqRoot = Math.sqrt(i);
//     if (Math.floor(sqRoot) !== sqRoot) {
//         continue;
//     }
//     para2.textContent += i + ' ';
//     }
// });



let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }

  i++;
}

i = 0;

do {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }

  i++;
} while (i < cats.length);


// const output = document.querySelector('.output');
// output.innerHTML = '';

// let i = 10;

// while(i >= 0) {
//  let para = document.createElement('p');
//  if(i === 10) {
//  para.textContent = 'Countdown ' + i;
//  } else if(i === 0) {
//   para.textContent = 'Blast off!';
//  } else {
//  para.textContent = i;
//  }

//  output.appendChild(para);

//  i--;
// }


// const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

// const admitted = document.querySelector('.admitted');
// const refused = document.querySelector('.refused');

// admitted.textContent = 'Admit: ';
// refused.textContent = 'Refuse: '
// let i = 0;

// do {
//  if(people[i] === 'Phil' || people[i] === 'Lola') {
//  refused.textContent += people[i] + ', ';
//  } else {
//  admitted.textContent += people[i] + ', ';
//  }
//  i++;
// } while(i < people.length);

// refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
// admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';




//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Loops