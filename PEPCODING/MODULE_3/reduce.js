let a=[3,4,5];

function div(a,b)
{
    return a/b;
}

let reducedValue = a.reduce(div);
console.log(a);
console.log(reducedValue);

//myReduce

function myReduce(arr, f)
{
    let ans= arr[0] ;

    for (let i = 1; i < arr.length; i++) {
      ans = f(ans, arr[i]);
    }
  
    return ans;
  }
