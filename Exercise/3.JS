//** CREATe a simple string and add new to the string ,the string already start with new , then return the original string  */


let String= 'Bhavi'
let newString= 'new' + String;
console.log(newString)

let newString2= (str678) =>
    str678.indexOf('new')===0 ? str678 :'new ' + str678 ;   
// instead of 'new' + str .. we can use `new ${str}`
console.log(newString2('Revuri'))
console.log(newString2('new Bhavi'))