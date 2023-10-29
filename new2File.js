//practice 4.1


// const myVar = true;
// console.log(myVar);

// let myVariable = true;


// console.log("The value of myVariable is: " + myVariable);


// if (myVar) {
//   console.log("myVariable is true!");
// }


// if (!myVariable) {
//   console.log("myVariable is not true!");
// } else {
//   console.log("myVariable is true (using an else statement)!");
// }


// myVariable = !myVariable;


// console.log("The updated value of myVariable is: " + myVariable);

// if (myVariable) {
//   console.log("myVariable is now true!");
// }

// if (!myVariable) {
//   console.log("myVariable is now not true!");
// } else {
//   console.log("myVariable is now true (using an else statement)!");
// }

//practice 4.2


// const ageInput = prompt("Please enter your age:");
// if (userAge >= 21) {
//     message = "You are confirmed for entry to the venue and can purchase alcohol.";
// }
// else if (userAge >= 19) {
//     message = "You are confirmed for entry to the venue, but you cannot purchase alcohol.";
// }
// else {
//     message = "Sorry, you are denied entry to the venue.";
// }
// console.log(message);



//practice 4.3


// const isIDValid = true;

// const message = isIDValid ? "You are allowed into the venue." : "You are not allowed into the venue.";

// console.log(message);


//practice 4.4
// // 1. Generate a random number between 0 and 5 (6 possible results)
// const randomValue = Math.floor(Math.random() * 6);

// // 2. Get a question from the user
// const userQuestion = prompt("Ask the Magic 8-Ball a yes or no question:");

// // 3. Create 6 responses using a switch statement
// let response;
// switch (randomValue) {
//   case 0:
//     response = "It is certain.";
//     break;
//   case 1:
//     response = "Reply hazy, try again.";
//     break;
//   case 2:
//     response = "Don't count on it.";
//     break;
//   case 3:
//     response = "Outlook not so good.";
//     break;
//   case 4:
//     response = "Signs point to yes.";
//     break;
//   case 5:
//     response = "My sources say no.";
//     break;
// }

// // 4. Create a variable to hold the end response
// const finalResponse = `You asked: ${userQuestion}\nThe Magic 8-Ball says: ${response}`;

// // 5. Output the user's question and the randomly selected response to the console
// console.log(finalResponse);




//practice 4.5





// 1. Ask the user to select a number between 0 and 10
// const prizeInput = prompt("Select a number between 0 and 10 to win a prize:");

// // 2. Convert the prompt response to a number data type
// const selectedNumber = parseInt(prizeInput);

// // 3. Create a variable for the output message
// let outputMessage = "My Selection: ";

// // 4. Using a switch statement to provide different responses for prizes
// let prize;
// switch (selectedNumber) {
//   case 0:
//     prize = "a shiny trophy!";
//     break;
//   case 1:
//     prize = "a lifetime supply of chocolate!";
//     break;
//   case 2:
//     prize = "a vacation to a tropical island!";
//     break;
//   case 3:
//   case 4:
//     prize = "a cute little puppy!";
//     break;
//   case 5:
//   case 6:
//   case 7:
//     prize = "a new car!";
//     break;
//   case 8:
//   case 9:
//     prize = "a big bag of cash!";
//     break;
//   case 10:
//     prize = "a rocket to the moon!";
//     break;
//   default:
//     prize = "nothing. Better luck next time!";
//     break;
// }

// // 5. Output the message to the user by concatenating the prize and output message
// outputMessage += prize;
// console.log(outputMessage);


