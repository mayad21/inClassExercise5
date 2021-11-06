// ADD NEW ITEM TO END OF LIST
var list = document.getElementsByTagName('ul')[0];
var lastItem = document.createElement('li');
//https://www.w3schools.com/jsref/met_document_createtextnode.asp
var lastItemText = document.createTextNode('cream');
//https://www.w3schools.com/jsref/met_node_appendchild.asp
lastItem.appendChild(lastItemText);
list.appendChild(lastItem);

// ADD NEW ITEM START OF LIST
var firstItem = document.createElement('li');
var firstItemText = document.createTextNode('kale');
firstItem.appendChild(firstItemText);
list.insertBefore(firstItem, document.getElementById('one'));

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var items = document.getElementsByTagName('li');

for (var i = 0; i < items.length; i++) {
    items[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.getElementsByTagName('h2')[0];
heading.innerHTML = "Buy groceries <span>" + items.length + "</span>";