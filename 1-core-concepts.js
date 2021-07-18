// variable: let, const 
let money = 20;
money = 12;
const name = 'john';
let isConfident = false;

// to set dynamic value use templete string ``
const person = {
    name:'john',
    age: 55,
    city: 'dhaka'
}

const statement = `this person ${name} with age ${person.age}`;

// condition 
if (money > 20 && age >= 45) {
    
} else {
    
}

// array 
const numbers = [34, 23, 16];
const respected = ['motiur', 'jahangir'];
const products = [ {name:'laptop', price: 500}, {name: 'mobile', price: 300}, {name: 'car', price:'600'}]

// loop: for loop 
for (let i = 0; i < array.length; i++) {
    const number = numbers[i];
    
}

// function regular arrow 
function add (num1, num2){
    return num1 + num2; 
}
const result = add (34, 65);

// arrow 
const fiveTimes = num => num * 5;
const add2 = (num1, num2) => num1 + num2;
const doMath = (x,y) => {
    const sum = x + y;
    return sum * 2;
}