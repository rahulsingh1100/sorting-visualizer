function myfunction() {
    for (var i = 0; i < a.value - 1; i++) {
        for (var j = 0; j < a.value - i - 1; j++) {
            div_update(divs[j], array[j], "yellow");//Color update
            if (array[j] > array[j + 1]) {
                div_update(divs[j], array[j], "red");//Color update
                div_update(divs[j + 1], array[j + 1], "red");//Color update

                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                div_update(divs[j], array[j], "red");//Height update
                div_update(divs[j + 1], array[j + 1], "red");//Height update
            }
            div_update(divs[j], array[j], "blue");//Color update
        }
        div_update(divs[j], array[j], "green");//Color update
    }
    div_update(divs[0], array[0], "green");//Color update

    let best = document.getElementById("bc1");
    best.innerHTML = "<b>O(N<sup>2</sup>)</b>";
    let average = document.getElementById("ac1");
    average.innerHTML = "<b>O(N<sup>2</sup>)</b>";
    let worst = document.getElementById("wc1");
    worst.innerHTML = "<b>O(N<sup>2</sup>)</b>";
    let space = document.getElementById("sc1");
    space.innerHTML = "<b>O(1)</b>";
}

