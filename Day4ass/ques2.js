//Destructure the following object

const student = {
    name: "Omkar",
    age :22,
    project:{tiktaktoe:" Two player game using python",
}
}


 const {name,age,project:{tiktaktoe}} =student;

 console.log(`Student name is ${name} ,His age is ${age}.\nAnd ${name}'s project is : ${tiktaktoe}`)


 /*
Output:


 Student name is Omkar ,His age is 22.
And Omkar's project is :  Two player game using python
  */