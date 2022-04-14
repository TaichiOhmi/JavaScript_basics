
// const output = document.querySelector('#output');
// const button = document.querySelector('#set-alarm');

// // window.setTimeout() は第一引数にやりたいこと、第二引数にmileseconds後に動かす指定。
// function setAlarm() {
//   window.setTimeout(() => {
//     output.textContent = 'Wake up!';
//   }, 1000);
// }

// button.addEventListener('click', setAlarm);


/*

alarm()関数は、タイマーが切れたときに実行されるPromiseを返す。
これは "Wake up!" というメッセージを then() ハンドラに渡し、呼び出し元が負の delay 値を指定した場合はプロミスを拒否します。

重要！　Promise()コンストラクタ
Promise()コンストラクタは、引数として1つの関数を受け取ります。
この関数はエグゼキュータと呼ばれ、
新しいプロミスを作成するときには，このエグゼキュータの実装を指定します．

エグゼキュータ関数は2つの引数を取りますが，どちらも関数で，慣例的に resolve と reject と呼ばれるものです．
エグゼキュータの実装では，基礎となる非同期関数を呼び出します．
非同期関数が成功すればresolveを呼び、失敗すればrejectを呼びます。
エグゼキュータ関数がエラーを投げる場合は、自動的にrejectが呼ばれます。
resolveとrejectには、任意の型のパラメータを1つだけ渡すことができます。

*/

const name = document.querySelector('#name');
const delay = document.querySelector('#delay');
const button = document.querySelector('#set-alarm');
const output = document.querySelector('#output');

// タイマーが切れた時に実行される promise を返す
function alarm(person, delay) {
    
    // promise コンストラクタ はエグゼキュータと呼ばれる関数を引数に取る。
    // executor は ２つの関数(resolve, reject) を取る
    return new Promise((resolve, reject) => {
        
    //delayが負でないことを確認し、負である場合はエラーを投げる。
      if (delay < 0) {
        throw new Error('Alarm delay must not be negative');
      }

      //window.setTimeout()を呼び出し、コールバックとdelayを渡します。
      window.setTimeout(() => {
          //コールバックはタイマーが切れたときに呼び出されます。
          //コールバックの中で resolve を呼び出し、「起きて！」メッセージを渡します。
        resolve(`Wake up, ${person}!`);
      }, delay);

    });
  }

  button.addEventListener('click', () => {
    alarm(name.value, delay.value)
      .then(message => output.textContent = message)
      .catch(error => output.textContent = `Couldn't set alarm: ${error}`);
  });
  


// const name = document.querySelector('#name');
// const delay = document.querySelector('#delay');
// const button = document.querySelector('#set-alarm');
// const output = document.querySelector('#output');


// async await を用いた書き方。
button.addEventListener('click', async () => {
  try {
    const message = await alarm(name.value, delay.value);
    output.textContent = message;
  }
  catch (error) {
    output.textContent = `Couldn't set alarm: ${error}`;  
  }
});
