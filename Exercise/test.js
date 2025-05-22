
function sum() {
    var a = 2;
    var b = 5;
    const c = a + b;
    console.log(`addition of ${a} and ${b} is 
    ${c}`)
}
//sum()       // you must the call func

function whileloop(){
 let i=1;
 while(i<=5)
     {
         console.log("Hi" + i)
         i++
     }
 }

function doWhileLoop(){
    let i=1
    do{
        console.log("Hi" + i)
        i++
    }
    while(i>6)

    }

     
let clge={
    
 StuName : "Bhavi",
 StuId : 12,
  subject :{
    mainsubject: "chemistry",
    2:"physics",
    3:'Maths'
  },
  timetable:{
    english:"8pm",
    maths:"6pm",
    2:"2pm",
    history: "3pm"
  }
}

for(var key in clge){
    console.log(key,clge[key]) // prints all the keys in clge
}

for(var key in clge.subject){
    console.log(key,clge.subject[key]) // prinyts all the keys in only in "subject", nt anything else
}



console.log(clge.subject.mainsubject?.length)
delete clge.timetable.history
console.log(clge.timetable)
console.log(clge.timetable[1]) //undefined , bcox no key with '1'
console.log(clge.timetable[2]) //prints 2pm

console.log(clge.subject['2'])
//our input has both int and char, so key containing int is printed first

