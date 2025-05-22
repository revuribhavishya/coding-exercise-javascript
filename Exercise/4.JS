//***  CREATE A NEW STRING FROM THE GIVEN STRING TAKING 1ST 3 AND LAST 3 CHARS FROM THE STRING AND ADDING.
//***STRING LENGTH MUST BE 3 OR MORE OTHERWISE ORIGINAL STRING IS RETURNED.          ***/


let newString=(str) =>
    //console.log(str.length)
    str.length <   3 ? str : str.slice(0,3)+ str.slice(-3) // here -3 means last 3 chars from end

console.log(newString('Bhavishya'))
console.log(newString('Bhav'))
console.log(newString('abc'))
console.log(newString('Bh'))

//===============================================
//******  PRGM TO EXTRACT FIRST HALF OF THE STRING OF EVEN LENGTH ******/

let output=(str) =>
    (str.length)%2 ===0 ? str.slice(0,str.length/2) : str
console.log(output('abcdef'));
console.log(output('abcdefg'));

//==================================
//*******CONCATINATE 2 TRINGS EXCEPT THEIR FIRST CHARACTER**************** */

let result = (str1,str2) =>{
   //console.log(str1.slice(1,str1.length));
    str1.slice(1,str1.length) + str2.slice(1,str2.length)
}
console.log(result('bhavi' , 'shya')) 