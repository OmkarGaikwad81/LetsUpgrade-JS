
// function changeBodyBg(color){
    
//     document.body.style.background = color;
// }

// function ptf(){
//     let color = Array("blue","green","red","orange","grey")
//     changeBodyBg(...color);
// }

// setInterval(ptf(),1000);

function Timer() {
    window.setInterval("changeColor()", 5000);
  }

  function changeColor() {   
    let color = Array("cadetblue","chartreuse","chocolate","orange","grey");
    var i = Math.floor((Math.random() * 5));
    document.body.style.backgroundColor = color[i];
    
  }
Timer()