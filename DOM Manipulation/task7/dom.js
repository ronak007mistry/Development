var form = document.getElementById('addForm');
var itemList = document.getElementById('items');  
var filter=document.getElementById('filter')  

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
itemList.addEventListener('click', editItem);
filter.addEventListener('keyup',fliterItems);

function addItem(e){
  e.preventDefault();

  var newItem = document.getElementById('item').value;
  var newItemdesc = document.getElementById('desc').value;

  var li = document.createElement('li');
  
  li.className = 'list-group-item';
  
  li.appendChild(document.createTextNode(`${newItem} ${newItemdesc}`));

  
  var deleteBtn = document.createElement('button');

  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  deleteBtn.appendChild(document.createTextNode('X'));

  var editBtn = document.createElement('button');

  editBtn.className = 'btn btn-success btn-sm float-right edit';

  editBtn.appendChild(document.createTextNode('Edit'));
  editBtn.contentEditable="false"
  deleteBtn.contentEditable="false"
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  
  itemList.appendChild(li);
}

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function editItem(e){
    if(e.target.classList.contains('edit')){
        var li = e.target.parentElement;
        li.contentEditable = "true";
      }
  }

function fliterItems(e)
{
  var text=e.target.value.toLowerCase();
  var items=itemList.getElementsByTagName('li')
  Array.from(items).forEach(function(item){
    var itemName=item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text)!=-1)
    {
      item.style.display='block'
    }
    else
    {
      item.style.display='none'
    }
  });
}