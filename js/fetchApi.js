console.log('fetch Api 768');

let myBtn = document.getElementById('myBtn');
let content = document.getElementById('content')


// function getData(){
//     console.log('get Started 2');
//     url = "data.txt";
//     fetch(url).then((resonse)=>{
//           console.log("inside First res 4")
//           return resonse.text()
//     }).then((data)=>{
//           console.log("inside second res 5")
//           console.log(data)
//     })
// }

// Get req 



// function getData(){
//     console.log('get Started 2');
//     url = "https://api.github.com/users";
//     fetch(url).then((resonse)=>{
//           console.log("inside First res 4")
//           return resonse.json()
//     }).then((data)=>{
//           console.log("inside second res 5")
//           console.log(data)
//     })
// }
// console.log('before runing 1');
// getData()
// console.log("after runing 3")



function postData(){
    url = "https://dummyjson.com/posts/add";
    data = JSON.stringify({
        title: 'I am in love with someone.',userId: 5,
    })
    params = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: data
    
}
    fetch(url,params).then(response=> response.json())
    .then(data=>console.log(data))
}
postData()
