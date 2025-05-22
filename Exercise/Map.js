// MAP : key value pair, CANNOT have duplicates keys, if so , the value will be overridden
// map can have duplicates values but for a different key
//We use set() to add ele to map bcoz set DOESNOT allow duplicates , and map mean no duplicate keys ,, so we use set() and not add()
// In JAVA , we use PUT() to add and GET() to fetch

let map = new Map();
map.set('name','Bhavi')
map.set("tech" , "JS")
map.set("tutorial", "Telusko")
console.log(map)
console.log(map.keys())  // prints all keys
console.log(map.values())  // prints all values

//to get the value  of a particluar keyuse get()
console.log(map.get('name'))

//to check of the map has an ele or not use has()
//IMP : has(KEYS) 
console.log(map.has('name'))  // T +> bcoz name key is present
console.log(map.has("JS")) // F bcoz , JS is a value and not key

//adding more ele
map.set("age", "Telusk29")
map.set("name", "bhavishyaRevuri")  // here value is overridden with new value bcoz of same key
map.set("lastName" , "Telusko")
console.log(map)

for(let [k,v] in map){
     console.log(k ,":", v);
}


///IMP :  When to use Map? eg : u have an array with 10 nums  and multiply each with 5, 
//generally the logic is using for/while loop itterating through each ele using index and multipying..
//BUT we use MAP in JS if you want to perform same operation on every ele of teh array.

let a=[1,2,3,4,5];
let output=a.map(e=> e*2) // Map func will create a new array that we specify
console.log(output) // we got the o/p wthout using loops

