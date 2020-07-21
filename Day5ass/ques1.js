arr1 = []
let n = Number(prompt("Enter a positive number"));

for (let i = 0; i <n; i++) {
    arr1.push(i);
}


let oddCube= arr1.filter((el)=>el%2!=0).map(el=> el**3);
console.log(oddCube);


