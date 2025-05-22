const function1=() =>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                reject(" \n Data from funcion 1")
            },100)
        })
}

const function2=() =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("\n Data from funcion 2")
        },100)
    })
}

const function3=() =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("\n Data from funcion 3")
        },50)
    })
}


// Promise.any : Used to handle multiple promises and resolving with a value of 1st fulfilled promise. Waits until 1st promise is fulfilled.  
// Always gives the 1st resolved promise
Promise.any([function1(),
function3()])
.then(result=> console.log("1st successful result " + result))
.catch(error => console.log("All promises rejected" + error))



// Only the rejected promise is dispalyed not all the the promises..
Promise.all([function1(),
    function2(),
    function3()])
    .then(dataArray=>console.log('All data from diff funcs' + dataArray))
    .catch(error=>console.error('Errorr in promise' + error))


// Use AllSettled if u want to get the status of all the Promises either resolved/fulfilld or rejected.
Promise.allSettled([function1(),
function2(),
function3()])
    .then(results=>{
        results.forEach(result=> {
            if(result.status === 'fulfilled'){
                console.log("value : " + result.status)
            }
            else{
                console.log("Reason for rejection " + result.reason)
            }

        })
    })


    // Race : Who 1st wins the promise ie; to identify which promise executes fast that Promise wins the race..
    // No matter if the promise if resolved or rejected the 1st executed(less time) will win the race.
// In above func, the SetTimeout for func1 is 100MilliSec , therefore it executes faster and wins the race.. 
// The result will only be one primise, eg : If there are 2 promises with same time, the 1st promise will win the race
Promise.race([function1(),
    function2(),
    function3()])
    .then(result=> console.log("Race Result: " + result))
    .catch(error => console.log("Race Error:"+ error))
       

