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