// const s1 = 'Hello';
// console.log(s1.toUpperCase());
// // s1.toUppercase is like an object (s1) with a method (toUppercase)
// // But s1 is not an object

// console.log(typeof s1);

// const s2 = new String('Hello');
// console.log(typeof s2);

// console.log(window);

// window.alert(1); 
// This is a property with a method
// // OR

// alert(1);


// console.log(navigator.appVersion);
// gives you info on your system
// navigator.appVersion is an object with a property





// OBJECT LITERALS

// const book1 = {
//     title: 'Book One',
//     author: 'John Doe',
//     year: '2013',
//     getSummary: function() {
//         return `${this.title} was written by 
//         ${this.author} in ${this.year}`;
//     }
// }

// console.log(book1);
// console.log(book1.title);
// console.log(book1.getSummary());
// console.log(Object.values(book1));
// console.log(Object.keys(book1));




// --------------------------------------//
// --------------------------------------//

// CONSTRUCTORS


// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;

//     this.getSummary = function() {
//         return `${this.title} was written by 
//         ${this.author} in ${this.year}`;  
//     }
// }

// // Instantiate an Object
// const book1 = new Book('Book One', 'John Doe', '2013');
// const book2 = new Book('Book Two', 'Jane Doe', '2016'); 

// // console.log(book1);
// console.log(book1.getSummary());



// --------------------------------------//
// -------------------------------------//


// PROTOTYPES



// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// // getSummary
// Book.prototype.getSummary = function() {
//     return `${this.title} was written by 
//     ${this.author} in ${this.year}`;  
// }


// // getAge
// Book.prototype.getAge = function(){
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
// }


// // Revise / Change Year
// Book.prototype.revise = function(newYear) {
//   this.year = newYear;
//   this.revised = true;

// }




// // Instantiate an Object
// const book1 = new Book('Book One', 'John Doe', '2013');
// const book2 = new Book('Book Two', 'Jane Doe', '2016'); 


// // console.log(book2.getSummary());
// // console.log(book2.getAge());
// console.log(book2);
// book2.revise('2020');
// console.log(book2);



// --------------------------------------------//
// --------------------------------------------//


// INHERITANCE

// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// // getSummary
// Book.prototype.getSummary = function() {
//     return `${this.title} was written by 
//     ${this.author} in ${this.year}`;  
// };


// // Magazine Constructor

// function Magazine(title, author, year, month) {
//     Book.call(this, title, author, year);

//     this.month = month;

// }

// // Inherit Prototype
// Magazine.prototype = Object.create(Book.prototype);

// //  Instantiate Magazine Object
// const mag1 = new Magazine('Mag One', 'John Doe', '2020', 'Jan');


// console.log(mag1.getSummary());


// // console.log(mag1);



// ---------------------------------------//
// ---------------------------------------//



// OBJECT.CREATE

// // Object of Protos

// const bookProtos = {
//     getSummary: function(){
//         return `${this.title} was written by ${this.author} in ${this.year}`;

//     },
//     getAge: function() {
//         const years = new Date().getFullYear() - this.year;
//         return `${this.title} is ${years} years old`;
//     } 
// }

// // Create Object
// const book1 = Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'John Doe';
// book1.year = '2013';

// console.log(book1);




// ----------------------------------------//
// ----------------------------------------//


