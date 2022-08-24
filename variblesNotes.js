// you assign a varible with (let or const)
//let allows you to reasign varibles
//const cant be directly reasigned 

//example of let
let age = 30;
age = 31;
console.log (age)
//another example of let
let score;
score = 10
console.log (score)
 
//you have to add a value when using const
const number = 4; 
console.log(number)
 
//some data types are String, Numbers, Boolean, null, undefined
//String 
let name = 'tiaja';
//number
let cash = 4;
let rating = 4.5;
//Boolean
let isHot = true;
//Null (means empty)
let x = null;
//undefined
let y = undefined
let z;
// you can test the type of string by
    console.log(typeof name)
    console.log(typeof cash)
    console.log(typeof rating)
    //try all of them!!
//Template Strings
let name1 = 'Tiaja';
let cash1 = 4;
console.log(`My name is ${name1} and I have ${cash1} dollars.`);
//another way to do this is
const hello = `my name is ${name1} and I have ${cash} dollars.`
console.log(hello)
//string properties and methods
const s ='hello world';
//length property counts number of characters in a string
//toUpperCase makes the string upper case 
//toLowerCase makes the string lower case
//substring takes out everything not in your given start and end
// split allows you to split a string into an array
    //length
    console.log(s.length);
    //toUpperCase
    console.log(s.toUpperCase());
    //toLowerCase
    console.log(s.toLowerCase());
    //substring
    console.log(s.substring(0,5));
    //split
    let tags = 'home, help, info, contact';
    console.log(tags.split(', '));

//Arrays are variables that hold multiple values
//array
const fruits = ['apples', 'oranges','pears'];
console.log(fruits);
//you can access one thing on an array by
    console.log(fruits[1]);
//remember arrays are zero based
//you can add things in a varible by
    fruits[3] = 'grapes';
    console.log(fruits);
//another way you can add to an array is by
    fruits.push('mangos');
    console.log(fruits);
//add something to the beggining of an array by
    fruits.unshift('strawberries');
    console.log(fruits);
//take the last thing off an array by
    fruits.pop();
    console.log(fruits);
//check to see if something is an array by
    console.log(Array.isArray('hello'));
//find the index of somethins in an array by
    console.log(fruits.indexOf('pears'));

//object literals are key value pairs
let person ={
    firstName: "Aliyah",
    lastName: "Williams",
    age: 30,
    hobbies: ['music', 'science','art'],
    adress: {
        street: '50 main st',
        city: 'cambridge',
        state: 'MA'
    }
}
console.log(person);
//you can get individual info out by
console.log(person.firstName, person.lastName);
//try to only get science to print out
console.log(person.hobbies[1]);
//you can directly add properties by
person.email = 'person@gmail.com'
console.log(person);

//create an array of to do's (first try)
let toDo = ['wake up', 'brush teeth','eat'];
console.log(toDo)
//better way to creat array of to do's
let todos= [
    {
        id: 1,
        Text: 'wake up',
        isCompleted: true
    },
    {
        id: 2,
        Text: 'brush teeth',
        isCompleted: true
    },
    {
        id: 3,
        Text: 'eat',
        isCompleted: false
    },
]
console.log(todos);

//For loops
for(let i = 0; 1 < 10; 1++){
    console.log(1);
    console.log(`for loop number: ${i}`)
}

//while loops
let i = 0;
while(1 < 10){
    console.log(`while loop number: ${i}`);
    i++;
}

//looping through arrays







