// var a;
// console.log(a); (only declaration)

// var a;
// a=30;
// console.log(a) (only initalization)


// var a=50;
// console.log(a) (declaration+initailzation)

// var a=40;
// var a 
// console.log(a); (redeclaration)

// var a=30;
// var a=100;
// console.log(a); (reinitalization)

// var a=30
// var a=50
// console.log(a);(reinitalization+declaration)


//!--let keywords--!///
// let a;
// console.log(a);(only declaration)

// let a;
// a=50;
// console.log(a);(only initalization)


// let a=100;
// console.log(a);     (declaration+initalizatiom)


// let a=40;
// let a;
// console.log(a);(it is  not possible for redeclaration)


// let a=10;
// a=50;
// console.log(a);( redeclaration)


// let a=50;
// let a=20;
// console.log(a);(it is  not possible for redeclaration+reinitalization)


//!--const----!//
// const a;
// console.log(a); ( it is not possible only declaration)


// const a;
// a=10;   
// console.log(a);  (Uncaught SyntaxError: Missing initializer in const declaration)

// const a=50;
// console.log(a); 50

// const a=40;
// const a;
// console.log(a);  Uncaught SyntaxError: Identifier 'a' has already been declared


// const a=10;
// a=40;
// console.log(a); (Uncaught TypeError: Assignment to constant variable)


// const a=50;
// const a=100;
// console.log(a); (Uncaught SyntaxError: Identifier 'a' has already been declared)

