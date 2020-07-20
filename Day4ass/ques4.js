let operation = Number(prompt(" Enter 1.ADD  2. Sub  3.Division 4. Multiplication 5. squareroot 6. percentage"));


let num1 = Number(prompt("enter first Number")) ;
let num2  =Number(prompt("enter second number"))

switch (operation) {
    case 1:
        console.log("addition is : ",num1+num2)
        break;
    case 2:
        console.log("Subtitution is : ",num1-num2)
        break;
    case 3:
        console.log("Division is : ",num1/num2)
        break;
    case 4:
        console.log("Multiplication is : ",num1*num2)
        break;
    case 5:
        console.log("squareroot is : ",Math.sqrt(num1+num2))
        break;
    case 6:
        console.log("percentage is : ",Math.floor(num1/num2*100));
        break;
    default:
        console.log("Enter right Choice")
        break;
}