/*


function Person(first, last, age, gender, interests) {

  // property and method definitions
  this.name = {
    'first': first,
    'last' : last
  };
  this.age = age;
  this.gender = gender;
  //...see link in summary above for full definition
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

// console
上記のようにコンストラクタ関数を定義し、オブジェクトインスタンスを作成した後、
コンソールに person1. と入力すると、利用可能なオブジェクトの補完リストが表示される。
toString や valueOf などがあり、これらは person1 の prototype オブジェクトの prototype オブジェクト (Object.prototype) で定義されている。

　person1 -> Person -> Object
person1 inherits from prototype(Person)
Person inherits from prototype(Object)
 */

//プロトタイプチェーンの中では、メソッドやプロパティはあるオブジェクトから別のオブジェクトにコピーされないことを再確認しておきましょう。これらのメソッドやプロパティは、上で説明したようにチェーンを上っていくことでアクセスされます。




// prototypeプロパティ：継承されたメンバーが定義されている場所

// 継承されたプロパティとメソッドはどこに定義されているのでしょうか？ 
// Objectリファレンスページを見ると、左側に多数のプロパティとメソッドが表示されます。
// いくつかは継承されており、一部は継承されていません。これはなぜでしょうか？

// 継承されたものは prototype プロパティ (サブネームスペースと呼ぶこともできます) で定義されたものであり、それは Object.prototype. で始まるものであって、Object. だけで始まるものではありません。
// prototype プロパティの値はオブジェクトであり、基本的には、プロトタイプチェーンのさらに下のオブジェクトに継承させたいプロパティやメソッドを格納するためのバケットです。

// そのため、Object.prototype.toString()、Object.prototype.valueOf() などは、Person() コンストラクタから作成された新しいオブジェクトインスタンスを含め、Object.prototype を継承するあらゆるオブジェクトタイプで利用できます。

// Object.is()、Object.keys() など、prototype バケット内で定義されていないメンバは、Object.prototype を継承するオブジェクトインスタンスやオブジェクトタイプには継承されません。
// これらは、Object() コンストラクタ自身でのみ利用可能なメソッド/プロパティです。

// console
// Person.prototype 
// > {constructor: ƒ}
// Object.prototype
// > {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// Object の prototype プロパティに定義された多数のメソッドが、Object を継承するオブジェクトで利用できるようになっています。
// プロトタイプチェーン継承の他の例は、JavaScript の至る所で見ることができます。
// 例えば、String、Date、Number、Array などのグローバルオブジェクトのプロトタイプに定義されているメソッドやプロパティを探してみてください。
// これらはすべて、プロトタイプに定義されたいくつかのメンバを持っており、

// 例えば このように myString を定義した時、
let myString = 'This is my string.';
// myStringが最初から、split()、indexOf()、replace()などの便利なメソッドを多数持っているのは String型のプロトタイプに定義されているから。




// create() の再訪
// create() が実際に行うことは、指定したプロトタイプオブジェクトから新しいオブジェクトを作成することです。
let person2 = Object.create(person1);
// ここでは、person1 をプロトタイプオブジェクトとして使用して person2 を作成しています。これはコンソールで以下のように入力することで確認できます
person2.__proto__
/*
Person {name: {…}, age: 32, gender: 'male'}
age: 32
gender: "male"
name:
first: "Bob"
last: "Smith"
[[Prototype]]: Object
[[Prototype]]: Object
constructor: ƒ Person(first, last, age, gender, interests)
[[Prototype]]: Object
*/


// コンストラクタのプロパティ
// すべてのコンストラクタ関数は prototype プロパティを持ち、その値は constructor プロパティを含むオブジェクトとなります。
// この constructor プロパティは、元のコンストラクタ関数を指します。

// 次のセクションでお分かりのように、Person.prototype プロパティ (あるいは、コンストラクタ関数の prototype プロパティに定義されているオブジェクト) は、Person() コンストラクタを使用して作成されたすべてのインスタンスオブジェクトで利用可能になります。
// したがって、コンストラクタプロパティは person1 と person2 の両方のオブジェクトでも利用可能です。

// 例えば、
person1.constructor
// 上下とも
    // Person(first, last, age, gender, interests) {

    // // property and method definitions
    // this.name = {
    //     'first': first,
    //     'last' : last
    // };
    // this.age = age;
    // this.gender = gender;
    // //...see lin…
person2.constructor
// これらのインスタンスの元の定義を含む Person() コンストラクタを返します。
// constructor プロパティの最後に括弧を付けて (必要なパラメータを含む)、そのコンストラクタから別のオブジェクトのインスタンスを作成することができます。
// コンストラクタは結局のところ関数なので、括弧を使用して呼び出すことができます。
// 関数をコンストラクタとして使用したい場合は、new キーワードを含めて指定する必要があります。

// 頻繁に使用する必要はありませんが、新しいインスタンスを作成したいときに、何らかの理由で元のコンストラクタへの参照が簡単に利用できない場合に非常に便利です。
let person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);
person3.name.first
person3.age
person3.bio()


// constructor プロパティには他の用途もあります。
// たとえば、オブジェクトのインスタンスがあり、そのインスタンスのコンストラクタの名前を返したい場合は次のようにします。
instanceName.constructor.name// 例
person1.constructor.name // Person


