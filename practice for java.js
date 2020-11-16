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

//for (let i = 0; i<5; i++) {
//    console.log('Beetle')
//}


//for (let i = 0; i<5; i++) {
//    console.log('Beetle' + i)
//}


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

let i = 0
do{
    i++;
    if(i===5) continue;
    console.log(i);
}
while (i< 10);

