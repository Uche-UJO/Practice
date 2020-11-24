// forEach
//[1,2,3].forEach(function(item,index){
//console.log(item, index);   
//});

//******************************//

// map (you can use const instead of var)
//var three = [1,2,3]
//var doubled = three.map(function(item){
//    return item *2;
//});
//console.log(doubled);

//***********************************//

// filter
//const ints = [1,2,3];
//const evens = ints.filter(function(item){
//    return item % 2 === 0;
//});
//console.log(evens);

//********************************//

// reduce
//const sum = [1,2,3].reduce(function(result, item){
//    return result + item;
//}, 0);
//console.log(sum)

//**************************************//


// some
//const hasNegativeNumbers = [1,2,3,-1,4].some(function(item){
//    return item < 0;
//});
//console.log(hasNegativeNumbers);
// returns true

//*******************************************//

// every
//const allPositiveNumbers = [1,2,-3].every(function(item){
//    return item > 0;
//});
//console.log(allPositiveNumbers);
// returns false


// find
//const objects = [{id:'a'}, {id:'b'}, {id:'c'}];
//const found = objects.find(function(item){
//    return item.id === 'b';
//});
//console.log(found);

//returns {id:'b'} . But how do you return just the value 'b'?

//*************************************//

// find index
//const objects2 = [{id:'a'}, {id:'b'}, {id:'c'}];
//const foundIndex = objects2.findIndex(function(item){
//    return item.id === 'b';
//});
//console.log(foundIndex);
// retruns the index of the second item in the array. if it doesn't find it in the array, it returns a -1

//************************************************//
//************************************************//


// for Loop

// for (let i = 0; i<5; i++) {
//    console.log('Beetle')
// }


// for (let i = 0; i<5; i++) {
//    console.log('Beetle' + i)
// }


//for (let i = 5; i>0; i--) {
//    console.log('Beetle' + i)
    
//}

// for (let i = 0; i<5; i++) {
//     console.log('Beetle'+ i)
//     if (i===3) break;
// }


// const names = ['john', 'mary', 'chris', 'matt', 'ella'];
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
//     //if (i===3) break;
// }


// 'For Of' Loop


// const names = ['john', 'mary', 'chris', 'matt', 'ella'];
//for (name of names) {
//    console.log(name);    
//}

// OR
//for (name of names) console.log(name);


//********************************************** */


// 'For In' Loop

// const names = ['john', 'mary', 'chris', 'matt', 'ella'];
// const user = {firstName: 'john', lastName: 'doe'};
// for (key in user) console.log(user[key]);


// 'While' Loop

// let i = 0
// while (i< 10){
//     console.log(i);
//     i++;
//     if(i===5) break;
// }



// let i = 0
// while (i< 10){
//     i++;
//     if(i===5) continue;
//     console.log(i);
// }


// 'Do While' Loop

// let i = 0
// do{
//     i++;
//     if(i===5) continue;
//     console.log(i);
// }
// while (i< 10);



// FizzBuzz

// for (var i=1; i <= 20; i++)
// {
//     if (i % 15 == 0)
//         console.log("FizzBuzz");
//     else if (i % 3 == 0)
//         console.log("Fizz");
//     else if (i % 5 == 0)
//         console.log("Buzz");
//     else
//         console.log(i);
// }






// --------------------------------//
// DATA FUNCTIONS//
//----------------------------------//



//----ARROW FUNCTIONS----//




//-- 1. BASIC FUNCTION-- //

// function sum(a,b){
//     return a+b;
// }
// var results = sum (10,2);
// console.log(results);




// --- 2. FUNCTION EXPRESSION--//

// var sum = function sum (a,b){
//     return a+b;
// }
// var results = sum(5,2);
// console.log(results);


// ---3. ARROW FUNCTION--//

// var sum = (a,b) => a+b;
// var results = sum(4,5);
// console.log(results);


// ---4. ARROW MULTILINE--//

// var sum = (a,b) =>{
//     console.log("Adding Two Numbers");
//     return a+b;
// };


// var results = sum(6,5);
// console.log(results);






// ---- MAP ---//

// ----- 1. BASIC MAP ----//

// var data = [1,2,3,4,5];
// var dataCopy = data.map(function(item){
//     return item;
// });

// console.log(dataCopy);





// ----- 2. MAP WITH ARROW ---//

// var data = [1,2,3,4.5];
// var dataCopy = data.map(item => item);
// console.log(dataCopy);



// -----3. MAP WITH ARRAY OF OBJECTS ---//

// var data = [{x:1, y:1}, {x:2, y:3}, {x:3, y:5}];
// var xData = data.map(obj => obj.x);
// var yData = data.map(obj => obj.y);

// console.log(xData);
// console.log(yData);

// --------PRACTICE---///

// function sockMerchant(n, ar) {
//     let socks = {};
//     let pairs = 0;
//   for (let element of ar) {
//     socks[element] = socks[element] + 1 || 1;
//       if (socks[element] % 2 === 0) {
//         pairs += 1;
//       }
//     }
//   return pairs;
//   }
  
// var sorter = sockMerchant(7,[1,2,1,2,1,3,2]);
// console.log(sorter);





// -------------- FILTER -----------------//

// BASIC FILTER


// var data = [1,2,3,4,5];
// var filteredData = data.filter(function(item) {
//     return item < 3;
// });

// console.log(filteredData);



// ---FILTER WITH ARROW FUNCTION ---//



// var data = [1,2,3,4,5];
// var filteredData = data.filter(item => item < 3);
// console.log(filteredData);



// ---  FILTER BY OBJECT VALUE --//

// var data = [{x:1, y:1}, {x:2, y:3}, {x:3, y:5}];
// var xFiltered = data.filter(obj => obj.x < 3);
// console.log(xFiltered);



// ---- TO PRINT ODD NUMBERS BETWEEN 1 AND 100----//
// let i = 0
// do {
//     i++;
//     if (i % 2=== 0) continue;
//     console.log(i);

// }
// while (i< 100);


// *************** DON'T DO THIS******************//
// **********************************************//
// for (let i = 0; 1 >= i <= 100; i++){
//     console.log(i);
// }
// *******************************************//
// *****************************************//


// ----------TO PRINT INTEGERS 1-100 --- //

// let i = 1;
// while (i <= 100){
//     console.log(i);
//     i++;
// }


// ---- TO PRINT EVEN NUMBERS BETWEEN 1 AND 100----//
// let i = 0
// do {
//     i++;
//     if (i % 2!= 0) continue;
//     console.log(i);

// }
// while (i< 100);




// ---- All numbers between 1-100, divisible by 3 ----//

// let i = 0
// do {
//     i++;
//     if (i % 3!= 0) continue;
//     console.log(i);

// }
// while (i< 100);




// ------------- All numbers between 1-100, divisible by three and five ----//

// let i = 0
// do {
//     i++;
//     if (i % 3!= 0 && i % 5!= 0) continue;
//     console.log(i);

// }
// while (i< 100);





// --------- Write a public method that takes in a string s and returns the length as an integer s.length ----//

// var Str = "just me";
// console.log("string length is: " + Str.length);






// -------------- Write a public method that takes in string s and returns the first character s.charAt(0) -------//

// var Str = "just me";
// console.log("first character is: " + Str.charAt(0));




