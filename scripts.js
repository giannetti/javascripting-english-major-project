let leonardo, donatello, raphael, michelangelo, turtles, weapons;
leonardo = {name: "Leonardo", color: "blue", weapon: "katana"};
donatello = {name: "Donatello", color: "purple", weapon: "bo"};
raphael = {name: "Raphael", color: "red", weapon: "sai"};
michelangelo = {name: "Michelangelo", color: "blue", weapon: "nunchaku"};
turtles = [leonardo, donatello, raphael, michelangelo];

weapons = turtles.map(function(turtle){
	return turtle.weapon;
}).sort();

firstPart = function(array){
	return array.slice(0, -1).join(", ");
};

secondPart = function(array){
	return array.pop();
};

// not elegant but works
result = firstPart(weapons) + ", and " + secondPart(weapons);

/*let names, namesWithO;
names = turtles.map(function(turtle){
  return turtle.name;
}).sort();
namesWithO = names.filter(function(name){
	return name.includes("o");
}).join(", ");*/
$("#response").html(result);
$("#cat_para").addClass( "cats" );

/*lastThing = function(array){
	var lastItem = arrayOfStrings[arrayOfStrings.length-1];
	$("#response").html("The last thing on your list is " +  lastItem + ".");
};

lastThing();*/

/*let userInput;
userInput = prompt("Guess a number, you cheeky monkey!", "Type your answer here.");
 	for (let i = 1; i <= userInput; i = i + 1 ) {
// 		$("#response").append("<br />" + i);
		if (i % 2 === 0) {
 			$("#response").append(i + "<span> is even.</span><br />");
 		} else {
 			$("#response").append(i + "<span> FUCK! </span><br />");
 		}
 	}*/

// this does not work and I am sure it is some dumb math error
/*let tipCalculator;
tipCalculator = function(total, tipRate){
  // step 1:
let tipAmount;
if (tipRate % 1 !== 0) {
  	tipAmount = tipRate/100 * total;
  	$("#response").html("Your tip is $" + tipAmount);
  } else {
  	tipAmount = tipRate * total;
  	$("#response").html("Your tip is $" + tipAmount);
  }
  // and step 2:
//  $("#response").html("Your tip is $" + tipAmount);
}; 

// Now call (or “execute”) the function, passing a 
// total of $50.00 and a tipRate of 20%:

tipCalculator(50.00, 0.2);*/