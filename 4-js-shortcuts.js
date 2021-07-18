const money = 389;
const active = true;
let food; 
if (money > 300) {
    food = 'kachchi';
} else {
    food = 'kauya biriyani';
}
// ternary
// condition ? true value : false value
let food2 = money > 300 ? 'kachchi' : 'kauya biriyani';
let cssClass;
if (active === true) {
    cssClass = 'active';
} 
else{
    cssClass = 'inactive';
}
const cssClass2 = active ? 'active' : 'inactive';
// function call shortcut alternative
// active ? displayUser() : hideUser()

// 
// active ? displayUser(); // cant use like that 
// instead use in this way 

// 
const x = active && 5; 
const y = active || 5;
console.log(x);

//string to number convert 
const number = +'45';
console.log(number);

// number to string 
const numText = 43 + '';
console.log(numText);

// default parameter 
function add(num1, num2 = 4){  // can set default value 
    // num2 = num2 || 5; can set default value // nagetive value means false
    return num1 + num2;
}
add(45) 



