console.log(1)
console.log(2)
console.log(3)
setTimeout(()=>{     //asynchronous
    console.log("Callback func")
}, 2000  );

console.log(4)
console.log(5)

// 12345 Callback func , the setTimeout will be executed last bcoz it is asynchronous