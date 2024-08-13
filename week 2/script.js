function replaceWords() {
    const inputText = document.getElementById('textInput').value;
    const forbiddenWords = ['fuck', 'foolish', 'shit', 'bushit'];
    let outputText = inputText;

    forbiddenWords.forEach(word => {
        console.log(word);
        const regex = new RegExp(word, 'gi');
        outputText = outputText.replace(regex, '---');
    });

    document.getElementById('output').innerText = outputText;
}

let val = 2
val += 2

let month = prompt('Enter the name of the Month', 'month here')
let monthEnter = month.toLowerCase()
if (monthEnter == 'september' || monthEnter == 'april' || monthEnter == 'june' || monthEnter == 'november') { 
    
    alert(`There are 30 days in ${month}`)

} else if (monthEnter == 'febuary') {
    alert(`there are 28 or 29 days in ${month}`)

}
else if (monthEnter == 'january' || monthEnter == 'match' || monthEnter  == 'may' || monthEnter == 'july' || monthEnter == 'august' || monthEnter == 'octomber' || monthEnter == 'november') {
    alert(`there are 31 days in ${month}`)

}
else if (monthEnter.trim ==''  ) {
    alert(`you dont enter any month`)

}
else {
    alert(`${month} is not a month` )
}


function replaceWords1() {

let month1 = document.getElementById('input-month').value;
let monthEnter1 = month1.toLowerCase()

if (monthEnter1 == 'september' || monthEnter1 == 'april' || monthEnter1 == 'june' || monthEnter1 == 'november') { 
    output1 = (`There are 30 days in ${month1}`)
    alert(`There are 30 days in ${month1}`)
    
} else if (monthEnter1 == 'febuary') {
    output1 = (`there are 28 or 29 days in ${month1}`)
    alert(`there are 28 or 29 days in ${month1}`)

}
else if (monthEnter1 == 'january' || monthEnter1 == 'match' || monthEnter1  == 'may' || monthEnter1 == 'july' || monthEnter1 == 'august' || monthEnter1 == 'octomber' || monthEnter1 == 'november') {
    output1 = (`there are 31 days in ${month1}`)
    alert(`there are 31 days in ${month1}`)

}
else if (monthEnter1.trim ==''  ) {
    output1 = alert(`you dont enter any month`)
    alert(`you dont enter any month`)

}
else {
    output1 = alert(`you dont enter any month`)
    alert(`${month1} is not a month` )
}
document.getElementById('output-month').innerText = output1;
}