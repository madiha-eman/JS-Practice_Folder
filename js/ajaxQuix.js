console.log('ajax practice quiz 768');


let fetchFruits = document.getElementById('fetchBtn');
fetchFruits.addEventListener('click', fecthFruitsHandler);

function fecthFruitsHandler(){
    // console.log('fecth Fruits');

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'fruits.json', true);

    xhr.onload = function (){
      if(this.status === 200){
        let obj = JSON.parse(this.responseText)
        // console.log(obj)
        let listFruits = document.getElementById('list2');
        let str = "";
        for(key in obj.fruits){
            str += `<tr>
            <th scope="row">${obj.fruits[key].id}</th>
            <td><img src=${obj.fruits[key].image} style="width:70px;"><td>
            <td>${obj.fruits[key].name}</td>
            <td>${obj.fruits[key].quantity}</td>
            <td>${obj.fruits[key].price}</td>
            </tr>`
            listFruits.innerHTML = str;
            // console.log(obj.fruits[key].name)
        } 
      }
    }

    xhr.send();
}

let fetchVege = document.getElementById('fetchVegeBtn');
fetchVege.addEventListener('click', fecthVegesHandler);

function fecthVegesHandler(){
    // console.log('fecth Fruits');

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'vegetables.json', true);

    xhr.onload = function (){
      if(this.status === 200){
        let obj = JSON.parse(this.responseText)
        // console.log(obj)
        let list = document.getElementById('list');
        let str = "";
        for(key in obj){
            str += `<tr>
                    <th scope="row">${obj[key].id}</th>
                    <td><img src=${obj[key].photo_url} style="width:70px;"><td>
                    <td>${obj[key].name}</td>
                    <td>${obj[key].quantity}</td>
                    <td>${obj[key].price}</td>
                    </tr>`
            list.innerHTML = str;
            // console.log(obj[key].name)
        } 
      }
    }

    xhr.send();
}