console.log('Destructuring 768');

let a,b;
// [a,b] = [54,66];
// console.log(a,b)

// [a, b, c, ...d] = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13];
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// ({a,b,c,...d} = {a:'a', b:'b', c:'c', d:'d', e:'e'});
// console.log(a,b,c,d)

const fruits = ['Apple', 'Oranges', 'Grapes'];
[a, b, c] = fruits;
// 

const myLaptop = {
    model:'HP',
    age:'40 days',
    gender:'male',
    net:1234

}

const {model,age,gender,net} = myLaptop;
console.log(model,age,gender,net)