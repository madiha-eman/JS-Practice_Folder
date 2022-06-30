console.log('maps 768');

// Msp in  javascript : We can use any keys or values

const mymaps = new Map();

const key1 = 'mystr', key2 = {}, key3 = function(){}

//setting the map values
mymaps.set(key1,'this is a string')
mymaps.set(key2,'this is a blank obj')
mymaps.set(key3,'this is a an empty function')
console.log(mymaps)

//Getting the map values from a Map
let value1 = mymaps.get(key3);
console.log(value1)

//Getting the map size of Map
console.log(mymaps.size)

// you can loop using for..of to get keys and values
for(let [key,value] of mymaps){
    console.log(key,value)
}

// Get only keys
for(let key of mymaps.keys()){
    console.log('keys is: ',key)
}

// Get only keys
for(let values of mymaps.values()){
    console.log('values is: ', values)
}


// You can loop through a map using for each loop
mymaps.forEach((value,key)=>{
    console.log('key is: ', key);
    console.log('value is: ', value)
})

// Coverting map to an array
let myArray = Array.from(mymaps);
console.log('Map to Array is: ',myArray)

// Coverting map keys to an array
let myKeysArray = Array.from(mymaps.keys());
console.log('Map to Keys Array is: ', myKeysArray)

// Coverting map values to an array
let myValuesArray = Array.from(mymaps.values());
console.log('Map to Values Array is: ', myValuesArray)