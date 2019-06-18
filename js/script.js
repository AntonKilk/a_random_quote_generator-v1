/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Function "printQuote" takes a quote from function "getRandomQuote" and formats it for printing
function printQuote (){
  var printQuote = getRandomQuote();
    var HTML = '<div id="quote-box"> <p class="quote">Quote: ' + printQuote.quote + '</p>';
  HTML += '<p class="source">Source: ' + printQuote.source + '</p>';
  
  //checks if property 'year' and "citation" is in the 'quotes' array
  for (var prop in printQuote){
  if (prop === "year"){
    HTML += '<span class="year">Year: ' + printQuote.year + '</span>';
  }
  else if (prop === "citation"){
    HTML += '<span class="citation">Citation: ' + printQuote.citation + '</span>';
  }
  }
  HTML +='</div>';
  return HTML;
  }
  
  console.log(printQuote());
  
  // Function "getRandomQuote" takes a random quote from array "quotes" and returns it.
  function getRandomQuote( ) {
  var i = Math.floor(Math.random() * quotes.length);
  return quotes [i];
  }

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


