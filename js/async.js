console.log('asyn / await 768 1');


async function asyncAwait(){
    console.log("inside a function 3")
    const response = await fetch('https://api.github.com/users');
    console.log('before response 6');
    const users = await response.json();
    console.log('users resolved 7')
    a.then(data => console.log(data))
    return users;
}


 console.log('Before calling a function 2');
let a = asyncAwait()
console.log('After running a function 4')
//  a.then(data => console.log(data))
console.log('Ressolved a function 5')