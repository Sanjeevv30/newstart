console.log("hello");
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
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';
// GET ELEMENT BY CLASS;
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[0].style.fontWeight = 'bold';
items[1].style.fontWeight = 'bold';
items[2].style.fontWeight = 'bold';
items[3].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'green';

