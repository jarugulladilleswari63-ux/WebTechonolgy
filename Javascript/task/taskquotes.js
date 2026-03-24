fetch("https://dummyjson.com/quotes").then((res) => {
    return res.json()
})
.then((val)=>{
    console.log(val.quotes);
    let output=""
    val.quotes.map((v)=>{
        console.log(v);
        output+=`
        <main>    
        <h2>${v.quote}</h2>
        <h3>:${v.author}</h3>
        </main>
        `
    })
    document.getElementById("root").innerHTML=output
}).catch(()=>{
    console.log("error in api fetching");
    
})
// let root=document.getElementById("root")
// root.getElementById("root").addEventListener("click",()=>{
// // let b=
// })