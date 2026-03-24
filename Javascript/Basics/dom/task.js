// let a=document.getElementById("btn")
// // a.style.backgroundColor="black"
// console.log(a);
// // document.getElementById("btn").addEventListener("click",()=>{
// //     a.style.backgroundColor="black"
// })

// document.getElementById("btn").addEventListener("click,")
// let a=document.getElementById("btn")
// console.log(a);
// document.getElementById("btn").addEventListener("click",()=>{
//     alert("i am using dom")
// })


// document.getElementById("btn").addEventListener("click",()=>{
//     alert("I am using event")
// })

// let a=document.getElementById("btn")
// let mode="dark"
// btn.addEventListener("click",()=>{
//     if(mode=="dark"){
//         mode="light"
//         document.body.style.backgroundColor="black";
//         document.body.style.color="white"
//         btn.textContent="light mode"
//     }else{
//         mode="dark";
//         document.body.style.backgroundColor="white";
//         document.body.style.color="black"
//         btn.textContent="light mode"
//     }
// })
let a=document.getElementById("btn")
btn.addEventListener("click", ()=>{
    let b=Math.floor(Math.random(123456)*100000)
    document.b.body.style.backgroundColor=`#${b}`
    a.textContent='colorcode-${b}'
    
})
// let a=document.getElementById("btn")
// let b=Math.floor(Math.random()*100000)
// b.body.style.backgroundColor="#${b}"
