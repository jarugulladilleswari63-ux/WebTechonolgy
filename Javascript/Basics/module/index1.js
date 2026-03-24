// export default function add(a,b){
//     let c=a+b
//     console.log(c);
    
// }

// !--named export
// export function add(a,b){
//     console.log(a*b);
// }

// export function ad(a,b){
//     let c=a+b
//     console.log(c);
    
// }

// function add(a,b){
//     console.log(a*b);
// }

// function ad(a,b){
//     let c=a+b
//     console.log(c);
    
// }
// !------------named export 2rd----
// export{
//     add,ad
// }
// !-------named export 3rd 
// export{
//     add as multiply,ad as addition
// }

// !------------all exports
export function add(a,b){
    console.log(a*b);
}

export function ad(a,b){
    let c=a+b
    console.log(c);
    
}
export default function adds(a,b){
    console.log(a+b+a);
    
}