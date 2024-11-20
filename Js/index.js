


var changeButton = document.getElementById("changeButton");
var quoteOutput=document.getElementById("quoteOutput");
var quoteAuthor=document.getElementById("quoteAuthor");



function generateQuote() {
    var quotes = [{ quote: `“A rose by any other name would smell as sweet.”`, author: `― William Shakespear` },
    {quote: `“Ask not what your country can do for you; ask what you can do for your country.”`, author: `― John Kennedy` },
    { quote: `“Go ahead, make my day.”`, author: `― Harry Callahan` },
    { quote: `“Eighty percent of success is showing up.”`, author: `― Woody Allen` },
    ]

    var random = Math.trunc(Math.random() * quotes.length);

     quoteOutput.innerHTML=quotes[random].quote;
     authorOutput.innerHTML=quotes[random].author;
}

changeButton.addEventListener("click", generateQuote);