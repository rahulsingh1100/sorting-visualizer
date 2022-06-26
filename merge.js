function mergesort1(array,l,mid,r)
{
    let n1=mid-l+1
    let n2=r-mid

    let arr1=[]
    let arr2=[]
    let b=0
    for(let i=0;i<n1;i++)
    {
        div_update(divs[l+i], array[l+i], "red");
        arr1[i]=array[l+i];
        if(b<n2){
         div_update(divs[mid+1+b], array[mid+1+b], "red");
         arr2[b]=array[mid+1+b];
         b++;
        }
    }
    console.log(arr2)
    let i=0
    let j=0
    let k=l

    while(i<n1 && j<n2)
    {
        if(arr1[i]<arr2[j])
        {
            array[k]=arr1[i];
            div_update(divs[k], array[k], "green");
            i++
            k++
        }
        else
        {
            array[k]=arr2[j];
            div_update(divs[k], array[k], "green");
            j++
            k++
        }
    }
    while(i<n1)
    {

        array[k]=arr1[i]
        div_update(divs[k], array[k], "red");
        div_update(divs[k], array[k], "green");
        i++
        k++
    }
    while(j<n2)
    {
        array[k]=arr2[j]
        div_update(divs[k], array[k], "red");
        div_update(divs[k], array[k], "green");
        j++
        k++
    }
}
function mergesort(array,l,r)
{
    if(l<r){
     var mid=parseInt((l+r)/2)
     div_update(divs[mid], array[mid], "yellow");
     mergesort(array,l,mid)
     mergesort(array,mid+1,r)
     mergesort1(array,l,mid,r)
    }
}
function merge()
{
    let n=a.value;
    mergesort(array,0,n-1);

    let best = document.getElementById("bc1");
    best.innerHTML = "<b>O(N*log(N))</b>";
    let average = document.getElementById("ac1");
    average.innerHTML = "<b>O(N*log(N))</b>";
    let worst = document.getElementById("wc1");
    worst.innerHTML = "<b>O(N*log(N))</b>";
    let space = document.getElementById("sc1");
    space.innerHTML = "<b>O(N)</b>";
}