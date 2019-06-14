/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Function "printQuote" takes a quote from function "getRandomQuote" and formats it for printing
function printQuote (){
  var printQuote = getRandomQuote();
    var HTML = '<h2>Quote: ' + printQuote.quote + '</h2>';
  HTML += '<p>Source: ' + printQuote.source + '</p>';
  
  //checks if property 'year' and "citation" is in the 'quotes' array
  for (var prop in printQuote){
  if (prop === "year"){
    HTML += '<p>Year: ' + printQuote.year + '</p>';
  }
  else if (prop === "citation"){
    HTML += '<p>Citation: ' + printQuote.citation + '</p>';
  }
  }
  
  return HTML;
  }
  
  console.log(printQuote());
  
  // Function "getRandomQuote" takes a random quote from array "quotes" and returns it.
  function getRandomQuote( ) {
  var i = Math.floor(Math.random() * quotes.length);
  return quotes [i];
  }

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


