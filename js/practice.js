let check = document.getElementById('first');
// check=check.className
// check.style.color= 'red'
// check.innerText= "madiha is a good girl"
// console.log(check)

// let sel = document.querySelector('#first');
// sel = document.querySelector('.child')
// sel = document.querySelector('div')
// sel.style.color = 'green'
// console.log(sel)

// let elems = document.getElementsByClassName('child')
// elems = document.getElementsByClassName('container')
// elems= document.getElementsByTagName('div')
// console.log(elems)

// for(let i=0; i<elems.length; i++){
//     const element = elems[i]
//     console.log(element)
//     element.style.color = 'blue'
// }

// Array.from(elems).forEach(element => {
//     console.log(element)
//     element.style.color = 'green'
// })

let element = document.createElement('li')
let text = document.createTextNode('new li')
element.appendChild(text)
element.className = 'childuli'

element.id = 'createdli'
element.setAttribute('title','mytitle')
// element.innerText = 'hello this element created by madiha'
let ul = document.querySelector('ul.this')
ul.appendChild(element)

// console.log(ul)
// console.log(element) 

let elem2 = document.createElement('h3')
let tnode = document.createTextNode('heading third one')
elem2.className = 'elem2'
elem2.id = 'elem2'
elem2.appendChild(tnode)
console.log(elem2)

element.replaceWith(elem2);
let myul = document.getElementById('myul')
myul.replaceChild(element, document.getElementById('fui'))
myul.removeChild(document.getElementById('lui'))
let pr = elem2.getAttribute('id')
console.log(pr)

let heading = document.createElement('h1')
let href = document.createElement('a')
href.setAttribute('href', '//www.codewithharry.com')
href.appendChild(heading)
let textH = document.createTextNode('go to code with harry')
heading.appendChild(textH)
console.log(heading)

let aag = document.querySelector('div.container')
aag.appendChild(href)

let divElem = document.createElement('div')
let val = localStorage.getItem('text')
let textDiv;
if(val == null){
    textDiv = document.createTextNode('this is created Element are editable')
}
else{
    textDiv = document.createTextNode(val)
}
divElem.appendChild(textDiv)
divElem.setAttribute('id', 'elem')
divElem.setAttribute('class', 'elem')
divElem.setAttribute('style', 'border: 2px solid red')

let container = document.querySelector('.container')
let head = document.getElementById('first')
container.insertBefore(divElem, first)

console.log(container, divElem)

divElem.addEventListener('click', function(){
    let noTextarea = document.getElementsByClassName('textarea').length;
    if(noTextarea == 0){
    let html = elem.innerHTML;
    divElem.innerHTML = `<textarea class="textarea form-control" id="textarea" rows= "3"> ${html} </textarea>`
    }
    let textarea = document.getElementById('textarea')
textarea.addEventListener('blur', function(){
    elem.innerHTML = textarea.value;
    localStorage.setItem('text', textarea.value)
})
})

