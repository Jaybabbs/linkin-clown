
// let
// const
// var

const randomNumber = document.getElementById('hello')
let div = document.getElementById('mydiv')
// console.log(div);
// innerHTML
// innerText
// textContent
let parag = document.createElement('p')
parag.textContent = 'I am a javascript developer'
const img = document.createElement('img')
img.src = 'bg.png'
img.width = 200
img.height = 200
console.log(img)
randomNumber.innerHTML = 'Hello Javascript'
console.log(randomNumber);
parag.style.color = 'red'
document.body.prepend(parag)
div.append(img)



let text = 'My name is Asabenah YetaYeh. I live in Findland Helsinki.'

console.log(text)
test = text.toUpperCase()

console.log(text);

let string = 'JavaScript'

let hisName = text.substr(48, 8)
console.log(hisName);

let country = 'Finland'


let string1 = '   30 Days Of JavaScript   '

console.log(string1)
console.log(string1.trim(' '))

let firstName = ' Asabeneh '

console.log(firstName)
console.log(firstName.trim())


let sentence9 = 'Javascript is not nice'

sentence9 = sentence9.replace('not', '')

console.log(sentence9);

// day four conditional... 

let num = 3
if (num > 0) {
    console.log(`${num} is a positive number`)
}
//  3 is a positive number
let key = true
switch (key) {
    case '':
        console.log('it is sunny')

        break;
    case 'rainy':

        break;
    case 'cloudy':

        break;

    default:
        break;
}

window.alert('heyy class')
let input = Number(prompt('Guess a number'))
let randomNumber1 = Math.floor(Math.random() * 10)
console.log(randomNumber1);
function guessNum(params) {
    if (input == randomNumber1) {
        console.log('yes');

    }
    else {
        console.log('try agains');
        alert(`The actual number is : ${randomNumber1}`);

    }
}
guessNum()

let greeting = " Hello, World";
function displaygreeting() {
    console.log(greeting);
    prompt(greeting)

}
displaygreeting();

let tunde = "Jaybabbs";
function displaytunde() {
    console.log(tunde);
    alert(tunde)

}
displaytunde();

let lenght = "5";
let width = "3";
let area = 'lenght*width';
console.log("the area of rectangule is :" + area);

function check() {
    let inputgrade = document.getElementById('inputgrade')
    
    if (inputgrade.value >100 ){
        alert(`your grade cannot ${inputgrade.value}`)
    }
    
    else if (inputgrade.value >= 80) {
        alert('your grade is A')

    }
    else if (inputgrade.value >= 70) {
        alert('your grade is B')
    }
    else if (inputgrade.value >= 60) {
        alert('your grade is C')
}
else if (inputgrade.value >= 50) {
    alert('your grade is D')
}
else if (inputgrade.value >= 40) {
    alert('your grade is E')
}
else { 
    alert('your grade is F')
}

}

// syntax
// This the most recommended way to create an empty list
const arr = [5,5,6,9,4,6]
console.log(arr)


const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers.length)
console.log('Number of numbers:', numbers.lenght)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

const arr1 = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr1)

const bless = [
    'omoluabi', 
    550,
    true,
     {food: 'bread', church: 'redemm'},
     {skill: ['html', 'css', 'javascript', ]   } 

]
console.log(bless)


let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]