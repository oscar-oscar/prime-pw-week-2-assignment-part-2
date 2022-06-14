// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// created a string variable and set it to Dane
// We check to see if 'Dane' is exactly equal to Mary
// the === operator doesn't return true because Dane is an exact equal to Mary
// the Hi Mary console.log is skipped and we instead console.log the else statement "How do you do"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// A declaration of a variable named secret is created but no value is assigned
// A declaration of a variable named code is created witth assigned value of 123.
// we check to see if variable code is an exact equal to 123 and it is
// because 'code' is a true exact equal in the next line, the value of secret has changed and assigned to 'super' 
// because of the true statements before, 'code' now equals itself multiplied by 2 and now has a value of 246
// next we check to see if code's value of 246 is greater than 250 and it isn't
// the console.log(secret) value is 'super'

//CODE
/*
let secret;



let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// created variable named isStudent with the boolean value true
// created number variable with value of 34
// created number variable with assigened value 55407
// we check to see if variable isStudent is an exact true equal and their zip is greater than 80000. This if statement returns false and cant console.log that the student is on the West Coast.
// we moved down and check the else-if to see if isStudent (true) is equal to false or the student is under 30 years old. False || true is true so since part of the statement is true we can then console.log 'What are your hobbies'
// The browser stops there unless the variable values are changed and remain true
//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX  if statement to console.log 'they are puruple" We need colorOne and colorTwo to make mix=true.
// see lines 147-152 now the if statement makes colorOne and colorTwo exact equals
// an else is added to to prove false if colorOne doesn't equal colorTwo

if colorOne === colorTwo){
   console.log 'they are purple';
}
else{
  console.log('neither is purple');
}
   
if (mix === true) {
  colorOne = 'purple'; 
} 
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

