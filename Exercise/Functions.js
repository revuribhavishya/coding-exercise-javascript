

function getFastestLaptop(){
    if(laptop2.cpu > laptop3.cpu)
        {
   console.log(`${laptop2.brand} is faster`)
    console.log(laptop2)
        }
else{
     console.log(`${laptop3.brand} is faster`)
     console.log(laptop3)
}
}
let laptop2={
    cpu:12,
    ram:1,
    brand:"HP 1",
    morning: function(){
        return laptop2.brand
        //console.log( laptop2.brand)
    }
}
console.log(laptop2.morning())

let laptop3={
    cpu:124,
    ram:12,
    brand:"asos",
    afternoon: function(){
        return laptop2.ram
    }
}
console.log(laptop3.afternoon())

getFastestLaptop()

//===============
let laptop={
    cpu:12,
    ram:1,
    brand:"asos",

    greetMorning: (z,x)=> z+x,
   print:function (){
    console.log(laptop.brand)
   }
    
}
laptop.print()
let result=laptop.greetMorning(1,1)
console.log(result)
//=======





let addn= (q,w) => console.log(q+w)

addn(1,2)


let print=(userN)=>{

}
console.log('Print Bhavi')




function greet(u)
{
    console.log(user)
    return `${u}`
}
let user = "test"
let str1= greet(user)
console.log(`this is ${str1}`)


let add= function(a,b){ // we don't have a name for this func instead we are assigning to add
    return a+b
}
var sum=add(5,6)
console.log(sum)


function learn(name){
    return `hello ${name}` // use only `` if u use '' it will not work
}
let name='Bhavi';
let str=learn(name);
console.log(str);





