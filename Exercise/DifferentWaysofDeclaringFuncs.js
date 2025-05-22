
// Type : 1
function add(a,b){
    return a+b
}
console.log(add(1,2))

// Type 2  : Anonymous func with Arraow func
 let result = (a,b) => a+b  // 
console.log(result(1,2))

//Type 3: Constructor func
let output = new Function('a','b' , 'return a+b')  // though the nums are int , u jave to use ''
console.log(output(1,2))


//Type 4 : IIFE (Immediately invoked func expresssion)
// (function() {
//     console.log(" IIFE");
// })
// ();

//Type 5 : Generator func:

//Type 6 : Recursive func

//type 7 : Higher order func

function addition(a,b){
    return a+b;
}
function mutiply(a,b){
     return a*b;
}
function operate(funcName,a,b){
     return funcName(a,b);
}

console.log(operate(addition,5,2));
const a = operate(mutiply,5,2)
console.log(a);
