console.log('ajax practice');


let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', fetchBtnHandler);

function fetchBtnHandler(){
    console.log('clickable')

//   Instantiate xhr Object 
    let xhr = new XMLHttpRequest();

    // Open the Object
    //  fetch data via dommy data 
    // xhr.open('Get', 'data.txt', true);

    // fetch data via APi
    xhr.open('Get', 'https://jsonplaceholder.typicode.com/todos/1', true);

// USE THIS FOR POST REQUEST
xhr.open('POST', 'https://jsonplaceholder.typicode.com/todos/1', true);
xhr.getResponseHeader('Content-type', 'application/json');

    // What to do on progress
    xhr.onprogress = function(){
        console.log('On Progress');
    }
 
    xhr.onreadystatechange = function(){
         console.log('ready state is ', xhr.readyState)
    }
    // What to do When  progress is ready
    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }
        else {
               console.log('some error occured');
        }
    }


    // Send the request 
    xhr.send()
    console.log('we are done')

}


let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler(){
    console.log('clickable')

    //   Instantiate xhr Object 
        let xhr = new XMLHttpRequest();
    
    
    
        // fetch data via APi
        xhr.open('Get', 'https://dummyjson.com/products', true);
    
    
        // What to do When  progress is ready
        xhr.onload = function () {
            if(this.status === 200){
                let obj = JSON.parse(this.responseText);
                console.log(obj);
                let list = document.getElementById('list');
                str = "";
                let i;
        // for(i=0; i<obj.products.length; i++){
            for(i in obj.products) {  
                
                str += `<li>${obj.products[i].title} </li>`;
            // }
            list.innerHTML = str;   
            }
        }
            else{
                console.log("Some error occured")
            }
        }
    
    
        // Send the request 
        xhr.send()
        console.log('we are done fetching product data')
}