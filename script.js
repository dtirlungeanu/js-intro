// numbers
var num1 = 5;
var num2 = 4;

alert(num1+num2);

// concatinating numbers
var num1 = '5';
var num2 = '4';

alert(num1+num2);

// variables can contain: letters, numbers, underscore, dollar signs
// variables should begin with a letter

// variables are case sensitive
var test = 'this is a test';
var Test = 'this is a Test';
alert(Test)

// camel case
var myFavouriteNumber = 10;

// underscore
var my_favourite_number = 10;

// initialising with var
var myFavouriteFood;
myFavouriteFood = 'pizza';
alert(myFavouriteFood);

// arrays
var colors = ['red','blue','green'];
alert(colors);

// selecting one variable from the array
alert(colors[0]);

// another way to declare arrays
var newColors = new Array('red', 'yellow', 'orange');
alert(newColors[2]);

// adding variables to a specific array
colors[3] = 'purple';
alert(colors);

// using PUSH function
newColors.push('pink');
alert(newColors);

// using numbers in ARRAYS
var numbers = [5,6,7,8,'Nine'];
alert(numbers[0]+numbers[2]);
alert(numbers[4]);

alert(numbers.sort());

