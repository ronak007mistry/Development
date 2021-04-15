


// QUERYSELECTOR

// let header = document.querySelector('#main-header');
// console.log(header);
// header.style.borderBottom = 'solid 4px #ccc';

// let input = document.querySelector('input');
// input.value = 'Hello there';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = "send";

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility = 'hidden';


// QUERYSELECTORALL

// let titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

let lielement = document.querySelectorAll('li');
let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');
// let secondli = document.querySelectorAll('li:nth-child(4)');

// secondli.style.color = 'green';

lielement[0].style.color = "green"; 

for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'green';
    // even[i].style.backgroundColor = '#ccc';
}