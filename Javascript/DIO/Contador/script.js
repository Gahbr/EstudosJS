var numeroAtual = document.getElementById("numero");
var num= 0;

function mais() {
   if (num <= 9) {
      num = num + 1;
      numeroAtual.innerHTML = num;
   }

   if (num >= 0) {
      numeroAtual.style.color = "burlywood";
   }
}

function menos() {
   if (num >= -9) {
      num = num - 1;
      numeroAtual.innerHTML = num;
   }

   if (num < 0) {
      numeroAtual.style.color = "red";
   }
}
   
 