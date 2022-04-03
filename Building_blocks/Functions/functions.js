let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');
console.log(newString);
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made


let myArray = ['I', 'love', 'chocolate', 'frogs'];
let madeAString = myArray.join(' ');
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string

let myNumber = Math.random();
// the random() function generates a random
// number between 0 and 1, and returns that
// number

function random(number) {
    return Math.floor(Math.random()*number);
}


// 匿名関数
// 匿名関数はイベントハンドラーでよく使われる。 
const myButton = document.querySelector('button');
myButton.onclick = function() {
  alert('hello');
}

//上のやつは button がないと発動できないが、このように変数のように代入して書くと、
const myGreeting = function() {
    alert('hello');
  }
// こうして発動できる。
myGreeting();
// また関数を複数の変数の値として代入する事も可能:
let anotherGreeting = myGreeting;

myGreeting(); // alert('hello')
anotherGreeting(); // alert('hello')

// でもやっぱりこの書き方が一番
function myGreeting() {
    alert('hello');
  }



/*
<!-- Excerpt from my HTML -->
<script src="first.js"></script>
<script src="second.js"></script>
<script>
greeting();
</script>

// first.js
let name = 'Chris';
function greeting() {
alert('Hello ' + name + ': welcome to our company.');
}

// second.js
let name = 'Zaptec';
function greeting() {
alert('Our company is called ' + name + '.');
}

あなたが呼び出したいのはどっちも greeting()関数ですが、あなたには first.js ファイルの greeting() 関数しかアクセスできません(2 つ目は無視されます)。加えて、second.js ファイルで let キーワードで name 変数に 2度目の定義をしようとするとエラーになります。
*/


// 関数 in 関数
/*
function myBigFunction() {
let myValue;

subFunction1();
subFunction2();
subFunction3();
}

function subFunction1() {
console.log(myValue);
}

function subFunction2() {
console.log(myValue);
}

function subFunction3() {
console.log(myValue);
}
*/

function myBigFunction() {
let myValue = 1;

subFunction1(myValue);
subFunction2(myValue);
subFunction3(myValue);
}

function subFunction1(value) {
console.log(value);
}

function subFunction2(value) {
console.log(value);
}

function subFunction3(value) {
console.log(value);
}



// const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
// const para = document.createElement('p');

// // Add your code here
// function chooseName() {
// let index = Math.floor(Math.random()*names.length);
// para.textContent = `${names[index]}`;
// }
// chooseName();
// // Don't edit the code below here!

// section.innerHTML = ' ';

// section.appendChild(para);


    
// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');

// const x = 50;
// const y = 60;
// const width = 100;
// const height = 75;
// const color = 'blue';

// // Add your code here
// ctx.fillStyle = color;
// ctx.fillRect (x, y, width, height);
    

