
let amt=Number(prompt("Enter sales amount"));
let sum = 0;
switch (true) {

    case (amt>20000):{
    let val=Math.round((10/100)*amt);
    
    sum=sum+val;
    console.log(sum);
    break;    
    }
    case (amt>10001 || amt<20000):{
    let v=Math.round((7/100)*20000);
    
    sum=sum+v;
    console.log(sum);
    break;
    }
    case (amt>5001 || amt<10000 ):{
    let a=Math.round((5/100)*10000);
    
    sum=sum+a;
    console.log(sum);
    break;
    }
    case (amt>0||amt<5000):{
    let l=Math.round((2/100)*5000);
    
    sum=sum+l;
    console.log(sum);
    console.log(l,sum);
    break;
    }
    default:
    console.log("Your Commission is "+sum+".");
    break;
}
