//console.log("hello");
// console.log(document.title);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.title);
// document.title=123;
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello';
// //GET ELEMENT BY ID
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';
// GET ELEMENT BY CLASS;
//var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[0].style.fontWeight = 'bold';
// items[1].style.fontWeight = 'bold';
// items[2].style.fontWeight = 'bold';
// items[3].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'green';

// for(let i=0;i<items.length;i++){
//     items[1].style.backgroundColor = "#f4f4f4";
// }
// items[4].style.fontWeight = 'bold';
// // GET ELEMENT BY TAGNAME;
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// // li[0].style.fontWeight = 'bold';
// // li[1].style.fontWeight = 'bold';
// // li[2].style.fontWeight = 'bold';
// // li[3].style.fontWeight = 'bold';
// // li[4].style.fontWeight = 'bold';
// li[2].style.backgroundColor = 'green';

// for(let i=0;i<li.length;i++){
//     li[1].style.backgroundColor = "#f4f4f4";
// }
//QUERY SELECTOR//
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello';
 
// var submit = document.querySelector('input[type = "submit" ]');
// submit.value = "SEND";

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red'

// //document.querySelector("#myElement").style.display = "none";

// var thirdItem =  document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = 'hidden';


// DOM treversing;


var itemList = document.querySelector('#items');
//parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);
//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
console.log(itemList.childNodes);


console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

//FirstChild
console.log(itemList.firstChild);
//FirstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

//LastChild
console.log(itemList.lastChild);
//LastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';


// nextSibling

console.log(itemList.nextSibling);
// nextElementSibling

console.log(itemList.nextElementSibling);

//previousSibling

console.log(itemList.previousSibling);
// nextElementSibling

console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

//createElement

var newDiv = document.createElement('div');
// Add class
newDiv.className= 'hello';

newDiv.id = 'hello1';

// Add Attributes
newDiv.setAttribute('title','Hello Div');

// Add text to div
newDiv.appendChild(newDivText);