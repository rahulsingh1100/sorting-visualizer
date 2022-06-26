function partition(array,l,r)
{
    var pivot=array[r];
    div_update(divs[r], array[r], "yellow");
    var i=l-1;
    for(var j=l;j<=r-1;j++)
    {
        if(array[j]<pivot)
        {
            i++;
            div_update(divs[i], array[i], "red");
            div_update(divs[r], array[r], "red");
            let temp=array[i];
            array[i]=array[j];
            array[j]=temp;
            div_update(divs[i], array[i], "red");
            div_update(divs[j], array[j], "red");
            div_update(divs[i], array[i], "green");
            div_update(divs[j], array[j], "green");
        }
    }
    div_update(divs[i+1], array[i+1], "red");
    div_update(divs[r], array[r], "red");
    var temp1=array[i+1];
    array[i+1]=array[r];
    array[r]=temp1;
    div_update(divs[i+1], array[i+1], "green");
    div_update(divs[r], array[r], "green");

    return i+1;
}
function quicksort(array,l,r)
{
    if(l<r)
    {
        var pi=partition(array,l,r);
        quicksort(array,l,pi-1);
        quicksort(array,pi+1,r);
    }
}
function quick()
{
    let n=a.value-1;
    quicksort(array,0,n);
    console.log(array);

    let best = document.getElementById("bc1");
    best.innerHTML = "<b>O(N*log(N))</b>";
    let average = document.getElementById("ac1");
    average.innerHTML = "<b>O(N*log(N))</b>";
    let worst = document.getElementById("wc1");
    worst.innerHTML = "<b>O(N<sup>2</sup>)</b>";
    let space = document.getElementById("sc1");
    space.innerHTML = "<b>O(1)</b>";
}