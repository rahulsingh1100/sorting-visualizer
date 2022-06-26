var speed = 100;
function change() {
    var currspeed = document.getElementById("a_speed")
    console.log(currspeed.value)
    if (currspeed.value == 1)
        speed = 1;
    else if (currspeed.value == 2)
        speed = 10;
    else if (currspeed.value == 3)
        speed = 100;
    else if (currspeed.value == 4)
        speed = 1000;
    else
        speed = 10000;
    delay_time = 10000 / (Math.floor(a.value / 10) * speed);    
}
var delay_time = 10000 / (Math.floor(a.value / 10) * speed);
var c_delay = 0;

function div_update(cont, height, color) {
    window.setTimeout(function () {
        c_delay = 0;
        cont.style = " margin:0% " + 0.1 + "%; width:" + (100 / a.value - (2 * 0.1)) + "%; height:" + height + "%; background-color:" + color + ";";
        cont.innerHTML = height;
    }, c_delay += delay_time);
    console.log(c_delay);

}
