function fn1(x,y)
{
    console.log("Some Arrow");
    return x+y;

}

let fa1 = (x,y) =>
{
    console.log("Some Process");
    return x+y;
}

function fn2(x)
{
    console.log("Some Process");
}
let fa2 = x =>
{
    console.log("Some Process");
    return 2*x;
}

function fn3(x){
    return 3*x;
}

let fa3= x=> 3*x;

fa3(2);