const api_url = "https://api.quotable.io/random";

const quotes = document.querySelector('blockquote')
const authors = document.querySelector('.span')

async function quote(api_url){
    const response = await fetch(api_url);
    var data = await response.json();
    console.log(data);
 

    quotes.innerHTML = data.content;
    authors.innerHTML = data.author;

} 

quote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quotes.innerHTML + " --- by " + authors.innerHTML, "tweet window", "width = 600, height= 300");
}