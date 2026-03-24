//!--named function
// function demo(){
//     console.log("s missing m");
    
// }
// demo()
//!---parametrised function
// function add(x,y){
//     let a=x+y;
//     console.log(a);  
// }
// add(2,9)
// add(12,85)
// add(80,96)
// add(100,43)
// function add(x,y,z){
//     let a=x+y+z;
//     console.log(a);
    
// }
// add(2,9,1)
// add(12,85,25)
// add(80,96,23)
// add(100,43,50)

// let a=Number(prompt("enter a num:"))
// let b=Number(prompt("Enter a num:"))
// let c=Number(prompt("Enter a num:"))
// function add(x,y,z){
//     let sum=x+y+z
//     console.log(sum);
    
// }
// add(a,b,c)

// function add(a,b,c){
//     let d=a+b+c
//     console.log(d); 
// }
// add(Number(prompt("enter a num:")),Number(prompt("enter a num:")),Number(prompt("enter a num:")))


//!--Anonymous function
//!---def--it is a function without a name 
// let a=function (){
//     console.log("s missing m always");
// }
//!---Function with expression
//!--Whenever we store the function in the variable is called function with expression
// let a=function(){
//     console.log("Function with expression");
    
// }
// a();
// let a=function (x,y){
//     console.log(x+y);
//     console.log("anonymous function") 
// }
// a(23,85)

//!--iife Immediate invoked function expression
//!--
// (function (){
//     alert("it is iife-- anonymous")
// })
// (); 

// (function demo(){
//     console.log("aaaaaaabbbbbbbbbbbbbbcccccccccccc");   
// })
// ()
//!---Arrow functions
//!---when we have only 1 parameter remove the ()
// let a=b=>{
//     console.log(b);
    
// }
// a(58);

//!--when we have only 1 line of logic we use to remove the {}
// let a=(b,c,d)=> console.log(b+c+d);
// a(8,9,6)
//!--recurssive function
// function info(){
//     console.log("recrusive function");
//     info()
    
// }
// info();10160
// function info(){
//     console.log("recrusive function");
//     if info==10:
//       console.log("recrusive function"):   
// }
//!--DEF-----recurssive function:- A function calling itself from inside of its body is called recurssive function
// let a=function info(){
//     console.log("recursive function");
//     info()
// }
// info()
// a==10
// console.log("recursive function")
// let i=1
// function info(){
//     while(i<11){
//          console.log("recurssive function",i);
//          i++
//          info();
//     }
// }
// info()
// console.log("Execution started here!!!");
// var a=50
// let b=60
// const c=70
// function info(){
//     let x=10
//     var y=20
//     let z=x+y
//     console.log(z);  
// }
// info()
//!--Nested Function
// console.log("Nested Function");
// function bank(){
//     let saving=2000;
//     function fd(){
//         let fd_balance=30000;
//         function total(){
//             let total_balance=saving+fd_balance
//             console.log(total_balance);
            
//         }
//         total()
//     }
//     fd()
// }
// bank();
//!----JS CURRYING
// function bank(a){
//     console.log("First");
//     let saving=a   
//     function fd(b){
//         console.log("Second");
//         let fd_balance=b
//         function total(c){
//             console.log("Third");
//             let total_balnce=saving+fd_balance+c
//             console.log(total_balnce);
            
//         }
//         return total;
//     }
//     return fd;
// }
// bank(2000)(30000)(5000)
// console.log('6'+'6');
// function x(a){
//     console.log("higher order function");
    
// }
// function y(){
//     console.log("call back function");
    
// }
// x(y);
// output==higher order function
// function hof(a,b,c){
//     let d=a+b
//     return c(d)
// }
// function cb(a){
//     console.log(a);   
// }
// hof(10,12,cb)

// function perimeter(p){
//     return 4*p
// }
// function area(a){
//     return a*a
// }
// function square(a,b){
//     return b(a)
// }
// console.log(square(4,perimeter));
// console.log(square(3,area));

// function perimeter(p){
//     return 4*p
// }
// function area(a){
//     return a*a
// }
// function square(a,b){
//     return a(b)
// }
// console.log(square(perimeter,5));
// console.log(square(area,6));
// function hof(a,b,c){
//     let d=a+b
//     return c(d)
// }
// function cb(a){
//     console.log(a);   
// }
// hof(10,12,cb)
//!---FIRST ORDER FUNCTION
//!--a function which will not accept any function and it will not return any value is called first order function
// function info(a,b){
//     return a+b;
// }
// info(10,5);
// !--GENERTOR FUNCTION
// function *p(){
//     yield 101;
//     yield 102;
//     yield 103;
// }
// let pid=p()
// console.log("bag",pid.next().value);
// console.log("pen",pid.next().value);
// console.log("watch",pid.next().value);
// console.log("book",pid.next().value);

// !--write a program to find factorial of the number using recurssive function
// function fact(n){
//     if (n==0){
//         return 1
//     }else {
//         return n*fact(n-1)
//     }
// }
// let factiorial=fact(6)
// console.log(factiorial);
// !--write a program the id from 101 to 3000(Genertor function)
// let i=101
// function *p(){
//     while (i<3001){
//         yield i++;
//     }
// }
// let pid=p()
// console.log("pen",pid.next().value);
// console.log("bag",pid.next().value);
// !--write a program swap two number using third variable..
// let a=10
// let b=20
// let c;
// c=a
// a=b
// b=c
// console.log(a);
// console.log(b);
// !--write a program swap 2 numbers without using third variable
// let a=10
// let b=20
// a=a+b
// b=a-b
// a=a-b
// console.log(a);
// console.log(b);