// let btn=document.getElementById("btn")
// btn.addEventListener("click", ()=>{
//     let randomColorCode=Math.floor(Math.random()*1000000)
//     document.body.style.backgroundColor=`#${randomColorCode}`
    // btn.textContent='colorcode-${randomColorCode}'
    
// })
// !----------MUTLIPLE LIGHTS---------------------
setInterval(()=>{
     let randomColorCode=Math.floor(Math.random()*1000000)
    document.body.style.backgroundColor=`#${randomColorCode}`
    document.body.style.transitionDuration=`2s`
},2000)
