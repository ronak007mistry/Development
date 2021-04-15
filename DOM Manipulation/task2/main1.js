


// GETELEMENTSBYCLASSNAME

let items = document.getElementsByClassName('list-group-item');
console.log(items);
// items[1].textContent = 'Hello there';
// items[1].style.fontWeight = 'bold';


items[3].style.backgroundColor = 'green';
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}
// items.style.fontWeight = 'bold';  this dosen't work


