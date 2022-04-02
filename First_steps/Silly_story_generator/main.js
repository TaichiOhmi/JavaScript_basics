// Enter custom name の input 
const customName = document.getElementById('customname');
// Generate random story ボタン 
const randomize = document.querySelector('.randomize');
// <p>　の story class 
const story = document.querySelector('.story');


function randomValueFromArray(array){
  // random で 0~1 の数値を作成して、arrayの長さとの積を整数化した数値。
  const random = Math.floor(Math.random()*array.length);
  // array の random 番目を返す
  return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertX = [
    "Willy the Goblin",
    "Big Daddy",
    "Father Christmas"
]

let insertY = [
    "the soup kitchen",
    "Disneyland",
    "the White House"
]

let insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"
]

// randomize ボタンが click された時、result()を発動。
randomize.addEventListener('click', result);


function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);
    
  // もし、customName が 空じゃなければ、
  if(customName.value !== '') {
    // name に customName の value を格納。
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  // もし、id が 'uk' の radio ボタンが check されていたら、
  if(document.getElementById("uk").checked) {

    // weight に ポンドからストーン へ
    const weight = Math.round(300 * 0.071429) + ' stone';

    // 温度を 華氏 から　摂氏　へ
    const temperature =  Math.round((94 - 32) / 1.8) + ' centigrade';

    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';

}


/**
 * const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

 */