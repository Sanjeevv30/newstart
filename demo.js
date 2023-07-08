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
var items = document.getElementsByClassName('list-group-item');
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
items[4].style.fontWeight = 'bold';
// GET ELEMENT BY TAGNAME;
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
// li[0].style.fontWeight = 'bold';
// li[1].style.fontWeight = 'bold';
// li[2].style.fontWeight = 'bold';
// li[3].style.fontWeight = 'bold';
// li[4].style.fontWeight = 'bold';
li[2].style.backgroundColor = 'green';

for(let i=0;i<li.length;i++){
    li[1].style.backgroundColor = "#f4f4f4";
}

