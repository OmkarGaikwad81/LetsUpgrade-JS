
const num =prompt("Enter Any Number");
console.log(num);
// console.log("any")

const button = document.getElementById('btn');
console.log(button);

button.onclick =mulTable(num)
 function mulTable (num){
    
    for (let i = 1; i < 11; i++) {
        let res1 =Number( num * i);
        document.write(`<br>${num} * ${i} = ${res1}`); 
        
    }
}
