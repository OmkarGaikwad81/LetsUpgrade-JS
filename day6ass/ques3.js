
const form = document.getElementById("myForm");


const name = form.name.value;
console.log(name)
const b1 = document.getElementById("greet");
console.log(b1)
b1.onclick=()=>{document.write(`Hello Mr./Miss ${name}`)};


const dmode = document.getElementById('dark');

dmode.onclick = function changeColor(){
    
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'Helvetica';
   
}


const ctime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

// clock();

setInterval(clock,1000);
