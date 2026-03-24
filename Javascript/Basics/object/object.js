// !--USING LITERAL WAY--!//
// let emp={
//     name:"dilleswari",
//     city:"hyderabad",
//     age:20
// }
// console.log(emp);
// console.log(emp.name); //!--READ--!//
// console.log(emp.city);

// emp.skill="python"
// console.log(emp); //!---INSERT--!//

// emp.age=19
// console.log(emp);

// delete emp.age
// console.log(emp);


// !--USING OBJECT CONSTRUCTOR
// let data=new Object({name:"sravani",age:20})
// console.log(data);
// console.log(data.name);
// data.city="hyderabad"
// console.log(data);

// !---using function as a constructor
// function cake(cname,cprice){
//     this.cake_name=cname;
//     this.cake_price=cprice;
// }
// let c1=new cake("black forest",500)
// console.log(c1);
// let c2=new cake("red veivlet",600)
// console.log(c2);
// let c3=new cake("White forest",1000)
// console.log(c3);

// let student={
//     name:"dilleswari",
//     age:20,
//     skill:["html","css","js"]
// }
// console.log(student);
// student.skill.forEach((v)=>{
//     console.log(v);
    
// })

// let student=[{
//     name:"Anish",
//     skill:["html","css","js"]
// },{
//     name:"arvind",
//     skill:["java","sql","python"]
// },{
//     name:"amit",
//     skill:["manual","selenium"]
// }]
// student.map((v)=>{
//     v.skill.map((v)=>{
//     console.log(v);
//     })
// })

// student.map((v)=>{
//     // console.log(v.skill);
//     v.skill.forEach((val)=>{
//         console.log(val);
        
//     })
// })



// let user={
//      student:[{
//     name:"Anish",
//     skill:["html","css","js"]
// },{
//     name:"arvind",
//     skill:["java","sql","python"]
// },{
//     name:"amit",
//     skill:["manual","selenium"]
// }]
// }
// // console.log(user.student);
// user.student.map((v)=>{
//     v.skill.forEach((v)=>{
//         console.log(v);
        
//     })
// })


// output=
// html
// object.js:92 css
// object.js:92 js
// object.js:92 java
// object.js:92 sql
// object.js:92 python
// object.js:92 manual
// object.js:92 selenium


// let user={
//      student:[{
//     name:"Anish",
//     skill:["html","css","js"],
//     mock:{
//         tech:1,
//         comm:1
//     }
// },{
//     name:"arvind",
//     skill:["java","sql","python"],
//     mock:{
//         tech:2,
//         comm:2
//     }
// },{
//     name:"amit",
//     skill:["manual","selenium"],
//     mock:{
//         tech:3,
//         comm:3
//     }
// }]
// }

// console.log(user.student);
// user.student.map((v)=>{
//     console.log(v.mock.tech);
// }) 

// let user={
//      student:[{
//     name:"Anish",
//     skill:["html","css","js"],
//     mock:{
//         rating:[{
//             tech:3,
//             comm:3
//         }]
    
//     }
// },{
//     name:"arvind",
//     skill:["java","sql","python"],
//     mock:{
//         rating:[{
//             tech:2,
//             comm:3
//         }]
//     }
// },{
//     name:"amit",
//     skill:["manual","selenium"],
//     mock:{
//         rating:[{
//             tech:1,
//             comm:3
//         }]
//     }
// }]
// }
// console.log(user.student);
// user.student.map((v)=>{
    // console.log(v.mock);
    // console.log(v.mock.rating);
    
//     v.mock.rating.map((val)=>{
//         console.log(val.tech);
        
//     })
// })



// let emp={
//     name:"sravani",
//     age:24,
//     skill:"html"
// }
// console.log(emp);
//! 1.) --keys : it is used to get the key name in the output
// let empKeys=Object.keys(emp);
// console.log(empKeys);
// !2.)---value:it is used to get the value of keys
// let empValues=Object.values(emp);
// console.log(empValues);
// !3.)--freeze --it is used to user can't change the values
// Object.freeze(emp);
// delete emp.skill
// emp.age=27
// emp.city="hyderabad"
// console.log(emp);
// !4.)--isFrozen:it is used to check the data is freeze or not
// console.log(Object.isFrozen(emp));

// !5.)--seal:itb is used for update the values of keys
// Object.seal(emp)
// emp.city="chennai"
// delete emp.skill
// emp.age=25
// console.log(emp);
// !--6.)isSealed:it is used to check the data is seal or not
// console.log(Object.isSealed(emp));
// !----7.) entries:it is used to get the data in the form of array
// console.log(Object.entries(emp));
// !--8.)hasown--it is used to check the key is present or not   and it will return boolean values
// console.log(Object.hasOwn(emp,"age"));
// !---9.)---hasownproperty
// console.log(emp.hasOwnProperty("age"));
// let product={
//     brand:"puma",
//     price:4000
// }
// !--onject.assign():it is used to get copy the refernces of the object
// console.log(product,"Original product");
// let productCopy=Object.assign(product)
// console.log(productCopy,"productcopy");
// productCopy.brand="h&m";
// console.log(productCopy,"productcopy after the update");
// console.log(product);


// !---Date & Time----!///
// let ref=new Date()
// // console.log(ref);
// console.log(ref.getDate());
// console.log(ref.getDay());
// console.log(ref.getFullYear());
// console.log(ref.getHours());
// console.log(ref.getMilliseconds());
// console.log(ref.getMinutes());
// console.log(ref.getMonth());
// console.log(ref.getSeconds());
// console.log(ref.getTime());
// console.log(ref.toDateString());
// console.log(ref.toLocaleDateString());

// !----Math---------------
// let a=Math.PI;
// let a=Math.floor(20.3)
// let a=Math.ceil(20.9)
// let a=Math.round(20.7)
// let a=Math.min(88,98,56,25)
// let a=Math.max(88,98,56,25)
// let a=Math.random()
// let a=Math.floor(Math.random()*1000000)
// let a=Math.sqrt(4)
// let a=Math.cbrt(27)
// let a=Math.pow(53,2)
console.log(a);

