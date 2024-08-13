
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