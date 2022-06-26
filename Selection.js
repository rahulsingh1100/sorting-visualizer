function myselect() {
    for (let i = 0; i < a.value-1; i++) {
        let min = i;
        div_update(divs[i], array[i], "red"); //Color update
        for (let j = i + 1; j < a.value ; j++) {
            div_update(divs[j], array[j], "yellow");
            if (array[j] < array[min]) {
                min = j;
            }
            div_update(divs[j], array[j], "blue");
        }
        div_update(divs[min], array[min], "red");
        let temp = array[min];
        array[min] = array[i];
        array[i] = temp;
        if(i===min)
        {
         div_update(divs[i], array[i], "green");
        }
        else
        {
         div_update(divs[i], array[i], "green");
         div_update(divs[min], array[min], "blue");
        }
    }
    div_update(divs[a.value-1], array[a.value-1], "green"); 
    let best = document.getElementById("bc1");
    best.innerHTML = "<b>O(N<sup>2</sup>)</b>";
    let average = document.getElementById("ac1");
    average.innerHTML = "<b>O(N<sup>2</sup>)</b>";
    let worst = document.getElementById("wc1");
    worst.innerHTML = "<b>O(N<sup>2</sup>)</b>";
    let space = document.getElementById("sc1");
    space.innerHTML = "<b>O(1)</b>";
}