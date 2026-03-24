let a=document.getElementById("root")
console.log(a);

// !--PROPERTIES IN DOMS----!//
// !---1.))) innerHTML
// a.innerHTML="I am root"
// a.innerHTML="<i>I am root in innerhtml</i>"("it will take the behaviour of the tag")

// !---2.)))innerText
// a.innerText="I am root"
// a.innerText="<h3>I am root in innertext</h3>"("it will not take the behaviour of tag")

// !------3.)))textContent
// a.textContent="I am root"
// a.textContent="<h1>I am root in text context</h1>"("it will not take the behaviour of the tag")

// console.log(a.innerHTML);
// console.log(a.innerText);
// console.log(a.textContent);

// console.log(a.tagName); ("it is used to get the tagname in uppercase")

// console.log(a.id);("it is used to get the value which is provide to an id")

// a.id="rootelement"("we are modify the name of the id")
// a.className="dom_class"("we can add the class to and  element")
// a.style.color="pink"(using style we can provide css for that else;lement)
// a.style.backgroundColor="#e94731"
// a.style.padding="30px"
// console.log(a.style);


console.log((a.innerHTML,"innerHTML"));
// console.log(a.innerText,"innertext");

console.log(a.textContent,"textcontent"); 
