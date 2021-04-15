

// GETELEMENTSBYCLASSNAME

let items = document.getElementsByClassName('list-group-item');
console.log(items);
// items[1].textContent = 'Hello there';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

for(let i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}


// GETELEMENTBYTAGNAME

let li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
// li[1].textContent = 'Hello there';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';


for(let i=0;i<li.length;i++){
    li[i].style.backgroundColor = 'cyan';
}