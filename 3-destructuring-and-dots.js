// array destructuring 
const numbers = [45, 78, 89, 90, 76];
const x = numbers[0];
const y = numbers[1];

const [x,y] = [54,89];

const [x,y] = numbers;

function boxify(num1){
    return [num1, num1 + 5];
}
const boxed = boxify(8);
console.log(boxed);
const [box1, box2] = boxify(9);
console.log(box1,box2);

// object destructuring
const {name, age} = {id: 3, money: 45, name:'rahi', age: 21};
console.log(name, age);
console.log(id);

const person =  {id: 3, money: 45, name:'rahi', age: 21};
const {money} = person;
console.log(money);

// create object shortcut 
const one = 89;
const two = 90;
const obj = {x: one, y: two};
const obj2 = {one, two};

//new array using three dots 
numbers.push(43); // to add an element to existing array 
const newNumbers = [ ...numbers, 43]; // import existing array and set to a new array with existing element 




