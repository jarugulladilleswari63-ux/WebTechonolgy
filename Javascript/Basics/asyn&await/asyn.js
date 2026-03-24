// async function info(){
//     let p1=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("i am in p1")
//         },2000)
//     })
//     let result=await p1
//     console.log(result);
    
// }
// info()

// !-------fetch()------------------
// async function fetchData(){
//     let res=await fetch("https://dummyjson.com/recipes");
//     let val = await res.json();
//     let output=""
//     val.recipes.map((v)=>{
//         output+=`
//         <h1>${v.name}</h1>
//         // <img src="${v.image}"/>
//         `
//     })
//     document.getElementById("root").innerHTML=output
// }
// fetchData()


// !------try & catch--------
// async function fetchData(){
//     try{
//         let res=await fetch("https://dummyjson.com/recipes");
//     let val = await res.json();
//     let output=""
//     val.recipes.map((v)=>{
//         output+=`
//         <h1>${v.name}</h1>
//         // <img src="${v.image}"/>
//         `
//     })
//     document.getElementById("root").innerHTML=output
//     }catch(error){
//     console.log(error);
    
// }
// fetchData()
// }