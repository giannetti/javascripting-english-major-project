let userInput;
userInput = prompt("Guess a number, you cheeky monkey!", "Type your answer here.");
 	for (let i = 1; i <= userInput; i = i + 1 ) {
// 		$("#response").append("<br />" + i);
		if (i % 2 === 0) {
 			$("#response").append(i + "<span> is even.</span><br />");
 		} else {
 			$("#response").append(i + "<span> FUCK! </span><br />");
 		}
 	}