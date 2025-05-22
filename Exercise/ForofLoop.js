//
// forOF gives keys and forIN gives values in Array



let array_fruits =[]
array_fruits.length=10  // you can define the length of array 
console.log(array_fruits.length)
array_fruits[0]='orange'
array_fruits[1]='mango'
array_fruits[2]='cherries'
array_fruits[15]='apple'  // array size is 15, bt we gave 16th ele as Apple,, all 15 ele will be empty items.. size is grows 
console.log(array_fruits)
console.log(`length of array is ${array_fruits.length}`)

for(let n of array_fruits){
    console.log(`values are printed ${n}`)   //values are printed u can also print using Key& for in loop
}
array_fruits[13]='banana'
for(let n in array_fruits){
    console.log(` indexes that has values are printed ${n}`)     // prints indexes that has values
}
for(let keys in array_fruits){
    console.log(`values of the array are ${keys}`) // prints indexes that has values//
}

for(let key in array_fruits){
    console.log(` ${key}`)   // if u use KEYS or KEy dpesn't matter
}

for(let key in array_fruits){
    console.log(`values of the array are ${array_fruits[key]}`)
}

// KEY is not a keyword in JS.. u can provide anything.. above n, keys, key are used bt the o/p is same that prints indexes

for(let test in array_fruits){
    console.log(` ${test}`)   // if u use KEYS or KEy dpesn't matter
}

//IMP :: In Arrays we mostly use  For-OF loop bcoz we get the values directly instead getting the value from key