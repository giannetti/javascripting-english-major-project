// 1. Set the content of #glosses.
$("#glosses").html("<p>The glosses will go here.</p>");
// 2. Set the content of #prologue.
$.getJSON("https://the-javascripting-english-major.org/v1/prologue.json", function(data){ // Note the data variable!
  let prologueText; // Define the variable you didn’t need before.
  prologueText = "<blockquote><p>"; // Open the tags.
  // Now you can iterate over the data variable’s .lines property:
  data.lines.forEach(function(line){ // We get a variable, line.
    // Define a blank lineText.
    let lineText;
    lineText = "";
    // Now iterate over each line. This part should be familiar.
    line.forEach(function(word){
        let wordString, dataAttributes;
        wordString = word.text;
        dataAttributes = "";
        if (word.modern){
            dataAttributes = dataAttributes + " data-modern='" + word.modern + "'";
            if (word.url){
                dataAttributes = dataAttributes + " data-url='" + word.url + "'";
            }
            wordString = "<a href='#'" + dataAttributes + ">" + wordString + "</a>";
        }
      lineText = lineText + wordString + " ";
    });
    // Add lineText with a line break to the prologueText.
    prologueText = prologueText + lineText + "<br/>";
  });
  // Close the prologueText tags.
  prologueText = prologueText + "</p></blockquote>";
  // Replace the content of #prologue.
  $("#prologue").html(prologueText);
  // 3. Wait for clicks and then change #glosses
  $("#prologue a").click(function(){
    let glossText, clickedWord, modernWord;
    clickedWord = $( this ).text();
    modernWord = $( this ).data("modern");
    glossText = "<h2>You clicked on " + clickedWord + ", which means " + modernWord +"</h2>";
    if ($( this ).data("url")){
        glossText = glossText + "<h3>Read more on <a href='" + $( this ).data("url") + "'>Wikipedia</a>.</h3>";
      }
    $("#glosses").html(glossText);
    });
}); // Close the callback function & method.