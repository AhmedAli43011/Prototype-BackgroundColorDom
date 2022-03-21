// let animals={
//     eats:true
// };
// let rabbit={
//     jump:true,
//     __proto__:animals
// };
 // console.log(rabbit.eats);
// console.log(Object.keys(rabbit));


// for(let prop in rabbit)
// {
//     let isOwn = rabbit.hasOwnProperty(prop);
//     if(isOwn){
//         console.log(`Our ${prop}`)
//     }
//     else{
//         console.log(`inherite ${prop}`)
//     }
// }


// let head = {
//     glasses: 1
//   };
  
//   let table = {
//     pen: 3,
//     __proto__:head
//   };
  
//   let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__:table
//   };
  
//   let pockets = {
//     money: 2000,
//     __proto__:bed
//   };
//   console.log(pockets.pen)
//   console.log(bed.glasses)

// let animal = {
//     eats: true,
//     walk() {
   
//     }
//   };
  
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
//   rabbit.walk=(()=>{
//       console.log("Bhounce bhounce");
//   })
//   rabbit.walk();
//   let longEar = {
//     earLength: 10,
//     __proto__: rabbit
//   };
  // walk is taken from the prototype chain
//   longEar.walk(); // Animal walk
//   console.log(rabbit.eats)

// let user={
//     name:"ahmed",
//     surname:"ali",
//     set fullName(value){
//         [this.name,this.surname] = value.split("");
//     },
//     get fullName(){
//         return `${this.name},${this.surname}`
//     }

// };

// let admin={
//     __proto__:user,
//     isAdmin: true
// };
// console.log(admin.fullName);
// admin.fullName="awan bharthal";
// console.log(admin.fullName);
// console.log(user.fullName)
// let animals={
//     eats:true,
//     walk(){
//         // console.log("animal walk");
//     },
//     sleep(){
//         this.isSleeping = true;
//     }
// };

// let rabbit={
//     __proto__:animals
// };
// rabbit.sleep();
// console.log(rabbit.isSleeping);
// animals.sleep();
// console.log(animals.isSleeping)

// let obj = new Object();
// console.log(obj.__proto__===Object.prototype)
// console.log(obj.toString===Object.prototype.toString)
// console.log(obj.toString===obj.__proto__.toString)

// let arr=[1,2,3];
// console.log(arr.__proto__===Array.prototype)
// console.log(arr.__proto__.__proto__===Object.prototype)
// console.log(arr.__proto__.__proto__.__proto__)

// let num = 5;
// console.log(num.__proto__===Number.prototype)
// console.log(num.__proto__.__proto__===Object.prototype)

// function f(){}
// console.log(f.__proto__===Function.prototype)
// console.log(f.__proto__.__proto__===Object.prototype)

// String.prototype.show = () =>{
//   console.log(this);
// };
// "Ahmed Ali is here".show();

// if(!String.prototype.repeat){
//   String.prototype.repeat=(n)=>{
//     return new Array(n+1).join(this);
//   }
// }
// console.log("ahmed".repeat(3))

// let obj={
//     0:"ahmed",
//     1:"ali",
//     length:2,
// };
// obj.join = Array.prototype.join;
// console.log(obj.join(","))

// Function.prototype.defer=(ms)=>{
// setTimeout(this,ms);
// };
// function f() {
//   console.log("Hello!");
// }

// f.defer(1000);

// class User{
//   constructor(name){
//     this.name=name;
//   }
//   sayHi(){
//     console.log(this.name)
//   }
// }
// let user = new User("Ahmed");
// user.sayHi();
// console.log(User===User.prototype.constructor)
//  console.log(typeof User )
//  console.log(Object.getOwnPropertyNames(User.prototype))

/// ///////////method overriding /////////// ///
// class Animals{
//   constructor(name){
//     this.name=name;
//     this.speed = 0;
//   }
//   run(speed){
//     this.speed =speed;
//     console.log(`${this.name} run with ${this.speed}`)
//   }
//   stop(){
//     this.speed=0;
//     console.log(`${this.name} stand still`)
//   }
// }
// class Rabbit extends Animals{
//   hide() {
//     alert(`${this.name} hides!`);
//   }
//   stop(){
//     super.stop();
//   }
// }
// let rabbit = new Rabbit("white rabbit")
// console.log(rabbit.stop())

// /////// constructor overriding /////// //
// class Animals{
//   constructor(name){
//     this.name=name;
//     this.speed = 0;
//   }
//   run(speed){
//     this.speed =speed;
//     console.log(`${this.name} run with ${this.speed}`)
//   }
//   stop(){
//     this.speed=0;
//     console.log(`${this.name} stand still`)
//   }
// }
// class Rabbit extends Animals{
//   constructor(name){
//     super(name);
//   }
//   hide() {
//     alert(`${this.name} hides!`);
//   }
//   stop(){
//     super.stop();
//   }
// }
// let rabbit = new Rabbit("white rabbit")
// console.log(rabbit.stop())

// class Articles{
//   constructor(title,date){
//     this.title=title;
//     this.date=date;
//   }
//   static compare(articleA,articleB){
//     return articleA.date - articleB.date;
//   }
// }
// let articles =[
//   new Articles("HTML",new Date(2019,0,1)),
//   new Articles("CSS",new Date(2019,1,1)),
//   new Articles("JS",new Date(2019,11,1))
// ];
// articles.sort(Articles.compare);
// console.log(articles[2].title);

// class Rabbit{}
// let rabbit = new Rabbit();
// console.log(rabbit instanceof Rabbit)

// class Animals{
//   static [Symbol.hasInstance](obj){
//     if(obj.canEat)
//     return true
//   }
// }
// let obj ={
// canEat:true
// };
// console.log(obj instanceof Animals)

// function Rabbit() {}
// let rabbit = new Rabbit();

// // changed the prototype
// Rabbit.prototype = {};

// // ...not a rabbit any more!
// console.log( rabbit instanceof Rabbit )

// function first() {
//   console.log(1)
// }

// function second(callback) {
//   setTimeout(()=>{
//     console.log(2);
//     callback();
//   },0)
// }

// function third() {
//   console.log(3)
// }
// first();
// second(third);


// function asynchronousRequest(args, callback) {
//   // Throw an error if no arguments are passed
//   if (!args) {
//     return callback(new Error('Whoa! Something went wrong.'))
//   } else {
//     return setTimeout(
//       // Just adding in a random number so it seems like the contrived asynchronous function
//       // returned different data
//       () => callback(null, { body: args + ' ' + Math.floor(Math.random() * 10) }),
//       500
//     )
//   }
// }

// // Nested asynchronous requests
// function callbackHell() {
//   asynchronousRequest('First', function first(error, response) {
//     if (error) {
//       console.log(error)
//       return
//     }
//     console.log(response.body)
//     asynchronousRequest('Second', function second(error, response) {
//       if (error) {
//         console.log(error)
//         return
//       }
//       console.log(response.body)
//       asynchronousRequest(null, function third(error, response) {
//         if (error) {
//           console.log(error)
//           return
//         }
//         console.log(response.body)
//       })
//     })
//   })
// }
// callbackHell()

// const promise = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('Resolve asynchornous code'),2000
//   })
// })
// promise
// .then((firstResponse)=>{
//   return firstResponse + '   awaiting moment'
// })
// .then((secondResponse)=>{
//   console.log(secondResponse)
// })

// function getUsers(onSuccess) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Handle resolve and reject in the asynchronous API
//       if (onSuccess) {
//         resolve([
//           { id: 1, name: 'Jerry' },
//           { id: 2, name: 'Elaine' },
//           { id: 3, name: 'George' },
//         ])
//       } else {
//         reject('Failed to fetch data!')
//       }
//     }, 1000)
//   })
 
// }
// getUsers(false)
// .then((response) => {
//   console.log(response)
// })
// .catch((error) => {
//   console.error(error)
// })

// fetch('https://api.github.com/users/octocat')
//   .then((response) => {
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => {
//     console.error(error)
//   })

// async function getUser() {
//   return {}
// }
// console.log(getUser())

// let arr=["ahmed","ali","awan"]
// for(let i in arr){
//   console.log(i)
// }
// for(let j of arr){
//   console.log(j)
// }
// for(let i=0;i<arr.length;i++){
 
//   console.log(arr[i])
//   console.log(i);
// }

// let element = document.querySelectorAll('ul>li :hover');
// for(let elm of element){
//   console.log(elm.innerHTML)
// }

// let inputs = table.getElementsByTagName('input');

// for (let input of inputs) {
//   console.log( input.value + ': ' + input.checked );
// }\
// document.body.style.backgroundColor = 'fuchsia';
// console.log(document.body)
// console.dir(document.body)
// document.body.nodeType;
// console.log(document.body)

// let button = document.getElementById("changeBackground");
// button.addEventListener('click',()=>{
//     document.body.style.backgroundColor = 'red'
// })