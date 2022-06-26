var a = document.getElementById("a_size");
var array = [];
var divs = [];
var cont = document.getElementById("array_container");
cont.style="flex-direction:row";
function func() {
   cont.innerHTML=" ";
   array=[];
   divs = [];
   for (var i = 0; i <a.value; i++) {
      array[i] = Math.floor(Math.random() * 70);
      divs[i] = document.createElement("div");
      cont.appendChild(divs[i]);
      divs[i].style = " margin:0% " + 0.1 + "%; background-color:blue; width:" + (100 / a.value - (2 * 0.1)) + "%; height:" + (array[i]) + "%;"; 
      divs[i].innerHTML=array[i];
   }
   console.log(array);
}

