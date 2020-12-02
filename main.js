// alert('Hello World');
// console.log('Hello World');
// console.error('This is an error test');
// console.warn('This is an warn test');


// var, let, const

// let score;
// score = 10

// console.log(10);


// String, Number, Boolean, null, undefined

// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof isCool);


// Concatenation
// const name = 'John';
// const age = 30;

// console.log('My name is ' + name + ' and I am ' + age);

// Template String

// console.log(`My name is ${name} and I am ${age}`);
// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello);



// const s = 'Hello World';

// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5));
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(''));

// const q = 'technology, computers, it, code';
// console.log(q.split(', '));



// Arrays -variables holding multiple values

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

// const fruits = ['apples', 'oranges', 'pears'];
// console.log(fruits);

// console.log(fruits[1]);

// // Add to the array
// fruits[3] = 'grapes';
// console.log(fruits);

// // Add to the array
// fruits.push('mangoes');
// console.log(fruits);

// // Add in front of the array

// fruits.unshift('strawberries');
// console.log(fruits);


// // To remove the last item in the array

// fruits.pop();
// console.log(fruits);

// // To check if something is in the array

// console.log(Array.isArray(fruits));

// console.log(Array.isArray('guava'));


// // To get the index of a certain value

// console.log(fruits.indexOf('oranges'));

// console.log(fruits.indexOf('guava'));
// console.log(fruits);



// Object Literals

// const person = {
//     firstName: 'John',
//     lastName: 'Danger',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main street',
//         city: 'Des Moines',
//         state: 'Iowa'
//     }
// }

// console.log(person);

// console.log(person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.state);


// const { firstName, lastName, address:{city}} = person;
// console.log(firstName);
// console.log(city);

// person.email = 'john@gmail.com';
// console.log(person);


// Arrays of Objects

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with Boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist Appointment',
//         isCompleted: false
//     }

// ];

// console.log(todos);
// console.log(todos[1].text);


//  to convert the above to json

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);



// FOR LOOPS

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with Boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist Appointment',
//         isCompleted: false
//     }

// ];


// for(let i = 0; i < 10; i++) {
//     console.log(i);
//     console.log(`for loop number: ${i}`);

// }

// While Loop

// let i = 0;
// while(i < 10) {
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }

// ------------------------------//

// for(let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }

// OR //

// you can use another term below other than todo //
// for(let todo of todos) {
//     console.log(todo.text);
// }

// ---------------------------------------//



//  forEach, map, filter

// todos.forEach(function(todo){
//     console.log(todo.text);
// });

// ---------------------------------//

// const todoText = todos.map(function(todo){
//     return todo.text;
// });
// console.log(todoText);

// ----------------------------------//


// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// });
// console.log(todoCompleted);


// --------------------------------------//


// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text;
// })
// console.log(todoCompleted);


// ------------------------------------------ //



// Conditionals

const x = 10;

if(x == 10){
    console.log(`x is 10`);

}