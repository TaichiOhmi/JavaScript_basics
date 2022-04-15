// Listen for messages from the main thread.
// If the message command is "generate", call `generatePrimes()`
addEventListener("message", message => {
    if (message.data.command === 'generate') {
      generatePrimes(message.data.quota);
    }
  });
  
  // Generate primes (very inefficiently)
  function generatePrimes(quota) {
  
    function isPrime(n) {
      for (let c = 2; c <= Math.sqrt(n); ++c) {
        if (n % c === 0) {
            return false;
         }
      }
      return true;
    }
  
    const primes = [];
    const maximum = 1000000;
  
    while (primes.length < quota) {
      const candidate = Math.floor(Math.random() * (maximum + 1));
      if (isPrime(candidate)) {
        primes.push(candidate);
      }
    }
  
    // When we have finished, send a message to the main thread,
    // including the number of primes we generated.
    postMessage(primes.length);
  }
  

  /*

  メインスクリプトがワーカーを作成すると同時に実行されることを忘れないでください。

  Worker が最初に行うことは、メイン スクリプトからのメッセージのリッスンを開始することです。これはワーカーのグローバル関数である addEventListener() を使って行われます。メッセージ イベント ハンドラの内部では、イベントの data プロパティにメイン スクリプトから渡された引数のコピーが格納されます。メイン スクリプトが generate コマンドを渡した場合、generatePrimes() を呼び出し、メッセージ イベントから quota 値を渡します。
  
  generatePrimes()関数は同期バージョンと同じですが、値を返す代わりに、完了したらメインスクリプトにメッセージを送信します。これは、addEventListener() と同様に、Worker のグローバル関数です。すでに見たように、メイン スクリプトはこのメッセージを待ち受けていて、メッセージを受信すると DOM を更新します。
  
  */
 
 /*

  この記事では、ウェブアプリケーションがタスクを別のスレッドにオフロードすることを可能にするウェブワーカーを紹介しました。メインスレッドとワーカーは直接変数を共有せず、メッセージを送信することで通信し、相手側はそれをメッセージイベントとして受信します。

  ワーカーはメインアプリケーションの応答性を維持するための効果的な方法ですが、メインアプリケーションがアクセスできるすべての API にアクセスすることはできませんし、特に DOM にアクセスすることはできません。

  */