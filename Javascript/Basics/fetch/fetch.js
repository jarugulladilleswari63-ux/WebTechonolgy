fetch("https://dummyjson.com/recipes").then((result)=>{
    // console.log(result);
    return result.json()
    
}).then((val)=>{
    console.log(val.recipes);
    let output=""
    val.recipes.map((v)=>{
        console.log(v);
        output +=`
        <main>
        <img src="${v.image}"/>
        <h2>name:${v.name}</h2>
        <h2>rating:${v.rating}</h2>
        <h2>servings:${v.servings}</h2>
        </main>
        `
    })
document.getElementById("root").innerHTML=output    
}).catch(()=>{
    console.log("error in api");
    
})