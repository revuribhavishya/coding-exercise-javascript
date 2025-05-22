let numArray =[1,2,3,4]
console.log(numArray)
let a = numArray[0]
let b = numArray[1]
let c = numArray[2]
let d = numArray[3]
console.log(a )

// Instead of storing each value in var , which leads to multiple lines.. we use DESTRUCTRUCTING..in a single line

let [e,f,g,h] =numArray
console.log(`values of e is ${e} ,f is  ${f}, g is ${g}, h is  ${h} `)

let [i,j,,k] =numArray  // you are leaving 3rd ele, and assigning 4th ele to 'k' var IMP:: Comma(,) is mandate
console.log(k)

// if you remove (,) 3rd ele '3' is assigned to 'n'
let [l,m,n] =numArray
console.log(n)

// SWAPING 2 VAR USING ARRAY DESTRUCTURING
let x = 1;
let y = 2;
[x,y] = [y,x]
console.log(x,y)

//=====
let str= "how are you Bhavi Revuri".split(' ');
console.log(str)
let [q,r,s] = str;
console.log(q)
let[u, , , ...v] =str // no var is assigned to 'are','you' and '...' is used to add both Bhavi Revuri to one var..
//IMP: 3 dots are must .. it appends rest of the ele .. even if you have 'bhargavi' after Revuri, it will print 'Bhavi Revuri Bhargavi'
console.log(v)


