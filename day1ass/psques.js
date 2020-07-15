//Qyestion 1:
// various methods in console are :


console.log("Hello"); //to print string in console 

console.log("Hey");//prints hey in console window


console.error("An error occured");//it is use to show error in console


console.warn("This is warning..!!!");//warn is use to show warning message

console.exception("this is exception")//use to show exception

console.timeEnd("time taken")//its show how much time taken by js code to execute

var a = {name:"Omkar" ,age: "22",city:"pune"}
var b = {name:"Anil" ,age: "22",city:"shikrapur"}
var c = {name:"Ganesh" ,age: "22",city:"Wagholi"}

console.table({a,b,c})//use to print in table format


//Question 2:
// var

var name = "Omkar"
var age = 22;
var canfly = false;
var language = ["hindi","marathi","english"];

var friends = {
    name:"vishal",hobby:"coding",
}

var a=null;

console.log(a);


// let  //it is like a global variable

{
    let name = "Omkar"
    name = "viral";
    console.log("using let :",name);
}
console.log(name)


//const
// once asign cannot changes variable values
const country = "india";
console.log(country)

//country = "UK";  //gives error



//Qyestion 3:

//Datatypes in Js


//The number type represents both integer and floating point numbers.

//BigInt type was recently added to the language to represent integers of arbitrary length.

//A string in JavaScript must be surrounded by quotes.

//The boolean type has only two values: true and false