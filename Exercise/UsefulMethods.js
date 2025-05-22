// Every() :: Used when you want to check a condn on all the ele of an array and return T or F..
//eg :

let a = [1,2,3,4,5]
let result= a.every(a=> a<10)
console.log(result)

let b = [1,2,30,4,5]
let result_b= b.every(a=> a<10)
console.log(result_b)

// Some() - Check if atleast 1 ele in the array passes the condn.
let result_some = b.some(a=> a <10)
console.log(result_some);


//Find() -  finds the first ele in the array that sarisfies the cndn.
let result_find= b.find(a=> a>1)
console.log(result_find)
let result_find1 = b.find(a=>a>40)
console.log(result_find1)  // o/p : will be undefined bcoz the condn fails and the default is undefined

// IndexOf() - gives the index num
let fruits = ['apple','orange', 'banana','grapes','mango','guava']
let result_fruits = fruits.indexOf('strawberry')
console.log(result_fruits)  // o/p : undefined bcoz starberry is nt present array
console.log(fruits.indexOf('grapes'))

// lastIndexOf() - prints the last values in array
let dup_fruits = ['apple','orange', 'banana','apple','grapes','mango','guava','apple','apple']
console.log(dup_fruits.lastIndexOf('apple'))


// reverse() : 
console.log(fruits.reverse())

// sort()
console.log(fruits.sort()) // sorted all the fuits in alphabetical order by taking forst char in each ele