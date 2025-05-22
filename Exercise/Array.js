
let msg=['hello', 'world','welcome' ,'10' , '1', '2'] // u can have differnt types of data like string, num in an array
console.log(msg)
    msg[3]='to'  // value alredy exists at index 3, in such cases value is REPLACED
    console.log(msg)
    msg[1]=1
    console.log(msg)
    msg.push({tech:'JS'},{days:30})
    console.log(msg)
    msg.push(function test(){
        console.log("I'm within function")
    })
    console.log(msg)
    msg[8]()
    


let a=[1,2,3]
console.log(a)
console.log(a.length)
a.push(4) // ele is pushed ONLy at the end.. like stack
console.log(a)
console.log(`value at index 1 is ${a[1]} `)
a.pop()   // last ele is popped .. ie; LIFO
console.log(a)
a.shift()  
console.log(a)   // Ur shifting first and then printing.. Shifting will remove the 1st ele
let b=[5,6,7]
console.log(b)
console.log(b.shift())  //  shifting and printing at the same tym..// the shift ele is first ele ie; 5 , so 5 is printed
// inorder to print the array after ele is shifted.. u should print 
console.log(b)

// POP will remove ele from the end, shift wil remove ele fom the start
b.unshift(4)
console.log(b)

b.push(8,9,10)
console.log(b)
console.log(b.splice(2,2,11)) // first param is the index and the 2nd param is how many ele to remove, 3rd param is the new ele u want to add
console.log(b)
b.push(12,'test',14,'hi')  // you can add multiples values in a singe push method
console.log(b)


