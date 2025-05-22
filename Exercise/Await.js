//Async func will always return Promise

//
const qwe= new Promise((_,reject)=>{
    reject(new Error("This is an error"))
}
)
qwe.then(Msg=>console.log(" msg is : " , Msg))
.catch(errorMsg=>console.log("Error msg is : " , errorMsg))


// 1. Aysnc func without await
async function f1(){
    console.log("This is async func without Await")
    return 42;
}

f1()
.then(result=> console.log("result :" + result))


// Async func without await but with error
async function f2(){
    console.log("This is async func without Await but with ERROR")
     throw new Error("This is my error");
}

f2()
.catch(error=>console.log ("Error is :" + error))



// async func with resolve/rejecy promise.
function f3(){
    return new Promise((reject, resolve)=>{
       console.log("----------")
       if(50>10){
           resolve("A is greater than 10")
       }
       else
           reject(" a is less than 10")
       
    })
}

async function test(){
   try{
       const q=await f3();
       console.log(q)
   }
   catch(error){
       console.log(error)
   }
}

const abc = new Promise((resolve, reject) => {
    reject(new Error("This is an error"))
})

abc.then((res) => {
    console.log("THis is then", res)
}).catch((err) => console.log("this is catch", err))
// *** NEED CLARITY ON THIS ****

// const callback = (okay, notOkay) => {
//     okay("This is resolved")
//     notOkay(new Error("Testing catch block"))
// }
// const catchPromise = () => {
//     return new Promise(callback)
// }

// const testCatch = async () => {
//     try {
//         const promise =  await catchPromise();
//         console.log("Resolve, ", promise)
//     }
//     catch(error) {
//         console.log("Error in catch", error)
//     }
// }

//  testCatch()



