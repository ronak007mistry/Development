// Examine the document object

// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// // document.title = 1234;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[8]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID

// console.log(document.getElementById('header-title'));

// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// headerTitle.innerHTML = '<h3>Hello</h3>';

// header.style.border = 'solid 3px #000';


// GETELEMENTSBYCLASSNAME

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent = 'Hello there';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';


// GETELEMENTBYTAGNAME

// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello there';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';


// QUERYSELECTOR

let header = document.querySelector('#main-header');
console.log(header);
header.style.borderBottom = 'solid 4px #ccc';

let input = document.querySelector('input');
input.value = 'Hello there';

let submit = document.querySelector(input[type="submit"]);
submit.value = "send";
