//
// B STRINGS
let firstVariable = 'hello world'
firstVariable = 4
let secondVariable = firstVariable
secondVariable = 'hello universe'
secondVariable = firstVariable
console.log(firstVariable)
//value of firtsVariable is 4
let yourName = 'Tiaja'
let answer = `hello my name is ${yourName}`
console.log(answer)

// C BOOLEANS
console.log(a < b)
console.log(c > d)
console.log('name' === 'name')
console.log(true || false)
console.log(false === false)
console.log(e === 'kevin')
console.log(a + b === c)
console.log(a * a === d )
console.log(48 == '48')


// D THE FARM (need help on this)
let animal = 'cow'
if (animal === 'cow'){
    console.log('mooooooo')
} else{
    console.log('hey your not a cow!')
}

// E DRIVER'S ED
let personsAge = 19
if (personsAge >= 16){
    console.log('here are the keys!')
}else{
    console.log('sorry you are too young')
}

// FOR LOOPS
for(let i=0;i<=10;1++){
    console.log(i)
}
// GET EVEN
for(let i=2;i<=100;i+=2)
console.log(i + '<-- is an even number')

// GIVE ME FIVE
for(let i = 0; 1<= 100; i++){
    if(1 % 5 === 0){
        console.log(`i found a number ${i} high five`)
    }else{
        console.log(i)
    }
}

// SAVINGS ACCOUNT
let arr=[1,2,3,4,5,6,7,8,9,10]
let totalval = 0
arr.forEach((num,i)=>{
    totalval += num
})
console.log(totalval)
let bankAc = 0
for(let i=0; i<=100; i++){
    bankAc += i
}
console.log(bankAc*2)

//  ARRAY CONTROL FLOW
let quotes





// A TALK ABOUT IT
    //1. elements
    //2. no
    //3. different students in a classroom

// B EASY DOES IT
let quotes = ['beauty is whatever gives joy','follow your wishing heart','dont be willing to accept an ordinary life']
console.log(quotes)

// C ACCESSING ELEMENTS  (COME BACK TO THIS)
const randomThings = [1, 10, 'hello',true]
console.log(randomThings[0])
randomThings [2] = 'world'
// console.log(randomThings)

//D CHANGE VALUES
const ourClass = ['salty','zoom','sardine','slack','github']
console.log(ourClass[2])
ourClass[4] = 'octocat'
console.log(ourClass)
ourClass.push('cloud city')

//E MIX IT UP
const myArray = [5,10,500,20]
myArray.push('aegon')

myArray.shift()
myArray.unshift('bob marley')

// F BIGGIE SMALLS
let brooklyn = 100
if (brooklyn < 100){
    console.log('little number')
}else{
    console.log('big number')
}

// G MONKEY IN THE MIDDLE
if(varible < 5){
    console.log('little number')
}if(varible >= 10){
    console.log('big numbeer')
}else{
    console.log('monkey')
}

// H WHATS IN YOUR CLOSET

// console.log(`kristyn is rocking that ${kristyncloset[2]} today`)
//kristynclostet.splice(6,0,"raybans")

