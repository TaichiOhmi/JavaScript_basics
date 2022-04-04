const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Meow!');
    }
  }
  
  // Put your code here
  catName = cat['name'];
  cat.greeting();
  cat.color = 'black';
  
  
  // Don't edit the code below here
  
  let para1 = document.createElement('p');
  let para2 = document.createElement('p');
  
  para1.textContent = `The cat's name is ${ catName }.`;
  para2.textContent = `The cat's color is ${ cat.color }.`;
  
  section.appendChild(para1);
  section.appendChild(para2);
    
  

  let bandInfo;

  // Put your code here
  const band = {
  name: 'RealMadrid',
  nationality: 'Spanish',
  genre: 'Football',
  members: 1902,
  formed: 1902,
  split: false,
  albums: [
      {name:'CL',released:13}, 
      {name:'LaLiga',released:34}, 
      {name:'CWC',released:9}
    ],
  }
  const activeYears = 2022-band.formed;
  bandInfo = band.name+band.nationality+activeYears+band.genre+band.albums[0].name+band.albums[0].released+band.albums[1].name+band.albums[1].released
  // Don't edit the code below here
  
  let para1 = document.createElement('p');
  para1.textContent = bandInfo;
  section.appendChild(para1);
    
  
  const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log("Hello, said "+cat.name+' the '+cat.breed);
    }
  }
      
  const cat2 = {
    name : 'Adam',
    breed : 'Yes',
    color : 'black',
    greeting: function() {
      console.log("Hello, said "+cat.name+' the '+cat.breed);
    }
  }