let num =100
do {
    num = prompt("enter a Number");
    if (num<100) {
        console.log("Your entered Number is  :",num);
    } else if(num == null)  {
        break;
    }else{
        alert("Enter another number")
        continue;
    }

} while (num>100);
