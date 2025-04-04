/* This is a MULTI-LINE comment 
The code below is an example STATEMNT 
(instruction/command)
console.log is a FUNCTION that displays info in the console (output) area
STATEMENTS end with a SEMICOLON (;)
*/
console.log("Today is Monday");

// This is a SINGLE-LINE comment

// DECLARE a new VARIABLE
let pokemon;

// ASSIGN a VALUE to the variable
// its like putting an iten in the box
pokemon = "Pikachu";

// DECLARE + ASSIGN in one statement
let luckyNumber = 8;

// "PASS IN" a variable to a FUNCTION
console.log(luckyNumber);


// CHANGE the value of an existing variable
let raining = false;
console.log(raining);
raining = true;
console.log(raining);

// COPY data from one variable into another
let breakfast = "eggs";
let lunch; 
lunch = breakfast;
//Both variables hold the same value
console.log(lunch);
console.log(breakfast);
// Above statements log the VALUES stored in variables
//Below statement logs a literal String
console.log("lunch");

// MATH OPERATORS
let score = 0;
score = score + 5;
console.log(score);
score = score - 10;
console.log(score);
score = score * (-3);
console.log(score);
score = score / 5;
console.log(score);

// Can combine operators, evaluation follows PEMDAS
score = (score * 3 / 7 - 4 + (-6)) ** 2 ;
console.log(score);

// STRING CONCATENATION (merging with the PLUS SIGN)
// String LITERALS are indicated with "QUOTES"
let greeting = "Hello " + "Friend" ;
console.log(greeting) ;

// Can combine String Literals with VARIABLES
let username = "MAX_D";
console.log("Welcome, " + username);
console.log("Welcome,  \n " + username + "1");

// Numbers get converted to Strings if combined
console.log( 4 + 5 ); // 9 (did addition)
console.log( "4" + 5) // 45 (concatenate, not math)
console.log( 4 + '5'); // same as above

// SHORTCUT OPERATORS (Increment/Decrement)
let counter = 0;
counter = counter + 1; // LONG WAY
counter++; // SHORTCUT
console.log("Count is " + counter);
counter--;
console.log("Count is " + counter);

/* FUNCTIONS:
    Reusable sets of code statements that perform a specific task or process
*/

// console.log is a FUNCTION that we've used
// TASK: display data in the console
console.log("I just used a function!");

// DECLARE (create) your own function
function skincare() {
    // STATEMENTS (actions) to execute for this routine
    console.log("1. Cleanse");
    console.log("2. Apply toner");
    console.log("3. Moisturize");
}
// CALL the function to use it!
skincare();
skincare(); // can run the function again

// Functions are like RECIPES:
// - PARAMETERS are like ingredients
// - RETURN values are like a completed meal

// Example below is a recipe for creating a sandwich
// Need some filling, bread, and sauce to do it!
function makeSandwich(filling, bread, sauce) {
    let sandwich = filling + " sandwich on " + bread + " with " + sauce;
    return sandwich; // OUTPUT!!!
}
// Use the general recipe with specific ingredients
// Store the resulting sandwich in a variable
let grilledCheese = makeSandwich("cheese", "toast", "butter");
console.log(grilledCheese);
let caprese = makeSandwich("tomato mozz", "ciabatta", "pesto");
console.log(caprese);

// *** Selection (CONDITIONALS) ***
// A conditional expression is like a QUESTION
// that has a boolean (true/false) ANSWER

console.log("Conditionals:");
console.log( 4 > 5); // 4 > 5 evaluates to FALSE
console.log("Is 10 less than 2?");
console.log( 10 < 2);
console.log( 2 == 2);
console.log( 3 != 2);
console.log( 3 != 3);

// Strings can also be compared by dictionary order
// Each letter/character has a numerical value ( A is 1, B is 2...)
console.log( "Kyanni" >= "Ayesha"); // true
console.log( "Z" < "A"); // false
console.log( "Katerina" == "Katherine");

// Can use comparison operators between VARIABLES and VALUES
let myNickname = "Max";
console.log( myNickname == "Max");

// Use CONDITIONS in IF STATEMENTS to make
// DECISIONS about which code to execute
let age = 20;
// is the value of the age variable 16?
if (age == 16) {
    // statement below only runs if true
    console.log("Happy sweet sixteen!");
}
else {
    // runs only if the IF BLOCK above was false
    console.log("You can't have a sweet sixteen party!"); 
}

// ELSE IF blocks allow us to test multiple options
if (age == 18) {
    console.log("Congrats on being an adult!");
}
else if (age > 18) {
    console.log("Go vote!");
}
else {
    console.log("You can't vote yet");
}