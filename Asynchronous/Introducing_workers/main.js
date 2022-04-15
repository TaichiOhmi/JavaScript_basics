// Create a new worker, giving it the code in "generate.js"
const worker = new Worker('./generate.js');

// When the user clicks "Generate primes", send a message to the worker.
// The message command is "generate", and the message also contains "quota",
// which is the number of primes to generate.
document.querySelector('#generate').addEventListener('click', () => {
  const quota = document.querySelector('#quota').value;
  worker.postMessage({
    command: 'generate',
    quota: quota
  });
});

// When the worker sends a message back to the main thread,
// update the output box with a message for the user, including the number of
// primes that were generated, taken from the message data.
worker.addEventListener('message', message => {
  document.querySelector('#output').textContent = `Finished generating ${message.data} primes!`;
});

document.querySelector('#reload').addEventListener('click', () => {
  document.querySelector('#user-input').value = 'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});

/*

まず、Worker() コンストラクタでワーカーを作成します。このコンストラクタにワーカー スクリプトを指す URL を渡します。Worker が作成されるとすぐに、Worker スクリプトが実行されます。
次に、同期バージョンと同様に、「素数を生成する」ボタンにクリック イベント ハンドラを追加します。しかし、ここでは generatePrimes() 関数を呼び出すのではなく、worker.postMessage() を使って Worker にメッセージを送信します。このメッセージは引数を取ることができ、今回は 2 つのプロパティを含む JSON オブジェクトを渡しています。
command: Worker に実行させたいことを示す文字列（Worker が複数のことを実行できる場合に備えて）。
quota: 生成する素数の数。
次に、Worker にメッセージ イベント ハンドラを追加します。これは、Worker が終了したときに私たちに知らせ、生成されたデータを渡すためです。ハンドラはメッセージの data プロパティからデータを受け取り、output 要素に書き込みます（データは quota と全く同じなので、これは少し無意味ですが、原理はわかります）。
最後に、"Reload" ボタンのクリックイベントハンドラを実装します。これは同期バージョンと全く同じです。

*/