//Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5. 


for (let i = 0; i < 100; i++) {
    if(i %3 == 0 && i%5 == 0){
        console.log(i, " fizzbuzz")
        continue;
    }
    else if (i%3 ==0) {
        console.log(i," fizz");
        continue
    }
    else if (i%5 == 0) {
        console.log(i," buzz");
        continue;
        
    }
    
    
}


//OutPut

/*
0 " fizzbuzz"
ques1.js:10 3 " fizz"
ques1.js:14 5 " buzz"
ques1.js:10 6 " fizz"
ques1.js:10 9 " fizz"
ques1.js:14 10 " buzz"
ques1.js:10 12 " fizz"
ques1.js:6 15 " fizzbuzz"
ques1.js:10 18 " fizz"
ques1.js:14 20 " buzz"
ques1.js:10 21 " fizz"
ques1.js:10 24 " fizz"
ques1.js:14 25 " buzz"
ques1.js:10 27 " fizz"
ques1.js:6 30 " fizzbuzz"
ques1.js:10 33 " fizz"
ques1.js:14 35 " buzz"
ques1.js:10 36 " fizz"
ques1.js:10 39 " fizz"
ques1.js:14 40 " buzz"
ques1.js:10 42 " fizz"
ques1.js:6 45 " fizzbuzz"
ques1.js:10 48 " fizz"
ques1.js:14 50 " buzz"
ques1.js:10 51 " fizz"
ques1.js:10 54 " fizz"
ques1.js:14 55 " buzz"
ques1.js:10 57 " fizz"
ques1.js:6 60 " fizzbuzz"
ques1.js:10 63 " fizz"
ques1.js:14 65 " buzz"
ques1.js:10 66 " fizz"
ques1.js:10 69 " fizz"
ques1.js:14 70 " buzz"
ques1.js:10 72 " fizz"
ques1.js:6 75 " fizzbuzz"
ques1.js:10 78 " fizz"
ques1.js:14 80 " buzz"
ques1.js:10 81 " fizz"
ques1.js:10 84 " fizz"
ques1.js:14 85 " buzz"
ques1.js:10 87 " fizz"
ques1.js:6 90 " fizzbuzz"
ques1.js:10 93 " fizz"
ques1.js:14 95 " buzz"
ques1.js:10 96 " fizz"
ques1.js:10 99 " fizz"

*/
