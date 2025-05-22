
// Set is Class , below stmt is a constructor as we are using new keyword
//Set DOES NOT allow any DUPLICATES
// new Set("Bhavishya") => this is correct
//if u try to use[] ie; new Set["Bhavishya"] => there will be no compile tym bt generates run tym error

let name = new Set("Bhavishya");
console.log(name)    // length and each character is printed  .. o/p will be 7 bcoz 2 char 'h' ,'a' are duplicates
name.add("Revuri")
name.add(1)       // U can add values to set using add method
console.log(name) 
for(let n of name){
    console.log(n)
}
name.forEach(result => {
    console.log(`result is ${result}`)
});

name.add('c')
name.add('d')

//the o/p for for -of and for - each is same
// for of gives keys and for in gives values in Array

//to check if a num is present in a set or not we huse has()
console.log(name.has('v'))    /// T
console.log(name.has('Bhavishya'))   // F  bcoz characters are stored
console.log(name.has('1'))   // F  bcoz '' teats as string
console.log(name.has(1))     // T bcoz 1 is a integer and do not need ''
console.log(name.has('5'))      //F