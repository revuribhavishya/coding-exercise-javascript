
let laptop2={
    cpu:127,
    ram:1,
    brand:"HP 1",
    morning: function(){
        return laptop2.brand
        console.log( laptop2.brand)
    },
    compare: function(other){
        if(this.cpu > other.cpu)
            console.log(this)
        else
            console.log(other)

    }
}
//console.log(laptop2.morning())


let laptop3={
    cpu:124,
    ram:12,
    brand:"asos",
    afternoon: function(){
        return this.ram
    }
}
console.log(laptop3.afternoon())

laptop2.compare(laptop3)

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
getFastestLaptop()
