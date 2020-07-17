let num = Number(prompt("Emter any Number"))

function evenOdd(num1){
    if (num1%2==0) {
        return 'even'
    } else {
        return 'odd'
    }
}

let result = evenOdd(num);
console.log(`The entered number is : ${num} and It is ${result}`)


//  OutPut
/*
The entered number is : 20 and It is even
*/