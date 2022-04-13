// fetch()を使って、返されたvalueをfetchPromiseにassign
// fetch() メソッドは必須の引数を 1 つ取り、取得したいリソースのパスを指定します。成功か失敗かに関わらず、リクエストに対する Response に解決する Promise を返します。
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

// then() メソッドは Promise(fetch()がプロミスを返す) を返します。最大 2 つの引数として、 Promise が成功した場合と失敗した場合のコールバック関数を取ります。
fetchPromise.then( response => {
  console.log(`Received response: ${response.status}`);// response.statusはこのレスポンスのステータスコードを返します (成功ならば 200 になります)。

});

// fetchより先にこっちが出力される
console.log("Started request...");


// fetch()APIではresponseオブジェクトを取得後、別の関数を呼び出してレスポンスデータを取得しないといけない。
// 今回はresponseデータをJSONとして取得したいので、Responseオブジェクトのjson()メソッドを用いる。

// fetchPromise2にfetch関数で取得したjsonデータを格納
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise2が完了したら、then()でresponsをjson()でJSONにしたものをjsonPromiseに格納し、それが終わったらconsoleで出力
fetchPromise2.then( response => {
  const jsonPromise = response.json();
  jsonPromise.then( json => {
    console.log(json[0].name);
  });
});

// 上記は下記のように置き換え可能

// fetcy()APIを呼ぶ定義
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetcyPromise3が、
fetchPromise3
// 終了後、response を response.json() として返す。
  .then( response => {
    return response.json();
  })
  .then( json => {
    console.log(json[0].name);
  });


  const fetchPromise4 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// リクエストを読み込む前に、サーバーがリクエストを受け入れ、処理することができたかどうかを確認する。
// これを行うには、レスポンスのステータスコードをチェックし、それが "OK" でない場合はエラーを投げます。
fetchPromise4
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( json => {
    console.log(json[0].name);
  });


// then()に渡されたハンドラは非同期処理に成功したときに呼ばれるのに対し、catch()に渡されたハンドラは非同期処理に失敗したときに呼ばれます。
// プロミス・チェーンの最後にcatch()を追加すれば、いずれかの非同期関数呼び出しに失敗したときに呼び出されるようになります。つまり、ある操作を複数の連続した非同期関数呼び出しとして実装し、すべてのエラーを一箇所で処理することができるのです。
const fetchPromise5 = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise5
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( json => {
    console.log(json[0].name);
  })
  .catch( error => {
    console.error(`Could not get products: ${error}`);
  });
/*
penging: 
プロミスが作成され、その後の非同期処理が成功も失敗もしていない状態。

fulfilled: 
非同期関数が成功した状態。promiseがfulfilledになると、then()ハンドラーが呼ばれる。

rejected:
非同期関数が失敗した状態。promiseがrejectedだとcatchハンドラーが呼ばれる。
*/


// promise chain は複数の非同期関数から構成され、それぞれの関数が完了してから次の関数を開始する必要がある場合に必要。
// お互いに依存していない複数のpromise の場合、全てが履行されて時に通知される方が効率がよく、そのためにPromise.all()がある。これはプロミスの配列を受け取り、1つのpromiseを返す。

// promise.all()
//Promise.all()が返すプロミスは、配列の中のすべてのプロミスが満たされたとき、そして満たされたとき、です。この場合、then()ハンドラは、all()に渡されたプロミスと同じ順番で、すべてのレスポンスの配列で呼び出されます。
//rejected 配列の中の約束が拒否されたとき、およびそのとき、catch() ハンドラが、拒否されたプロミスによって投げられたエラーで呼ばれます。
 
const fetchPromise6 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise7 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise8 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

// Promise.all( [プロミスの配列] )
Promise.all([fetchPromise6, fetchPromise7, fetchPromise8])
  .then( responses => {
      // responses を loop で response として返す。
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch( error => {
    console.error(`Failed to fetch: ${error}`)
  });



  const fetchPromise9 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise10 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise11 = fetch('bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise9, fetchPromise10, fetchPromise11])
  .then( responses => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch( error => {
    console.error(`Failed to fetch: ${error}`)
  });


  //時には、一連の約束のうちどれかが果たされる必要があり、どれが果たされるかは気にしないかもしれません。そのような場合は Promise.any() が必要です。Promise.all() と似ていますが、約束の配列のどれかが満たされるとすぐに実行され、すべてが拒否されると拒否される点が異なります。
  const fetchPromise12 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise13 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise14 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.any([fetchPromise12, fetchPromise13, fetchPromise14])
  .then( response => {
    console.log(`${response.url}: ${response.status}`);
  })
  .catch( error => {
    console.error(`Failed to fetch: ${error}`)
  });



// async await
  //async キーワードは、非同期のプロミス・コードをより簡単に扱う方法を提供します。関数の最初にasyncを追加すると、その関数は非同期関数になります。
  async function myFunction() {
      // This is an async function
    }
    
    //非同期関数内では、プロミスを返す関数を呼び出す前にawaitキーワードを使用することができます。これにより、プロミスが決済されるまでその時点でコードが待機し、その時点でプロミスの履行された値が戻り値として扱われるか、拒否された値がスローされます。
    
    //これにより、非同期関数を使用しながらも、同期コードのように見えるコードを書くことができます。例えば、fetchの例を書き直すのに使えます。
    //ここでは、await fetch()を呼び出していますが、呼び出し側はPromiseを取得する代わりに、fetch()が同期関数であるかのように、完全なResponseオブジェクトを返します!
    async function fetchProducts() {
        //エラー処理のために try...catch ブロックを使用することもでき、まさにコードが同期であるかのようです。
        try {
            // after this line, our function will wait for the `fetch()` call to be settled
            // the `fetch()` call will either return a Response or throw an error
      const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      // after this line, our function will wait for the `response.json()` call to be settled
      // the `response.json()` call will either return the JSON object or throw an error
      const json = await response.json();
      console.log(json[0].name);
    }
    catch(error) {
      console.error(`Could not get products: ${error}`);
    }
  }
  
  fetchProducts();
  
  

  // async function
  async function fetchProducts() {
    try {
      // await fetch の結果を　response　に返す
      const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
      // エラー処理
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      // await response.json() を使って json に中身を格納
      const json = await response.json();
      return json;
    }
    catch(error) {
      console.error(`Could not get products: ${error}`);
    }
  }
  
  // jsonPromise を 定義した関数で作成。jsonが格納される。
  const jsonPromise = fetchProducts();
  jsonPromise.then((json) => console.log(json[0].name));
  

//非同期関数は，プロミス・チェーンを使うような場合によく使うでしょうし，プロミスをより直感的に扱えるようにします．

//プロミスチェーンと同じように、awaitは非同期処理を連続して完了させることを強制することを覚えておいてください。これは、次の操作の結果が最後の操作の結果に依存する場合に必要ですが、そうでない場合は Promise.all() のようなものがより高いパフォーマンスを発揮します。