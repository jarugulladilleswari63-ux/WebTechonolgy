// !----------all()--------------------------
// let p1=new Promise((res,rej)=>{
//     res("I am res p1")
// })
// let p2=new Promise((res,rej)=>{
//     res("I am res p1")
// })
// let p3=new Promise((res,rej)=>{
//     res("I am res p1")
// })

// Promise.all([p1,p2,p3]).then((v)=>{
//     console.log(v);
//     console.log("Then block");
    
// }).catch((v)=>{
//     console.log(v);
//     console.log("Catch block");
    
// }).finally(()=>{
//     console.log("Finally block");
    
// })

// !--output="it is giving output in the form of array of result"-!//

// !---allsettled---------------------!///
// let p1=new Promise((res,rej)=>{
//     res("I am res p1")
// })
// let p2=new Promise((res,rej)=>{
//     rej("I am res p1")
// })
// let p3=new Promise((res,rej)=>{
//     res("I am res p1")
// })

// Promise.allSettled([p1,p2,p3]).then((v)=>{
//     console.log(v);
//     console.log("Then block");
    
// }).catch((v)=>{
//     console.log(v);
//     console.log("Catch block");
    
// }).finally(()=>{
//     console.log("Finally block");
    
// })

// !-output--It is giving output in  th form array inside an object is created --it is not possible the execute the catch()----!//

// !-------race()-------!//
// let p1=new Promise((res,rej)=>{
//     setTimeout((v)=>{
//         res("I am res p1")
//     },30000)
// })
// let p2=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("I am res p2")
//     },5001)
// })
// let p3=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej("I am res p3")
//     },5000)
// })

// Promise.race([p1,p2,p3]).then((v)=>{
//     console.log(v);
//     console.log("Then block");
    
// }).catch((v)=>{
//     console.log(v);
//     console.log("Catch block");
    
// }).finally(()=>{
//     console.log("Finally block");
    
// })

// !----it get the result based on the first execution first then it which will executes

// !---------any()--------------
// let p1=new Promise((res,rej)=>{
//     res("I am res p1")
// })
// let p2=new Promise((res,rej)=>{
//     res("I am res p1")
// })
// let p3=new Promise((res,rej)=>{
//     res("I am res p1")
// })

// Promise.any([p1,p2,p3]).then((v)=>{
//     console.log(v);
//     console.log("Then block");
    
// }).catch((v)=>{
//     console.log(v);
//     console.log("Catch block");
    
// }).finally(()=>{
//     console.log("Finally block");
    
// })




// let p1=new Promise((res,rej)=>{
//     setTimeout((v)=>{
//         res("I am res p1")
//     },30000)
// })
// let p2=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("I am res p2")
//     },5001)
// })
// let p3=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej("I am res p3")
//     },5000)
// })

// Promise.any([p1,p2,p3]).then((v)=>{
//     console.log(v);
//     console.log("Then block");
    
// }).catch((v)=>{
//     console.log(v);
//     console.log("Catch block");
    
// }).finally(()=>{
//     console.log("Finally block");
    
// })


// !----------PROMISE CHAining--------------!//
// let p1=new Promise((res,rej)=>{
//     res("i am res p1")
// }).then(()=>{
//     console.log("I am then block");
//     return new Promise((res,rej)=>{
//         rej("i am res in chaining")
//     }).then(()=>{
//         console.log("i am then block in chaining");
        
//     }).catch(()=>{
//         console.log("I am catch block in chaining");
        
//     }).finally(()=>{
//         console.log("I am finally block in chaining");
        
//     })
// }).catch(()=>{
//     console.log("I am catch block.");
    
// }).finally(()=>{
//     console.log("I am finally !!!");
    
// })