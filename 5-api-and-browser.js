//JSON 
const person = {
    name:'riyan',
    age: 34
};
// console.log(JSON.stringify(person));
// JSON convert back and forth
const data = JSON.stringify(person);
const dataParsed = JSON.parse(data);
// console.log(dataParsed.name)

// api 
// fetch('url')
// .then (res => res.json())
// .then(data => console.log(data));


// local storage 
localStorage.setItem('userId', 4431);
const userId = localStorage.getItem('userId');
// console.log(userId);

localStorage.setItem('person', JSON.stringify(person));
const storedPerson = localStorage.getItem('person');
const parsedPerson = JSON.parse(storedPerson);
console.log(storedPerson.age);

const keys = Object.keys(parsedPerson);
console.log(keys);

const values = Object.values(parsedPerson);
console.log(values);
