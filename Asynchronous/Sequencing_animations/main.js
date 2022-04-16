const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

  
  
  // プロミスの様々な使い方を強化するために、いくつかの異なる方法で実装してみることをお勧めします。
  
  
  //まず、コールバックの使い方の説明で見た「コールバック地獄」のプロミス版とも言えるような、動作するものを実装してください。
  function animation(){
    alice1.animate(aliceTumbling, aliceTiming).finished.then( () => 
    {   
    alice2.animate(aliceTumbling, aliceTiming).finished.then( () =>
    {
        alice3.animate(aliceTumbling, aliceTiming)
    })
    });
  }
//   animation();
  

  // 次に、それをプロミスチェーンとして実装します。矢印関数の形式が異なるため、いくつかの異なる書き方があることに注意してください。いろいろな書き方を試してみてください。どれが一番簡潔でしょうか？最も読みやすいのはどれでしょうか？


  //最後に、asyncとawaitを使って実装してみましょう。
  function anime(elem) {
    return elem.animate(aliceTumbling, aliceTiming).finished;
  }

  animation2 = async () => {
      await anime(alice1);
      await anime(alice2);
      await anime(alice3);
  }

  animation2();

  
  
  //element.animate() は Promise を返さないことに注意してください：Animation オブジェクトを返し、finished プロパティは Promise であることに注意してください。