// let str="Dilleswari"
// let str='dilleswari'
// let str=`java
// script`
// let version=6
// let str="javascript version"
// let str='javascript version'
// let str=`javascript${version}`
// let str=`javascript ${5+6}`
// console.log(str);

// !--METHOS OF STRING
// let str='DiLlEsWaRi'
//1. console.log(str.length);//!--length
// 2.console.log(str.toUpperCase()); //!--upperccase
// 3.console.log(str.toLowerCase());//!---lowercase
// 4.console.log(str.at(5)); //!--index position
// 5.console.log(str.charCodeAt(2));  //!--ascii key values
// 6.console.log(str.at(-2));//!--it will work for negatuve indexing
// console.log(str.charCodeAt(-2)); //!---it will not working for ascii key values

// let a="hellololololo"
// 7.console.log(a.replace("lo","p"));
// 8.console.log(a.replaceAll("lo","p"));
// let str="ja"
// let str1="va"
// let str2="script"
// 9. console.log(str.concat(str1,str2));//!--it is used to combine the string
// let str="she"
// let str1=" missiing "
// let str2="him"
// console.log(str.concat(str1,str2));

// let str="      dilleswari            "
//10. console.log("my name is "+str.trimStart +"i am learning javascript");
// console.log("my name is "+str);

// 11.console.log("my name is" + str.trimStart());
// 12.console.log("my name is "+str.trimEnd());
// 13.console.log("my name is "+str.trim());
// let str="  java"
// 14.console.log(str.repeat(5));
// let str="java"
// let str1="script"
//15. console.log(str.padEnd(10,str1));
// 16. console.log(str.padStart(10,str1));
// console.log(str.padEnd(3,str1));
// console.log(str.padStart(3,str1));

// let a="javascript"
//!--17. indexOf---"giving the index position  of specified character" 
// console.log(a.indexOf("a"));
// console.log(a.indexOf("p"));
//18.console.log(a.lastIndexOf("a"));
// console.log(a.lastIndexOf("p"));

// let str="javascript"
//!--18. startsWith--"searching for the starting of character si present or not" 
//  console.log(str.startsWith("ja"));
// console.log(str.startsWith("va"));
// console.log(str.startsWith("sc"));

//!--- 19. endsWith--"searches for the ending with character is present is not"
//  console.log(str.endsWith("pt"));
// console.log(str.endsWith("t"));
// console.log(str.endsWith("p"));

//!-- 20. includes--"middle terms of string and output in form of boolean"
//  console.log(str.includes("ri"));
// console.log(str.includes("va"));

// !---slice ---"it si sued to get a part of string"
let a="brain not braining"
// console.log(a.slice(2,15));
// console.log(a.slice(2,-1));
// console.log(a.slice(2,1));
// !--substring----"it is used to get the part of string in using index position and if we pass negative values by default it will 0"
// console.log(a.substring(2,7));
// console.log(a.substring(2,-1));

// !--substr---"It is used to get "
// console.log(a.substr(5,6));p
// console.log(a.substr(4,-2));
// !--split--"it is used to get the string into a array"
// let newArr=a.split("") //!--(18) ['b', 'r', 'a', 'i', 'n', ' ', 'n', 'o', 't', ' ', 'b', 'r', 'a', 'i', 'n', 'i', 'n', 'g']
// let newArr=a.split(" ")//!- ['brain', 'not', 'braining']
// console.log(newArr);
