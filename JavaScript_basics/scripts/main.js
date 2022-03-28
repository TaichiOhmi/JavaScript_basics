// myImageを定義。中身はimg要素
let myImage = document.querySelector('img');

// Myimageがクリックされた時、
myImage.onclick = function() {

    // mySrcに myImageのsrc属性を取り出して代入
    let mySrc = myImage.getAttribute('src');

    // もし、mySrc と この画像Path が 同じなら、
    if(mySrc === 'images/firefox-icon.png') {

      // myImage の src 属性に、新たな画像Path をセットする。(setAttribute関数)
      myImage.setAttribute('src','images/Mt_Fuji.png');
    } else {
    
      // myImage の src 属性に、元のアイコン画像をセット。(元に戻す)
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// function setUserName() {
//     let myName = prompt('あなたの名前を入力してください。'); // myNameにpromptで受け取った名前を入れる→localstorageに行く？
//     localStorage.setItem('name', myName); //　localStorageのsetItem関数を使ってlocalStrageに'name'というkeyでmyNameを保存
//     myHeading.textContent = 'Mozilla はすばらしいよ、' + myName; // h1タグが入ったmyHeadingに新しい文字列を格納。
// }

/*
この関数では prompt() 関数を使用して、alert() のようにダイアログボックスを表示する。
(window.prompt()はユーザにテキストを入力することを促すメッセージを持つダイアログを表示する。)
しかし、prompt() は alert() とは異なり、ユーザーにデータを入力するよう求め、ユーザーが OK を押した後に変数にそのデータを格納する。
この場合、ユーザーに名前を入力するよう求める。
次に、localStorage と呼ばれる API を呼び出すことで、ブラウザーにデータを格納して後で受け取ることができます。 
localStorage の setItem() 関数を使って、'name' と呼ばれるデータを作成し、 myName に入っているユーザーから入力されたデータを格納します。
最後に、見出しの textContent に文字列と新しく格納されたユーザーの名前を設定します。
*/


if(!localStorage.getItem('name')) { // もし、localStrageに'name'というkeyでvalueが格納されていなければ、
    setUserName(); //この変数でlocalStrageに値を格納する
  } else {
    let storedName = localStorage.getItem('name'); // getItemで'name'というkeyで保存されている値をstoredNameに保存
    myHeading.textContent = 'Mozilla はすばらしいよ、' + storedName; // 見出し(myHeading)の textContent に文字列とユ名前を設定する。
  }

  myButton.onclick = function() {
    setUserName();
  }

  //クリックすると、setUserName() 関数が実行され実行され、ユーザーがボタンを押すことで、好きな時に新しい名前を設定できるようになります。



  // Null が 表示されないように setUserName を少し書き換える。
  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  }