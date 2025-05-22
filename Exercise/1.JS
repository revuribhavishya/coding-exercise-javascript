// Check 2 nums and return true if one of the num is 100 or if sum of 2 nums is 100


// CORRECT PRGM
let program=(a,b) => a===100 || b===100 || (a+b) ===100 ;
console.log(program(0,100));
console.log(program(50,50));
console.log(program(50,0));



// PROGRAM I WROTE has more lines
a=10,
b=5
result = (a===100 || b===100 || (a+b) ===100)  ? "true" : "false"
console.log(result)