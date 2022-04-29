localStorage.setItem('name','Chris');

let myName = localStorage.getItem('name');
// myName


// localStorage
// Storage {name: 'Chris', length: 1}name: "Chris"length: 1[[Prototype]]: Storage

// localStorage.name
// 'Chris'

localStorage.removeItem('name');
myName = localStorage.getItem('name');
// myName
// null