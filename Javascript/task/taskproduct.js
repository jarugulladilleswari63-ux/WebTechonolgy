fetch("https://dummyjson.com/products").then((Response)=>{
    console.log(Response);
    return Response.json()
}).then((data)=>{
    console.log(data);
    let output=""
    data.products.map((v)=>{
        console.log(v);
        output+=`
        <main>
        <img src="${v.image}"/>
        <h2>name:${v.title}</h2>
        </main>
        `
    })
document.getElementById("products").innerHTML=output    
}).catch(()=>{
    console.log("Error in api");
    
})