console.log('sets 768');

// Set stores unque values
const mySet = new Set(); // Initialize an empty set
console.log(mySet)

// Adding values to this set
mySet.add('this');
mySet.add('my name')
mySet.add('this');
mySet.add('this');
mySet.add(12);
mySet.add(true);
mySet.add(false);
console.log(mySet)

// use a contructor to initialize the set
let myset2 = new Set([1,2,'that', {a:1,b:3},'that'])
console.log(myset2)

console.log(mySet.has(12)); // return true


console.log('Before removal', mySet)
mySet.delete('this')
console.log('After removal', mySet)

// Iterate a set
for (let item of mySet){
    console.log('item is: ', item)
}

mySet.forEach((item)=>{
    console.log('for each item ', item)

}) 

// Quiz: can you use Array.from(mySet) to convert into an Array

let array2 = ['apple', 'banana', 'orange', 'grapes', 'mangoes', 'banana'];
console.log(array2)
let set2 = new Set(array2);
console.log(set2)
let SetConvertArray = Array.from(set2)
console.log(SetConvertArray)

SetConvertArray.forEach((items)=>{
     console.log('after conveting into an array', items)
})
