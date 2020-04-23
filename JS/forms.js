let uname = document.querySelector('#username');
let email = document.querySelector('#email');
let cardType = document.querySelectorAll("input[name='cardtype']");

let bSubmit = document.querySelector('#bSubmit');

function getValue(field) {
    console.log(field.value);
    console.log(field.value.length);
    console.log(field.name);
    console.log(field.type);
}

bSubmit.addEventListener('click', function (evt) {
    evt.preventDefault();
    getValue(uname);
})

// Selecting groups 
// change event: only works on form fields!

console.log(cardType);
function isChecked() {
    for (let i = 0; i < cardType.length; i++) {
        if (cardType[i].checked) {
            console.log(cardType[i].value);
        }
    }
}

for (let i = 0; i < cardType.length; i++) {
    cardType[i].addEventListener('change', isChecked);
}


// Access select, held as an array (drop down)
// 0 index collection
// "selectIndex" property - reflects user choice
function selectFunction() {
    let selected = document.querySelector("#title").selectedIndex;
    let option = document.querySelectorAll('option');
    console.log(option[selected].value);
}

bSubmit.addEventListener('click', selectFunction);