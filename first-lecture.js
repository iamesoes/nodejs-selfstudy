
//1
// const fs = require('fs'); //file system module

// console.log("helloo");

// fs.writeFileSync("file-fs.txt","This is an auto text.")


//2
// const summarize = (username, age, hobby) =>{
//     return ('Name is ' + username +' age is ' + age+ ' has hobby: ' + hobby);
// };

// console.log(summarize('leyla',22,true));


//3
// const add = (a,b) => {
//     return a+b;
// };

// console.log(add(2,9));


//4 easier definition of functions (same with 3)
// const add = (a,b) =>a+b;
// console.log(add(2,9));


///5
// const person = {
//     name: 'leyla',
//     age:22,
//     greet () {
//         console.log("Hello I am " + this.name + " and I am " + this.age + " years old.");
//     }
// };

// person.greet();


//6
// const hobbies = ['swim','ski'];
// for(let hobby of hobbies){
//     console.log(hobby);
    
// }

// hobbies.push('programming');
// console.log(hobbies.map(i => "Hobby: " + i));

// const copiedArray = hobbies.slice();
// console.log(hobbies.map(i => "Hobby: " + i));

// const notcopiedArray = [hobbies];
// console.log(notcopiedArray.map(i => "Hobby: " + i));

// const newcopiedArray = [...hobbies];
// console.log(newcopiedArray.map(i => "Hobby: " + i));


//7 - specificely defining the parameters that we will use
// const person = {
//     name: "Eso",
//     age : 5
// };

// const printName = ({name}) => {
//     console.log(name);
// }

// printName(person);


//8 
// const person = {
//     name: "Eso",
//     age : 5
// };

// const{name, age} = person; //it will create 2 constant variable. name of the variables should be same
// console.log(name, age);


//9 async vs sync
// setTimeout(() => {
//     console.log("Time is over.");
// }, 1000);

// console.log("hi!");
