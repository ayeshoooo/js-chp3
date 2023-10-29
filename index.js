//chapter 03  assigment 

//ex 3.1

// const arr1=["Milk," ,"Bread,","Apples"]

// console.log(arr1.length)

// arr1['Bread'] = 'Bananas'
// console.log(arr1);

//ex 3.2

// const shoppingList =[ ]
// shoppingList.push("Milk", "Bread", "Apples");
// shoppingList ['Bread']=['Bananas','Eggs']
// shoppingList.pop()
//  console.log(shoppingList)
// shoppingList.sort()
// shoppingList.indexOf("Milk");
// console.log("The index of 'Milk' is: " + indexOfMilk);
// console.log(shoppingList)
// shoppingList.push("Bananas", "Carrots","Lettuce");

// var newItem = ["Juice", "Pop"];
// shoppingList = shoppingList.concat(newItem, newItem);
// var lastIndexPop = shoppingList.lastIndexOf("Pop");
// console.log("The last index of 'Pop' is: " + lastIndexPop);
// console.log("Final Shopping List:", shoppingList);


//Ex 3.3

// Step 1: Create an array containing three values: 1, 2, and 3.
// const originalArray = [1, 2, 3];

// // Step 2: Nest the original array into a new array three times.
// const nestedArrays = [originalArray, originalArray, originalArray];

// // Step 3: Output the value 2 from one of the arrays into the console.
// console.log(nestedArrays[1][1]); // This will output 2.


//Ex 3.4



// 
// var myCar = {
//   make: 'Honda',
//   model: 'Civic',
//   year: 2022,
//   color: 'Blue',
//   forSale: true
// };
// var propertyName = 'color';
// myCar[propertyName] = 'Red';
// propertyName = 'forSale';
// myCar[propertyName] = false;

// console.log('Make: ' + myCar.make);
// console.log('Model: ' + myCar.model);

// console.log('Is the car for sale? ' + myCar.forSale);


//Ex 3.5


const people ={
  friends:[]

}
var friend1 = {
  firstName: "John",
  lastName: "Doe",
  id: 1
};

var friend2 = {
  firstName: "Jane",
  lastName: "Smith",
  id: 2
};

var friend3 = {
  firstName: "Bob",
  lastName: "Johnson",
  id: 3
};
people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);

console.log(people);


