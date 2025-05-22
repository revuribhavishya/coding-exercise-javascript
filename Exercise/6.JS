//***PRGM TO FIND THE NO.OF EVEN VALUES UP TO A GIVEN NUM */

let result= (arr) => 
    arr.filter(a=> a%2===0).length;

const arrayofNum= (num) => {
    const returnArray =[];
    for(let i=1;i<=num;i++){
        returnArray.push(i)
    }
    //console.log(returnArray);
    return returnArray;
}
console.log(result(arrayofNum(6)));
console.log(result(arrayofNum(3)));
console.log(result(arrayofNum(7)));
console.log(result(arrayofNum(8)));

//===============================
//***PRGRM TO CHECK WHETHER GIVEN ARRAY OF INTEGERS IS SORTED IN ASCENDIG ORDER. */

let output= (arr) =>
    {
        for(let i=1 ;i<arr.length;i++){
            if(arr[i]>arr[i+1])
            return false;
        }
        return true;
    }
    console.log(output([1,2,3,4,5]));
    console.log(output([1,23,3,4,5]));
    console.log(output([1,2,35,4,5]));
    console.log(output([3,4,5]));

    //============================
    //*******  PRGM TO GET THE LARGEST EVEN NUM FROM ARRAY OF INTEGERS */

let largestNum =(arr) => 
    Math.max(...arr.filter(num=>num%2 ===0))
 console.log(largestNum([1,2,3,4,5]))
 console.log(largestNum([1,2,1,5]))
 console.log(largestNum([1,2,8,4,5]))
 


   /* let evenNum= (arr) =>
        arr.filter(num=> num%2 === 0)

    let largestNum=(arr) =>
        {
            for(let i=1; i<=arr.length; i++){
                if(arr[i]>arr[i+1])
                     
             //  arr[i]>arr[i+1] ? arr[i] : arr[i+1]
            }
            
        }
       // console.log(largestNum(evenNum([1,2,3,4,5,6])));
       console.log(largestNum([1,2,3,4,5,6]));

       */