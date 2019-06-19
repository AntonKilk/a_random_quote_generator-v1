/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Function "printQuote" takes a quote from function "getRandomQuote" and formats it for printing
function printQuote (){
  var printQuote = getRandomQuote();
    var HTML = '<p class="quote">' + printQuote.quote + '</p>';
  HTML += '<p class="source">' + printQuote.source + '</p>';
  
  //checks if property 'year' and "citation" is in the 'quotes' array
  for (var prop in printQuote){
  if (prop === "year"){
    HTML += '<span class="year">' + printQuote.year + '</span>';
  }
  else if (prop === "citation"){
    HTML += '<span class="citation">' + printQuote.citation + '</span>';
  }
  }
document.getElementById('quote-box').innerHTML = HTML;
  return HTML;
  }
  
  
  // Function "getRandomQuote" takes a random quote from array "quotes" and returns it.
  function getRandomQuote( ) {
  var i = Math.floor(Math.random() * quotes.length);
  return quotes [i];
  }

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


