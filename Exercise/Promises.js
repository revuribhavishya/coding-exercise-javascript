
// promises

const a= new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            const randomVal= Math.random();
            randomVal>0.5 ? resolve('Success'+randomVal) : reject(new Error("value is samll" , randomVal))

        },2000)
    }

)
//
a.then(result=> console.log(`promise fulfilled with value`,result))
.catch(error=> console.error('promise is rejected with error',error))

  