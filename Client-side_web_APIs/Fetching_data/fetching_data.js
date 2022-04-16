fetch('products.json')
.then( response => {
if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
}
return response.json();
})
.then( json => initialize(json) )
.catch( err => console.error(`Fetch problem: ${err.message}`) );



fetch(url)
.then( response => {
if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
}
return response.blob();
})
.then( blob => showProduct(blob, product) )
.catch( err => console.error(`Fetch problem: ${err.message}`) );



const request = new XMLHttpRequest();

try {
  request.open('GET', 'products.json');

  request.responseType = 'json';

  request.addEventListener('load', () => initialize(request.response));
  request.addEventListener('error', () => console.error('XHR error'));

  request.send();

} catch(error) {
  console.error(`XHR error ${request.status}`);
}
