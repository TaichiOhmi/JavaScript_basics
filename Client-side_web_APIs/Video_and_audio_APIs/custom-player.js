const media = document.querySelector('video');
const controls = document.querySelector('.controls');

const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const rwd = document.querySelector('.rwd');
const fwd = document.querySelector('.fwd');

const timerWrapper = document.querySelector('.timer');
const timer = document.querySelector('.timer span');
const timerBar = document.querySelector('.timer div');

media.removeAttribute('controls');
controls.style.visibility = 'visible';

play.addEventListener('click', playPauseMedia);
stop.addEventListener('click', stopMedia);
media.addEventListener('ended', stopMedia);
rwd.addEventListener('click', mediaBackward);
fwd.addEventListener('click', mediaForward);
media.addEventListener('timeupdate', setTime);


function playPauseMedia() {
    rwd.classList.remove('active');
    fwd.classList.remove('active');
    clearInterval(intervalRwd);
    clearInterval(intervalFwd);    

    // HTMLMediaElement.paused(この場合はvideo.paused)はメディアが一時停止しているときにtrueを返す。
    if(media.paused) {
        // data-icon を 'u' にしてアイコンをポーズにする。
        play.setAttribute('data-icon','u');
        // play()メソッドで再生する。
        media.play();
    } else {
        // data-icon を 'P' にしてアイコンをプレイにする。
        play.setAttribute('data-icon','P');
        // pause()メソッドで一時停止。
        media.pause();
    }
}
  
function stopMedia() {
    // HTMLMediaElement API には stop() メソッドはないが、video を pause してから HTMLMediaElement の currentTime を0にすることと同じ。
    media.pause();
    media.currentTime = 0;
    play.setAttribute('data-icon','P');

    rwd.classList.remove('active');
    fwd.classList.remove('active');
    clearInterval(intervalRwd);
    clearInterval(intervalFwd);
}

let intervalFwd;
let intervalRwd;

function mediaBackward() {
    // clear any classes and intervals. 
    // clearInterval() メソッドは、以前に setInterval() の呼び出しによって確立されたタイマーを利用した繰り返し動作を取り消します。
    clearInterval(intervalFwd);
    
    // 早送りボタンを押した後に巻き戻しボタンを押すと、早送り機能がキャンセルされ、巻き戻し機能に切り替わるからです。一度に両方を実行しようとすると、プレーヤーが壊れてしまいます。
    fwd.classList.remove('active');

    // classList は 全ての要素に存在するプロパティで要素に設定されている全てのクラスのリストとそれを追加・削除するためのメソッドを含んでいる。
    // check whether the active class has been set on the rwd button
    if(rwd.classList.contains('active')) {
        // rwd に active class がセットされていたら、それをclassList.remove()で取り除き、
        rwd.classList.remove('active');
        // インターバルをクリアし、
        clearInterval(intervalRwd);
        // 巻き戻しをキャンセルして通常の再生を開始
        media.play();
    } else {
        // rwd が active じゃなかったら、classList.add()で active class を追加し、
        rwd.classList.add('active');
        // メディアを一時停止し、
        media.pause();
        // 変数　intervalRwd に setInterval() を設定する。
        intervalRwd = setInterval(windBackward, 200);
        // windBackward を 200 ミリ秒ごとに実行する。

        /* 
            setInterval()

            一定の遅延感覚をおいて関数やコード蘇寧ペットを繰り返し呼び出す。
            引数には 遅延間隔毎に実行する関数, ミリ秒単位の遅延時間, などを取る 
        */
    }
}

function mediaForward() {
    clearInterval(intervalRwd);
    rwd.classList.remove('active');

    if(fwd.classList.contains('active')) {
        fwd.classList.remove('active');
        clearInterval(intervalFwd);
        media.play();
    } else {
        fwd.classList.add('active');
        media.pause();
        intervalFwd = setInterval(windForward, 200);
    }
}


function windBackward() {
    // もし、currentTime が 3以下だったら、
    if(media.currentTime <= 3) {
        // rwd から active class を取り除き、
        // rwd.classList.remove('active');
        // インターバルをクリアし、(これをしないと永遠に巻き戻しが続く)
        // clearInterval(intervalRwd);
        // メディアをストップ(pauseしてcurrentTimeを0に)する。
        stopMedia();
    //  currentTime が 3以下ではなかったら、
    } else {
        // currentTime を -3　する。
        media.currentTime -= 3;
    }
}
  
function windForward() {
    if(media.currentTime >= media.duration - 3) {
        // fwd.classList.remove('active');
        // clearInterval(intervalFwd);
        stopMedia();
    } else {
        media.currentTime += 3;
    }
}
  
function setTime() {
    // currentTime から分を計算
    const minutes = Math.floor(media.currentTime / 60);
    // currentTIme から秒を計算
    const seconds = Math.floor(media.currentTime - minutes * 60);
  
    // padStart() メソッドは、結果の文字列が指定した長さになるように、現在の文字列を他の文字列で (必要に応じて繰り返して) 延長します。延長は、現在の文字列の先頭から適用されます。数値が1桁の場合でも2文字の長さにできる！
    const minuteValue = minutes.toString().padStart(2, '0');
    const secondValue = seconds.toString().padStart(2, '0');
  
    // 実際に表示される値を mediaTime に : で繋いで設定する。
    const mediaTime = `${minuteValue}:${secondValue}`;
    // timer の textContent に 表示したい値を設定。
    timer.textContent = mediaTime;
  
    // 内側のdiv に設定する長さは、まず外側のdiv(.timer)の幅を計算し、それにHTMLMediaElemet.currentTime を HTMLMediaElement.durationで割ったものを掛けた数値にする。。
    // Element.clientWidth プロパティは、インライン要素や CSS のない要素ではゼロになります。それ以外では、要素の内側の寸法をピクセル単位で表します。パディングは含みますが、境界、マージン、（もしあれば）垂直スクロールバーは含みません。
    // HTMLMediaElement.duration プロパティは、メディアの長さを秒単位で示します。 使用可能なメディアデータがない場合はゼロになります。
    const barLength = timerWrapper.clientWidth * (media.currentTime/media.duration);// 長さ * 現在/全体

    // 内側の div の幅は 計算した barLength にする。(pxを加え、ピクセルで設定)
    timerBar.style.width = `${barLength}px`;
}
  

document.onclick = function(e) {
    console.log(e.x + ',' + e.y)
}