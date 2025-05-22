// IMP ****Function Overloading is NOT  possible in JS. If you try to overload it will REPLACE the previous fuunc

function print(){
     console.log("Hi")
}
function print(name){
    console.log("Hi", name)
}
function print(name,age){
    console.log("Hi "+ name + " age: " + age)
}

print()   // o/p : Hi undefined age: undefined
// When u call print() -> it goes to print(name,age) bcoz the print() is replaced with print(name) andn this is replaced with print(name,age)
// when u try to pass parameter..
print("Bhavi", 29)