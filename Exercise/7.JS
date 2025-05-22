// REPLACE FIRST DIGIT IN A STRING(SHOULD CONTAIN ATLEAST 1 DIGIT)  WITH '$'

let result = (str) => str.replace(/[0-9]/, '$')  // to replace 1 st digit
let repplaceEveryDigit = (str) => str.replace(/[0-9]/g, '$') // to replace all digits with $

console.log(result('1havi'))
console.log(result('1BH123vi'))
console.log(result('ha124457vi'))
console.log(result('324avi'))
console.log(repplaceEveryDigit('123Qwerty@!113')) // everu digit is replaced

//===========================
//**PRGMM :::: Given a year , report if it is a leap year. */

let leapyear= (a) => a%4 ===0 ? `${a} is leap year` : `${a} is not a leap year`
console.log(leapyear(2024));
console.log(leapyear(2023));
console.log(leapyear(2028));

//========================
//**CONVERT A COMMA SEPARATED VALUE(CSV) STRING  TO A 2D ARRAY. A NEW LINE INDICATES NEW ROW IN THE ARRAY */

const csv= (str) => 
    str.split('\n').map(row=> row.split(','));
const input= `abc,def,ghi
jkl,mno,pqr
stu,vwx,xyz`;
console.log(csv(input))


//======