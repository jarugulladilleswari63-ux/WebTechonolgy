0// !--USING LITERAL WAY
// let arr=['html','css']
// console.log(arr[1]); //!--read
// arr[2]='javascript'//!--insert
// arr[1]='react js' //!--upadate
// delete arr[1] //!--delete
// console.log(arr);
// console.log(arr[0]);

// !--USING ARRAY CONSTRUCTOR
// let arr=new Array();
// arr[0]="java"
// arr[1]="sql"
// arr[2]="python"
// console.log(arr);

// !--METHODS OF ARRAY
// let arr=["java","sql","python","javascript","css","react js"]
// !--1.)length--it is used to find the length of the string
// console.log(arr.length);
// !--push--it is used to add something in end of the array 
// arr.push("cyber security","data science")
// !--unshift-it is used to add something iin a begining of the array
// arr.unshift("machine learning","tableau")
// !--pop--it is used to remove something in ending
// arr.pop()
// arr.pop()
// !--shift--it is used to remove something in begining
// arr.shift()
// arr.shift()
// !--slice 
// console.log((arr.slice(1,5)));    //!--will not nmutate
// arr.splice(1,3)      //!--will mutate original array
// arr.splice(1,3pp,"tableau","data science")
// console.log(arr);


// !---map:
// let arr=["java","sql","python","javascript","css","react js"]
// arr.map((v)=>{
//     console.log(v);
    
// })


// let a=[10,20,30,40,50]
// let arr=a.map((v)=>{
//     console.log(a);
//     return v+5
    
// })
// console.log(arr);

// !---filter()
// let a=[12,5,6,8,7,9,2,4,11];
// let b=a.filter((v)=>{
//     return v%2 !==0
// })
// console.log(b);

// let food=["chicken chill","panner chilli","momos","burger","samosa","chicken biryani","pizza"];
// let food1=food.filter((v)=>{
//      return v.includes('chi')
// })
// console.log(food1);


// !--reduce method
// let arr=[1,2,3,4,5,6];
// let arr1=arr.reduce((acc,cv)=>(acc+cv),0)
// let arr1=arr.reduce((acc,cv)=>{
//     console.log(acc,"Accumulator");
//     console.log(cv,"current value");
//     return acc+cv
// },0)
// console.log(arr1);
// !--some :it will check atleast one element statify it will return true
// let arr=[1,2,3,7,8,9,10];
// let arr1=arr.some((a)=>{
//     return a>9;
// })
// console.log(arr1);

// !--every: it will statify all the elemnet then it will return true
// let arr=[1,2,3,7,8,9,10];
// let arr1=arr.every((a)=>{
//     return a>0;
// })
// console.log(arr1);
// !--find:it will iterate first matching element will be return  and not check for other element
// let arr=[1,23,3,4,5,6,8,9,10,12,14]
// let arr1=arr.find((v)=>{
//   return v%2==0  
// })
// console.log(arr1);
// !--concate
// let a=["html","css"]
// let b=["js","react js"]
// let c=["python","java"]
// console.log(a.concat(b,c));
// !--includes: it will return boolean values as output
// let a=["html","css","js","react js","js"]
// console.log(a.includes("js"));
// console.log(a.includes("Js"));
// !--INDEX:
// let a=["html","css","js","react js","js"]
// console.log(a.indexOf("js"));
// console.log(a.indexOf("js",3));
// console.log(a.lastIndexOf("js"));

// console.log(a.lastIndexOf("js",3));
// !--flat:it is used merge the all nested function in array
// let arr=["html",["css",["js",["react js",["python",["sql"]]]]]]
// let arr1=arr.flat(5)
// console.log(arr1);
// !--reverse: it will reverse the array
// let a=[1,2,3,4,5,6,7,8,9]
// a.reverse()
// console.log(a);//!---will mutate original array
// !--fill:it is used to fill the value within the index position
// let arr=["html","css","js","react js","sql","python"]
// arr.fill("java",1,3)
// console.log(arr);
// !--from:it is used to get the string into a array
// let str="jspiders"
// let arr=Array.from(str)
// console.log(arr);
// !--to string:it is used to get the array into a string
// let arr=["html","css","js"]
// let arr1=arr.toString()
// console.log(arr1);
// console.log(arr);

// let arr=[2,null,"hello",true,4,false,undefined,7];
// let arr1=arr.filter((v)=>{
//     return typeof v =='number'
// })
// console.log(arr1);