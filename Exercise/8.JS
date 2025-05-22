//** PASS A STRING AND THE OUTPUT MUST BE IN ALPHABETICAL ORDER */
//EG : BHAVISHYA 
        //O/P : AABHHISVY

        //str.split('') will split string to char array
const order = (str) =>
    str.split('').sort((a,b)=> a>b ?  111: -117)   // the +ve , -ve values can be anything 1, -1  or 5 , -5
    .join('')   // to convert char array to String
console.log(order('bhavishya'))

//=========================
// ** ACCEPTS STRING AS PARAMETER AND COUNTS VOWELS IN THE STRING

let vowels = (str,letters = ['a','e','i','o','u'])=> 
        str.split('')
        .filter(s=> letters.indexOf(s) >-1 )
        .length
        
    console.log(vowels('Bhavishya', ['i']))
    console.log(vowels('Bhavishya', ['a']))


    //===================
// ** PRGM TO EXTRACT UNIQUE CHARACTERS FROM A STRING 

let unique = (str) =>
  [ ...new Set(str.split(''))]; // ... will convert Set to array
console.log(unique('aaaabbbccde'))

//==============
//** PRGMM : TO FIND THE FIRST NON REPEATED CHARACTER */
// eg : bbhhavishya => o/p : v

let nonRepeated = (str) =>
    [...new Set(str.split(''))]
 let final= (str)=>str[0]
console.log(final(nonRepeated('aabbdffre')))