let ask =(question,yes,no) => {
    if(confirm(question))  yes() 
    else no();}


    ask(
        "Do you Agree ? ",
        function(){alert("You agreed....");},
        function() {alert(" Tou Canceled the Executiion");}
    )