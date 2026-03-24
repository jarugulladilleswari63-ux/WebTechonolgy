let gp=document.getElementById("gp")
let parent=document.getElementById("parent")
let child=document.getElementById("child")
// !--------------bubbling phase------------- when you click on child it will get triggered by parrent and child
// gp.addEventListener("click",function (){
//     console.log("Gp is triggered");
//     gp.style.backgroundColor="red"
// })
// // !---if you click at parent it will get triggered by parent and grandparents
// parent.addEventListener("click",function (){
//     console.log("parent is triggered");
//     parent.style.backgroundColor="yellow"
// })
// // !---if you click at child it will get triggered by parent and gp
// child.addEventListener("click",function (){
//     console.log("child is triggered");
//     child.style.backgroundColor="blue"
// })
// !--------------capturing phase------------- 
// gp.addEventListener("click",function (){
//     console.log("Gp is triggered");
//     gp.style.backgroundColor="red"
// },true)
// // !---if you click at parent it will get triggered by parent and grandparents
// parent.addEventListener("click",function (){
//     console.log("parent is triggered");
//     parent.style.backgroundColor="yellow"
// },true)
// // !---if you click at child it will get triggered by parent and gp
// child.addEventListener("click",function (){
//     console.log("child is triggered");
//     child.style.backgroundColor="blue"
// },true)
// gp.addEventListener("click",function (e){
//     e.stopPropagation()
//     console.log("Gp is triggered");
//     gp.style.backgroundColor="red"
// })
// // !---if you click at parent it will get triggered by parent and grandparents
// parent.addEventListener("click",function (e){
//     e.stopPropagation()
//     console.log("parent is triggered");
//     parent.style.backgroundColor="yellow"
// })
// // !---if you click at child it will get triggered by parent and gp
// child.addEventListener("click",function (e){
//     e.stopPropagation()
//     console.log("child is triggered");
//     child.style.backgroundColor="blue"
// })


// !--------------bubbling phase------------- when you click on child it will get triggered by parrent and child
gp.addEventListener("click",function (){
    console.log("Gp is triggered");
    gp.style.backgroundColor="red"
},false)
// !---if you click at parent it will get triggered by parent and grandparents
parent.addEventListener("click",function (){
    console.log("parent is triggered");
    parent.style.backgroundColor="yellow"
},false)
// !---if you click at child it will get triggered by parent and gp
child.addEventListener("click",function (){
    console.log("child is triggered");
    child.style.backgroundColor="blue"
},false)