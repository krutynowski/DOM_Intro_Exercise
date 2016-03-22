/*function myTable() {
    var table = document.create("Animals");
    var header = table.createTHead();
    var row = header.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "<b>This is a f***** table header</b>";
}

var animals =[
{name: "dolphin", sound: "fdf"}
]
*/
var animals = [
  {name: "Animal", sound: "Sound"}, 
  {name: "cat", sound: "meow"}, 
  {name: "octipi", sound: "OOOooooOOOOOOOoooo"}, 
  {name: "cat", sound: "meow"}, 
  {name: "pig", sound: "oink"}, 
  {name: "fox", sound: "Ring-ding-ding-ding-dingeringeding!"}
];

// create table and tbody
var table = document.createElement("table");
var tbody = document.createElement("tbody");

// append table to DOM
document.querySelector('body').appendChild(table);
table.appendChild(tbody);

// create table rows, append them to tbody

// maybe you want these arrays, maybe not:
for (var i = 0; i < animals.length; i++) {

  // 1. create tr 
  var tr = document.createElement("tr");
  // 2. for each tr, create two tds
  var td1 = document.createElement("td");
  var td2 =document .create createElement("td");
  // 3. for each td, modify the innerText
  td1.innerText =animals[i]
  // 4. append the tds to the tr
  td1.appendChild(td1);
  td2.appendChild(td2);
  // 5. append the tr to the tbody
  tbody.appendChild(tr);
}