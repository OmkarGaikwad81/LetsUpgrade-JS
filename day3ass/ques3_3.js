
let marks = Number(prompt("Enter your Marks"))

// let result =(marks>=80) ? `Your marks is ${marks} and grade is : A`:(marks>=70) ? `Your marks is ${marks} and grade is : B` : (marks>=60) ?`Your marks is ${marks} and grade is : C`: (marks>=50) ? `Your marks is ${marks} and grade is : D`: (marks>=40) ? `Your marks is ${marks} and grade is : D`:`Your marks is ${marks} and You Are failed`;

// console.log(result)

if (marks>=80) {
    console.log(`Your marks is ${marks} and grade is : A`)
} else if (marks>=70) {
    console.log(`Your marks is ${marks} and grade is : B`)    
}else if(marks>=60){
    console.log(`Your marks is ${marks} and grade is : C`)
}else if (marks>=50) {
    console.log(`Your marks is ${marks} and grade is : D`)
}else if (marks>=40) {
    console.log(`Your marks is ${marks} and grade is : Passed`)
}else{
    console.log(`Your marks is ${marks} and you are Failed`)
}


//OutPut
//Your marks is 35 and you are Failed