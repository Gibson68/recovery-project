/*var x = 12;
var y = 8;
var z = 16;

var name, state, age, hairColor, isBlack;
var friends, married;

myName = "Gibson Onuoha";
state = "Imo";
age = 16;
hairColor = "black";
isBlack = true;
friends = ["Joe", "Marie", "Usman"];
married = null;

console.log(myName);
console.log(typeof(x));
console.log(typeof(myName));
console.log(typeof(hairColor));
console.log(typeof(isBlack));
console.log(typeof(friends));
console.log(typeof(married));*/

/*  var x = 12;
var y = 4;

// Addition

var sum = x + y;
console.log(sum);

// Subtraction 

var minus = x - y;
console.log(minus);

// Multiply 

var product = x * y;
console.log(product);

// Division 

var divide = x / y;
console.log(divide);

// Exponents 

console.log(6 ** 3);

// Modulus 

var remainder = x % y;
console.log(remainder);

console.log("hello im Gibson i am " + sum + "years old");*/

/*var boys, girls;
var mathStudents, englishStudents;

boys = 140;
girls = 220;

var studentTotal = 140 + 220;
console.log(studentTotal)

mathStudents = 160;
var englishStudents = studentTotal - mathStudents;
console.log(englishStudents)

console.log("the total sum of students are " + studentTotal + " in total")
console.log("there are " + englishStudents + " english students in total")
console.log(typeof(studentTotal));*/

/*var deposit = 0;            
var welcomeMessage = confirm("Welcome to Tella app \n do you wish to proceed");
var yourName = prompt("Please enter your name");
var accountNo = prompt("Enter your account number");
var balance = parseInt(prompt("How much would you like to deposit"));
var accBalance = deposit + balance;
//console.log(parseInt(balance));


var accStatus = confirm( "you have successfully deposited " + accBalance + " dollars your account balance is " + accBalance + " dollars thank you for your patronage");
console.log( "you have successfully deposited " + accBalance + " dollars your account balance is " + accBalance + " dollars thank you for your patronage");*/

/*var text = "Ther quick brown fox jumped the lazy dog what a lazy dog";

// To get the length of a string we use *.length - property

var textLength = text.length;
console.log(textLength);

// To change text casing to lowercase we *.toUpperCase() - method

var textUpperCase = text.toUpperCase();
console.log(textUpperCase);

// To change text casing to lower case we *.toLowerCase() - method

console.log(text.toLowerCase());

// To replace a value within a string with a different value we use *.replace() - method

console.log(text.replace("fox", "lion"));

//To replace all occurences of a value within a string with a different value we use *.replaceAll() - Method

var newText = text.replaceAll("dog", "cat");
console.log(newText);


var text = "Mainz 05 Football Club";
console.log(parseInt(text.substring(6, 8)) + 15);

// Extract apple is a fruit from the following string "The recipe requires Apple" and log athe sentence "
//Apple is a fruit

var sentence = "The recipe requires Apple";
var apple = sentence.substring(20, 25);

console.log(apple + " is a \nfruit"); // \n indicates a new line
console.log(apple + " is a \tfruit"); // \t indicates a tab*/

/*var friends = ["Amira", "Royal", "Joseph", "Orton", "James"];

var amira = friends[0];
var james = friends[4];

console.log(amira, james);

// Asign items to an empty array
const fruits = []
console.log(fruits);

fruits[0] = 'Mango';
fruits[1] = 'Orange';
fruits[7] = 'Banana';

console.log(fruits[7]);

const someThings = ['John Smith', 16, ['Marie', 'Simon', 'Ayuba']];
console.log(someThings[0]);
console.log(someThings[1]);
// Accessing items in a multi dimensional array
console.log(someThings[2][1]);

//Create a multi dimensional array that is 3 levels deep

const subjects = ['Maths','English','Economics', ['Civic', 'F-maths', 'Literature', ['Accounting', 'General-K', 'web-dev']]];

console.log(subjects[3][3][2]);

const pLanguages = ['JavaScript', 'Python'];

// To check the length of items in a array use *.length
console.log(pLanguages.length);

// To remove the last item in an array use *.pop() - method

pLanguages.pop();
console.log(pLanguages);

// To remove items from the begining of an array use *.shift() - method
const js = pLanguages.shift();
console.log(pLanguages);
console.log(js);

// To inserts new elements at the start of an array, and returns the new length of array use *.unshift - method
/*pLanguages.unshift('R')

console.log(pLanguages.includes('R'))

const text = "How are you today, hope you're doing okay";
console.log(text.split('a'))

const input = prompt('enter your comma named friends')

var myFriends = console.log(input);
var table = myFriends.split()
console.log(table);*/

/*var platforms = ['youtube', 'twitter', 'facebook', 'instagram', 'tiktok'];
var newPlatforms = [];

var platformA = platforms[0];

var platformA = platformA.toUpperCase();
console.log(platformA);

var platformB = platforms[1];

var platformB = platformB.toUpperCase();
console.log(platformB);

var platformC = platforms[2];

var platformC = platformC.toUpperCase();
console.log(platformC);

var platformD = platforms[3];

var platformD = platformD.toUpperCase();
console.log(platformD);

var platformE = platforms[4];

var platformE = platformE.toUpperCase();
console.log(platformE);

platforms[0] = platformA;
platforms[1] = platformB;
platforms[2] = platformC;
platforms[3] = platformD;
platforms[4] = platformE;

console.log(platforms);


var platforms = platforms.toString();
console.log(platforms);

var newPlatforms = platforms;

console.log(newPlatforms);

 var newPlatforms = newPlatforms.split(',');

 console.log(newPlatforms);*/

 /*for(var i = 1; i < 201; i++) {
    console.log(i)
 }*/

 /*for(var i = 0; i < 10; i++) {
   console.log(i);
 }

 console.log("hello");*/

 /*for (var j = 5;  j <= 25; j++) {
   console.log(j);
 } */
 

 /*var ceos = ['susan wojcicki', 'elon musk','mark zuckerberg','mark zuckerberg','shou zi chew','parel dorov','tim vanderhook','matt mullenwegg',]
 var platforms = ['youtube', 'twitter', 'facebook', 'instagram', 'tiktok', 'telegram', 'mySpace', 'tumblr']

 for (var i = 0; i < platforms.length; i++) {
   console.log( 'The CEO of ' + platforms[i] + ' is ' + ceos[i]);*/

   /*var welcomeDetails = confirm('Welcome to the future of Banking\n Do you wish to proceed?');
   var customerName = prompt('Please enter your name');
   var phoneNum = prompt('Enter your phone number');
   var accNo = prompt('Enter your account number');
  
  var balance = 0;
   var customerMessage = confirm('Dear ' + customerName + '\n Thank you for trusting us now you can make a deposit.');
   var amountNo = (parseInt(prompt('how much would you like to deposit')));
   var tAmt = balance + amountNo;
   var money = confirm('Dear ' + customerName + '\n your balance is\n Balance: ' + tAmt)

   var balance = tAmt


   console.log(amountNo);
   console.log(typeof(amountNo));

   var urgent = confirm('would you like to make another transaction');
   var amountNo = (parseInt(prompt('how much would you like to deposit')));

   var money = balance + amountNo;
   var money = confirm('Dear ' + customerName + '\n your balance is\n Balance: ' + money)*/



   // Problem

   /*var numbers = [2, 4, 7, 19, 6, 32, 50]
   var new_numbers = []

   //task
   // Multiply the each value in nuumbers array by 10 and move the multiplied values to the new_numbers array

   for (var i = 0; i < numbers.length; i++) {
      new_numbers.push(numbers[i] * 10);
   }

   console.log(new_numbers);

  numbers.push(new_numbers);

  console.log(numbers);*/

 /* var array = ["Enter your name", "What is your age", "Enter your state of origin", "Enter your marital status"]

  replies = []

  for (var i = 0; i < array.length; i++) {
    replies.push(prompt(array[i]));
  }

  console.log(`My name is ${replies[0]} I am ${parseInt(replies[1])} years old. i am from ${replies[2]},
   and i am ${replies[3]}`);*/

   /*var a = 10;
   var b = '10';

   if (a == b) {
    console.log('True');
   }*/

   /*var user1 = ['obiofficial', 'pass123'] // Database

   var username = prompt('Enter your username')
   var password = prompt('Enter your password')

   //User authentication process
  /* if (user1[0] === username) {
    if (user1[1] === password ) {
      console.log('you are logged in');
    } else {
      alert('password is incorrect')
    } 
    } else {
      alert('the username is incorrect.')
   }*/

   // Using Conditionals write a program that sorts the content of the variable random into the appropriate variable type

  /* var random = ['set','list',1,'15',12,13,15,'up'];
   var strings = [];
   var numbers = [];

  for (var i = 0; i < random.length; i++) {
    if (typeof(random[i]) === 'number') {
      strings.push(random[i])
    } else {
      numbers.push(random[i])
    }
  }

   console.log(strings);
   console.log(numbers);*/

   /* var userProfile = ['onuohagibson@gmail.com', 'Nagato']

   var email = prompt('Enter your email address')
   var password = prompt('Enter your password')

   // Authentication process
   if ( userProfile[0] == email) {
     if(userProfile[1] == password) {
      console.log('you are now logged in');
     } else {
      console.log('incorrect password');
     }
   } else {
    console.log('incorrect password and email');
   }*/

   // write a program that logs a user into an app depending on their age
   
   // If the user's age is 18 or above log him/her into the app with a welcome message
   // If the user's age is less than 18 then, display a message explaining why they can't log in.

   //var appQuestions = ['how old are you?', 'Welcome to Gibsonbet \n taking betting to the next level']
   

 //var age = prompt('Enter your age?')
 
 /*if(age < 18) {
  console.log('youre not allowed to use this program')
 } else {
  console.log('welcome to this platform')
 }*/

 // write a javascript for loop tht will iterate from 0 - 15. for each iteration it will check if the
 // current number is odd or even and display the message in the screen 

 /*


for (var i = 0; i <= 15; i++) {
   if ()
}*/

/*var x = true

while (x) {
  var value = prompt('Hit the enter key or type false to end the prog.')
  if (value == 'false') {
    x = false;
  }
}*/

/*do {
  console.log('hello');
} while (x == false);*/

//var running = true;
//var accNum = 298287495;
//var balance = 0;

/*while(running) {
  var name = prompt('welcome to tella app. \nEnter your full name to create an account');
  var amount = prompt('Enter your initial deposit: ');

  balance += parseInt(amount)
  alert('your acc number is: ' + accNum)
  alert(balance);

  var cont = prompt('Do you want to perform another transaction? Yes or No').toLowerCase();

  if (cont == 'yes') {
    var type = prompt('choose an option\n1. Deposit\n2.Withdrawal')
  } else {
    running = false
  }
}*/

// if the number is both divisible by both 3 and 5 write fizzbuzz oo


// Solution

/*for (var i = 1; i <= 100; i++ ) {
  if(i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');

  } else if (i % 3 == 0) {
    console.log('Fizz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  }
  else {
    console.log(i);
  }
}

var running = true;
var balance = 0;
var accNo = 234456959;

while (running) {
var entryMessage = prompt('Welcome to Gibsonpay \nWould you like to proceed? \n Yes or No').toLowerCase()
if (entryMessage = 'yes') {

} else {
  running = false;
}
}*/

// Pizzaria 

// welcome users to the app
//  display the menu
// large - $18
// medium - $12
// small - $10
// Ask of the quantity they want
// After the user chooses their preffered pizza size ,ask them if they want add toppings depending on their
//answer;

// Toppings pricing:
// Peperoni - $5
// Bacon - $3
// Extra - cheese - $2

// if the pizza size is large, all toppings are $2
// log the total bill 
// check the user out and ask the user if they want to order another pizza

// var ordering = true;

// while(ordering) {
//   var totalPrice = 0;
//   var choice = parseInt(prompt('Welcome to pizzaria\n1. large at $18\n2.Medium at $12\n3.Small at $10'));
//   var qty = parseInt(prompt('How many would you like to order?'));
//   var toppings = parseInt(prompt('Toppings\n1.  Peperoni - $5\n2. Bacon - $3\n3. Extra - cheese - $2'));
  
  
//   if (toppings == 1) {
//     toppings = 5;
//   } else if (toppings == 2) {
//     toppings = 3;
//   } else if (toppings == 3){
//     toppings = 2;
//   } else {

//   }

//   if (choice == 1) {
  
//     totalPrice = (18 * qty) + (2 * qty); 
//   } else if (choice == 2 ) {
//     totalPrice = (12 * qty) + (toppings * qty); 
//   } else if (choice == 3 ) {
//     totalPrice = (10 * qty) + (toppings * qty); 
//   } else {
//     alert('Youve inputted an invalid option\nPlease pick a number from the table');
//   }
  
//   confirm('Your total bill is :\n $' + totalPrice)
  
//   var orderAgain   = parseInt(prompt('Do you wish to order again\n 1. yes \n 2. no'))
//   if (orderAgain == 2) {
//     ordering = false;
//    } 
// }

// Creating a bank app for ma homies 
// ask to create new acc 
// ask to input email address and choose a password
// generate a random acc no
// create a home for explicit activities.

//  Workings

// var apprun = true;
// var accNo = 8789286580;
// var userdata = [];
// var balance = 1000;

// while(apprun) {
// var welcomeMessage = parseInt(prompt('Welcome to Gibsonpay\n Create an account\n1. yes\n2. no'));
// if (welcomeMessage == 1) {

// // Declaring the data
// var data_1 = prompt('Enter your first name');
// var data_2 = prompt('Enter your Email address.');
// var data_3 = prompt('Enter a password')

// // Pushing the data
// userdata.push(data_1, data_2, data_3);

// alert(`Dear ${data_1} your account number is:\n ${accNo}`)


//   var functions = parseInt(prompt('Welcome ' + data_1 + '\nHow may we help you?\n1.Deposit\n2.Withdraw'));   


//   var running = true;
//   while(running) {
// if (functions == 1) {
//   var security = prompt('Enter your password');

//   if (data_3 == security) {


//      balance = parseInt(prompt('How much would you like to deposit?'));
//      alert('you have successfully deposited\n $' + balance)
//      var option = prompt('would you like to transact again?\n yes or no').toLowerCase()
//      if(option == 'yes') {
      
//      } else {
//       running = false;
//     }
    
//   } else {
//     prompt('password is incorrect enter correct password')
//     running = true;
//   }

// } else if (functions == 2) {
//    var withdrawal = parseInt(prompt('How much would you like to withdraw?'));
//    var security = prompt('Enter your password');
//    if (data_3 == security) {
//    if (balance < withdrawal) {
//     alert(`dear ${data_1} sorry your balance is insufficient\n Balance = ${balance}`)
//    } else if (balance >= withdrawal) {
//     alert(`alert: you have been credited with heavy figures:\n $${withdrawal}\n balane :$${balance - withdrawal}`)
//    }
//   } else {
//     prompt('password is incorrect enter correct password')
   
//   }}
// }
// } else if (welcomeMessage == 2) {
//   apprun = false;
// }
// }
// console.log(userdata);

// function addNumbers () {
//   var x = 12;
//   var y = 15;
//   var sum = x + y;
//   console.log(sum);
// }

// addNumbers();

// function addNumbers(x, y) {
//   console.log(x + y);
// }


// addNumbers(50, 1003);
// addNumbers(34, 89);

// function greet(name) {
//   console.log('hello',name);
// }

// greet('great')
// greet('lovelyn')

// function addNumbers() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   console.log(total);
// }

// addNumbers(2, 3, 4, 5, 6);
// addNumbers(234, 345, 346, 436)

// function add() {
//   let total = 0;
//   for(var i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   console.log(arguments.length);
// }

// add(1, 2, 3, 4, 5, 6, 7, 8)


// function  evenNumbers(x) {
//   for(var i = 0; i <= x; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
// }

// evenNumbers(100)

//  var add = (x, y, z) => {
//   console.log(x + y - z);
//  }

//  add(2, 4, 10);

// const myButton = document.querySelector('.vava');
// const bashe = document.querySelectorAll('.menu .menu-item i');

// const heading = document.getElementsByTagName('');

// const h1 = document.getElementById('');

// const clickMe = document.getElementsByClassName('');

// console.log(myButton);


// const excl = document.querySelector('.excl')

// myButton.addEventListener('click', function() {
//   excl.style.color = 'red';
//   myButton.style.border = 'none';
//   myButton.style.color = 'white';
//   myButton.style.backgroundColor = 'green';
// })

const form = document.querySelector('.form');
var height = document.querySelector('.height');
var weight = document.querySelector('.weight');
var bmiOutput = document.querySelector('.bmi')
var remarkOutput = document.querySelector('.remark')


form.onsubmit = function (e) {
  e.preventDefault()
  console.log('submitted');
  const userHeight = height.value
  parseFloat(userHeight)

  const userWeight = weight.value
  parseFloat(userWeight)

   const result = userWeight / (userHeight**2);
   const BMI = result.toFixed(2);
 
  console.log(BMI);

  height.value = '';
  weight.value = '';

  bmiOutput.innerHTML = BMI;
  

  if (BMI < 18.5) {
    remarkOutput.innerHTML = 'Underweight';
  } else if (BMI >= 18.5 && BMI < 25) {
    remarkOutput.innerHTML = 'healthy weight';
  } else if (BMI >= 25.0 && BMI < 30) {
    remarkOutput.innerHTML = 'Overweight';
  } else {
    remarkOutput.innerHTML = 'Obesity';
  } 

}

 
  
 
