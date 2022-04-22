// Defining a baseURL and key to as part of the request URL

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = '';

// Grab references to all the DOM elements you'll need to manipulate
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const section = document.querySelector('section');
const nav = document.querySelector('nav');

// Hide the "Previous"/"Next" navigation to begin with, as we don't need it immediately
nav.style.display = 'none';

// define the initial page number and status of the navigation being displayed
let pageNumber = 0;

// Event listeners to control the functionality
searchForm.addEventListener('submit', submitSearch);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage)

function nextPage(e){
    pageNumber++;
    fetchResults(e);
};

function previousPage(e){
    if(pageNumber>0){
        pageNumber--;
    }
    // 最初のページにいる場合は fetchResults をする必要がないのでreturn
    else{
        return;
    }
    fetchResults(e);
};

function submitSearch(e){
    pageNumber = 0;
    fetchResults(e);
}

// 次のページの結果を取得
function fetchResults(e){
    // Use preventDefault() to stop the form submitting
    e.preventDefault();

    // Assemble the full URL
    let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}&fq=document_type:("article")`;

    if (startDate.value !== ''){
        url = `${url}&begin_date=${startDate.value}`;
        // url += '&begin_date=' + startDate.value;
    };

    if (endDate.value !== ''){
        url = `${url}&end_date=${endDate.value}`;
        // url += '&end_date=' + endDate.value;
    }

    // Use fetch() to make the requenst to the API
    fetch(url)
    .then(response => response.json())
    .then(json => displayResults(json))
    .catch(error => console.error(`Error fetching data: ${error.message}`));
}

function displayResults(json){
    // DOM要素の全てのコンテンツを削除 - sectionに子要素があるかをチェックし、あれば削除。sectionの子要素がなくなれば終了
    while(section.firstChild){
        section.removeChild(section.firstChild);
    }

    // article変数をjson.response.docsと等しくなるよう定義 - 検索によって返された記事を表す全てのオブジェクトを保持する配列
    const articles = json.response.docs;

    // 10個の記事が返されるか確認し、もしあればブロック要素に、なければ
    if(articles.length === 10){
        nav.style.display = 'block';
    }
    else {// display:none;
        nav.style.display = 'none';
    }

    // articlesの長さが0なら、
    if(articles.length === 0){
        // 何も返されなかったことを表すpタグを作成してsectionに追加
        const para = document.createElement('p');
        para.textContent = 'No results returned.';
        section.appendChild(para);
    }
    // そうでなければ、
    else{
        // articlesの数だけarticle要素を作成して追加
        for(const current of articles){
            const article = document.createElement('article');
            const heading = document.createElement('h2');
            const link = document.createElement('a');
            const img = document.createElement('img');
            const para1 = document.createElement('p');
            const keywordPara = document.createElement('p');
            keywordPara.classList.add('keywords');
            const clearfix = document.createElement('div');

            console.log(current);

            link.href = current.web_url;
            link.textContent = current.headline.main;
            para1.textContent = current.snippet;
            keywordPara.textContent = 'Keywords: ';
            // それぞれの記事に関連するすべてのキーワードをループさせ、それぞれのキーワードを <span> に挿入し、<p> の中に入れる。
            for(const keyword of current.keywords){
                const span = document.createElement('span');
                span.textContent = `${keyword.value}`;
                keywordPara.appendChild(span);
            }
            // 各記事に関連する画像があるかどうかをチェック
            if(current.multimedia.length > 0){
                img.src = `http://www.nytimes.com/${current.multimedia[0].url}`;
                img.alt = current.headline.main;
            }

            // div要素に'clearfix'クラスを与え、クリアリングを適用。
            clearfix.setAttribute('class', 'clearfix');

            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para1);
            article.appendChild(keywordPara);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }
}