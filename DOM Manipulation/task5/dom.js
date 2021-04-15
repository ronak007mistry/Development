


var itemList=document.querySelector('#items')
itemList.parentElement.style.background='yellow'

console.log(itemList.firstChild) //not useful with the current index.html

itemList.firstElementChild.textContent='Hello 1'
itemList.lastElementChild.textContent='Hello 5'

console.log(itemList.nextSibling) //not useful with the current index.html
console.log(itemList.nextElementSibling) //not useful with the current index.html

console.log(itemList.previousSibling) //not useful with the current index.html
itemList.previousElementSibling.style.color='green'

var newDiv=document.createElement('div')
newDiv.className='hello'
newDiv.id='hello1'
newDiv.setAttribute('title','Hello Div')
var newDivtext=document.createTextNode('Hello World')
newDiv.appendChild(newDivtext)

var container=document.querySelector('header .container')
var h1=document.querySelector('header h1')

container.insertBefore(newDiv,h1)

var container2=document.querySelector('.card-body')
var l1=document.querySelector('#items')
container2.insertBefore(newDiv,l1)

