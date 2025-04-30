function openwindow() {
  win = window.open("https://www.google.com", "_blank", "width=500,height=300");
  win.scrollTo(0, document.body.scrollHeight);
}

function closewindow() {
  if (!win.closed) {
    win.close();
  } 
}


let images1 = document.images;
console.log(images1);

let images2 = document.getElementsByTagName("img");
console.log(images2);


let city = document.getElementById("city");
for (let option of city.options) {
  console.log("Value: " + option.value );
}



let tables = document.getElementsByTagName("table");
let secondTable = tables[1]; 
let tds = secondTable.getElementsByTagName("td");
console.log(tds);

let element = document.querySelectorAll(".fontBlue.BGrey");
console.log(element);


function updateDateTime() {
  let now = new Date().toLocaleString();
  document.title = now;
  document.getElementById("datetime").innerText = now; 
}
setInterval(updateDateTime, 1000);

let str = location.search;
let search = str.substring(1); 
let arr = search.split("&"); 
let obj = {};
arr.forEach((elem) => {
  let keyValue = elem.split("="); 
  obj[keyValue[0]] = keyValue[1];
});
console.log(obj); 