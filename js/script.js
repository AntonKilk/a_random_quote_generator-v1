/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/***
  Return a random RGB color
***/

function getRandomColor() {
  // use max rbg values of 200 to avoid getting too close to white (the text color)
  var red = Math.floor(Math.random() *200);
  var green = Math.floor(Math.random() *200);
  var blue = Math.floor(Math.random() *200);

  var color = "RGB(" + red + "," + green + "," + blue + ")";
  return color;
}


// Function "printQuote" takes a quote from function "getRandomQuote" and formats it for printing
function printQuote (){
  var printQuote = getRandomQuote();
    var HTML = '<p class="quote">' + printQuote.quote + '</p>';
  HTML += '<p class="source">' + printQuote.source;
  

  //checks if property 'year' and "citation" is in the 'quotes' array
  if (printQuote.year){
    HTML += '<span class="year">' + printQuote.year + '</span>';
  }
  else if (printQuote.citation){
    HTML += '<span class="citation">' + printQuote.citation + '</span>';
  }
  HTML += '</p>';
document.getElementById('quote-box').innerHTML = HTML;

  /*
  ** Change background color.  Thanks to: https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
  */
 document.body.style.backgroundColor = getRandomColor();

  return HTML;
  }
  
var usedQuotes = []; //array to store used quotes array

function getRandomQuote() {

  // generates a random number from length of quotes array
    var randomNum = Math.floor(Math.random() * quotes.length);

    // Next checks if the quote was already shown
    while (usedQuotes.includes(quotes[randomNum])){
        quotes.splice(randomNum, 1); //deletes the used quote from array 
        randomNum = Math.floor(Math.random() * quotes.length); //takes a new quote from array

        // resets to new circle, when all the quotes are shown
        if (quotes.length === 0){
        quotes = usedQuotes;  
        usedQuotes = [];
        }
    }

  usedQuotes.push(quotes[randomNum]); //adds used quote to "used quotes array"

  return quotes[randomNum];
}



document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/***
  Re-invoke printQuote every 5 seonds instead of having to click the button
***/

window.setInterval(printQuote, 5000);
