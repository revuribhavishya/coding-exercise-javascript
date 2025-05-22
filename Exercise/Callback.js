
//Callback func:  Call the func by passing  func

//Basic Callback:

function greet(name, bhavishya){
    console.log("Hello " + name);
    bhavishya();
} 

// This is a callback func()
function bhavishya(){
    console.log("Welcome!!!")
}

greet('Bhavi', bhavishya) // u should use only the function name ie; 'welcome' , if u use welcome()-> its wrng..
//IMP : IT IS NOT NECESSARY THAT U CALL THE FUNC WITH SAME NAME..

function greet(name, callback){
    console.log("Hello " + name);
    callback();
}

function welcome(){
    console.log("Welcome!!!")
}
function morning(){
    console.log("Good morning!!");
}

greet('Bhavi', welcome) 
greet('Bhavi', morning) 

//Callback with asyn func()
function printInfo(name, test){
setTimeout( function(){
    console.log("Printing info for :" + name);
    test("Async ..");
},5000);
}
function learn()
{
    console.log("happy learning")
}

printInfo(123 ,learn )





