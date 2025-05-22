//**PRGM TO FIND OUT WHICH ONE IS NEAR TO 100 */

let result= (a,b) => (100-a) < (100-b) ? 'a is close from 100' : 'b is close to 100';
console.log(result(520,80));

//========================
//** PRGM TO CHECK IF A GIVEN STRING CONATINS 2 TO 4 OCCURANCES OF A SPECIFIED CHARACTER */

let output= (str , char) =>{
    console.log(str.split(''));  // this will split the string to Char Array
     str.split('').filter(count => count=== char).length;
}
let charFrom2To4 = (str,char)=>
    output(str,char) >=2 && output(str,char) <=4;  // based on the condn it will return 'T' or 'F' .. No need to add retuen type

console.log(charFrom2To4('ohhhh' , 'h'));
console.log(charFrom2To4('ohhhhhhh' , 'h'));
console.log(charFrom2To4('ohh' , 'h'));
console.log(charFrom2To4('ohhh' , 'h'));

//==============================
//** PRGM TO TO FIND OUT NO.OF EVEN DIGITS IN AN ARAAY OF INTEGERS */

let evnDigits = (arr) =>              // (arr) is crct , [arr] is wrng it will give compiler error
    arr.filter(num=> num%2===0).length
console.log(evnDigits([1,2,3,4,5]))
console.log(evnDigits([12,25,36,41,59]))
console.log(evnDigits([1,22,31,41,51]))
console.log(evnDigits([12,22,32,42,52]))