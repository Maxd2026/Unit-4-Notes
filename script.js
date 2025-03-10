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
