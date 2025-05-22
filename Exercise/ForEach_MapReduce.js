let num=[1,2,3,4,5]
num.forEach((n)=>{
    console.log(n)
});

//filter method
num.filter(n => n%2==0)  // filters the ele in array based on condn
    .forEach( n => 
    console.log(`filter ${n}`)
     )

     //map method
num.filter(n => n%2==0)  // filters the ele in array based on condn
     .map(n=> n*2)       // multiplication is applied on the filtered array ie; only even num are multiplied
     .forEach( n => 
    console.log(`filter ${n}`)
      )

//Reduce method
let result =num.filter(n=> n%2==0)
    .map(n=> n*2)
    .reduce((a,b)=> a+b)
 console.log(`result is ${result}`)
 
 //Reduce
 let b=[1,2,3,4,5]
 let arraysum=b.reduce((sum,b)=>sum+b,0);
 console.log(`arraysum is ${arraysum}`)


 ///filer
 let employee= [
    {name:"Bhavi",age:25,gender:"F"},
    {name:"Ravi",age:75,gender:"M"},
    {name:"Guddu",age:2,gender:"F"},
    {name:"Potti",age:5,gender:"F"},
    {name:"Chitti",age:30,gender:"M"}, 

 ]
 let empname =employee.filter((emp)=>{
    return emp.gender==="M" && emp.age>20    // ju must use '===' here
 })
 console.log(empname)

 //Another ex of Reduce()
 let cartItems=[
    {name:"jeans",price:500},
    {name:"tshirt",price:5000},
    {name:"bag",price:50},
    {name:"belt",price:200},
    {name:"skirt",price:400},
 ]

 let totalBill = cartItems.reduce((total,item)=>total+ item.price,0)
 console.log(totalBill)

