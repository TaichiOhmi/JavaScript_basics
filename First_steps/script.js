function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'ボタンが押されました!';
    document.body.appendChild(para);
  }
  
  const buttons = document.querySelectorAll('button');
  
  for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }


  /*
  function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'ボタンが押されました！';
    document.body.appendChild(para);
    }
  <button onclick="createParagraph()">押してください</button>

  上記のような書き方もできるが、HTMLを汚すし、適用したいボタン全てに書かないといけないから非効率。
  */


