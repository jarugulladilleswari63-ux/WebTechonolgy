// !--GETELEMENTBYID()--
// let a=document.getElementById("root")
// a.style.color="red"
// console.log(a);

// !---CLASSNAME---IT is used to fetch the data by using tagname
// let a=document.getElementsByClassName("content")
// a[1].style.color="green"
// a[1].style.backgroundColor="yellow"
// console.log(a);


// !---TAGNAME---it is used to fetch the result with the tagname
// let content=document.getElementsByTagName("h2")
// // a.item(1).style.color="blue"
// console.log(content);

// let contentArray=Array.from(content)
// console.log(contentArray);

// !---QUERYSELECTOR---it is fetch in result using first matching record..
// let a=document.querySelector("#root>p")
// let a=document.querySelector(".content")
// let a=document.querySelector("h2")
// let a=document.querySelector("root") //!--null
// console.log(a)

// !-----QUERYSELECTORALL--it is nodelist we can iterate ober an element..
// let a=document.querySelectorAll("#root")
// let a=document.querySelectorAll(".content")
// a[1].style.color="blue"
// a.style.color="pink"
// let a=document.querySelectorAll("h2")
// a[0].style.color="yellow"
// console.log(a);

// !--getattribute()--
let root=document.getElementById("root")
// root.style.color="red"
console.log(root.getAttribute("id"));
// console.log(root.getAttribute("style"));

root.setAttribute("class","rootclass")
root.setAttribute("style","color:red",backgoundcolor="blue")
console.log(root);
// root.setAttribute("style,"color:blue")

let box=document.getElementById("box") 
let newElem=document.createElement("h1")
newElem.innerText="I am new element in javascript"
newElem.setAttribute("id","newelement")
// box.appendChild(newElem) //!--appendchild()
// box.append(newElem)
box.prepend(newElem) //!--prepend()
// console.log(box);
