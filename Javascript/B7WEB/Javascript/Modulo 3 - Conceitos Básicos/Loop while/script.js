
let html = '';

let c = 0;
while (c < 10) {
    html += "Numero: " +c + "<br/>";
    c++; // c= c+1
}

//usando o for
for (let c = 1; c <=10; c++) {
   html+= "Numero: "+ c + "<br/>";

}

document.getElementById("demo").innerHTML = html;