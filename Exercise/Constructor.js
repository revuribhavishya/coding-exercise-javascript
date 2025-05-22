 function LearnConstructor(name, tech, work){
        this.name=name;
        this.tech= tech;
        this.work= function(){
            console.log(`Working on ${work} `)
        }

      // console.log(`Inside LearnConstructor name is : ${name}`)
      // console.log(`Inside LearnConstructor tech is :  ${tech}`)
}  



let user= new  LearnConstructor('Bhavi', 'JS' , 'reading');
let user2= new  LearnConstructor('Chitti', 'java');

user.work() // user obj is used bcoz, contructor LearnCOntructor is stored in a var called user. and we are calling work using that obj
console.log(user)
console.log(user2)
