//Prgram to get the extension of FileName

// Check LSice.JS file. 
//slice(StartIndex, End Index)
// slice: https://www.geeksforgeeks.org/javascript-array-slice-method/

const getFileExtension= (str) => str.slice(str.lastIndexOf('.')) ; 
// lastindexOF will return the index, lastIndex bcoz it will choose the last index if there a duplicate values
console.log(getFileExtension('index.html'))
console.log(getFileExtension('index.js'))
console.log(getFileExtension('index.java'))
console.log(getFileExtension('webpack.config.js')) // LastIndex helps here bcoz there are 2 dots and last dot is picked

                    //*** USE CAN USE A FUNCTION WITH SAME LOGI AS BELOW ***/
                    // It will work but there is 3 lines , we can do the same in 1 line as above.
 function getExtension(str){
     return str.slice(str.lastIndexOf('.')) ; 
 }
console.log(getExtension('hello.world'))



//=============
//PROGRAM : ** GET THE CURRENT DATE, MONTH AND YEAR

let getdate= (date = new Date)=>{
    const days= date.getDate();
    const month= date.getMonth();
    const year= date.getFullYear();
    return `${days}/${month}/${year}`

}
console.log(getdate());

