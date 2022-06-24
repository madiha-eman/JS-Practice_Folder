console.log('form check 768');
let book;
class Book{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
}

let submit = document.getElementById('submit')

submit.addEventListener('click', submitHandler)

function submitHandler(e){
    e.preventDefault();
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    name = name.value;
    email = email.value;
    book = new Book(name,email)
   forms_records = new Array();
    forms_records = JSON.parse(localStorage.getItem('data'))?JSON.parse(localStorage.getItem('data')) : [] 
//  console.log(name.value)
 forms_records.push({'name': name,
                    'email': email,})
 localStorage.setItem('data', JSON.stringify(forms_records))
 console.log(forms_records)
}

show_record()
function show_record(){
    forms_records = localStorage.getItem('data')
    if(forms_records){
        forms_records = JSON.parse(localStorage.getItem('data'))
        let html = '';
        forms_records.forEach(function(book){
            html += ` <tr>
            <td>hi</td>
                       <td>${book.name}</td>
                       <td>${book.email}</td>

                   </tr>`
                   console.log(book.name)
                   data.innerHTML = html;
    
 });


// let notesElem = document.getElementById('data');
// if(forms_records.length != 0){
//     notesElem.innerHTML = html;
// }
// else{
//     notesElem.innerHTML = `Nothing to show! "Add a note" section above to add note`
// }
}
}
show_record()
