var flag="x";
function fnB0(){
    if(flag=="x"){
        document.getElementById("box0").value = "x";
        document.getElementById("box0").disabled = true;
        flag = "o";
    }else{
        document.getElementById("box0").value = "o";
        document.getElementById("box0").disabled = true;
        flag="x";
    }
}

function fnB1(){
    if(flag=="x"){
    document.getElementById("box1").value = "x";
    document.getElementById("box1").disabled = true;
    flag = "o";
}else{
    document.getElementById("box1").value = "o";
    document.getElementById("box1").disabled =true;
    flag = "x";
}
}

function fnB2(){
    if(flag=="x"){
    document.getElementById("box2").value = "x";
    document.getElementById("box2").disabled = true;
    flag ="o";
}else{
    document.getElementById("box2").value = "o";
    document.getElementById("box2").disabled = true;
    flag ="x";
}
}

function fnB3(){
    if(flag == "x"){
    document.getElementById("box3").value = "x";
    document.getElementById("box3").disabled = true;
    flag = "o";
}else{
    document.getElementById("box3").value = "o";
    document.getElementById("box3").disabled = true;
    flag ="x";
}
}

function fnB4(){
    if(flag == "x"){
    document.getElementById("box4").value = "x";
    document.getElementById("box4").disabled = true; 
    flag ="o";
}else{
    document.getElementById("box4").value = "o";
    document.getElementById("box4").disabled = true;
    flag ="x";
}
}

function fnB5(){
    if(flag == "x"){
        document.getElementById("box5").value = "x";
        document.getElementById("box5").disabled = true; 
        flag ="o";
    }else{
        document.getElementById("box5").value = "o";
        document.getElementById("box5").disabled = true;
        flag ="x";
    }
}

function fnB6(){
    if(flag == "x"){
    document.getElementById("box6").value = "x";
    document.getElementById("box6").disabled = true;
    flag ="o";
}
else{
    document.getElementById("box6").value = "o"
    document.getElementById("box6").disabled = true;
    flag ="x";
}
}

function fnB7(){
    if(flag == "x"){
        document.getElementById("box7").value = "x";
        document.getElementById("box7").disabled = true;
        flag ="o";
    }
    else{
        document.getElementById("box7").value = "o"
        document.getElementById("box7").disabled = true;
        flag ="x";
    }
}
function fnB8(){
    if(flag == "x"){
        document.getElementById("box8").value = "x";
        document.getElementById("box8").disabled = true;
        flag ="o";
    }
    else{
        document.getElementById("box8").value = "o"
        document.getElementById("box8").disabled = true;
        flag ="x";
    }
}
function check(){
        var box0va = document.getElementById("box0").value;
        var box1va = document.getElementById("box1").value;
        var box2va = document.getElementById("box2").value;
        var box3va = document.getElementById("box3").value;
        var box4va = document.getElementById("box4").value;
        var box5va = document.getElementById("box5").value;
        var box6va = document.getElementById("box6").value;
        var box7va = document.getElementById("box7").value;
        var box8va = document.getElementById("box8").value;
        if((box0va == "x" && box1va == "x" && box2va == "x")) 
        {
            document.getElementById("result").innerText = "player x won"
            var box3va = document.getElementById("box3").disabled = true;
            var box4va = document.getElementById("box4").disabled = true;
            var box5va = document.getElementById("box5").disabled = true;
            var box6va = document.getElementById("box6").disabled = true;
            var box7va = document.getElementById("box7").disabled = true;
            var box8va = document.getElementById("box8").disabled = true;
        }else if((box0va == "o" && box1va == "o" && box2va == "o")){
            document.getElementById("result").innerText = "player o won"
            var box3va = document.getElementById("box3").disabled = true;
            var box4va = document.getElementById("box4").disabled = true;
            var box5va = document.getElementById("box5").disabled = true;
            var box6va = document.getElementById("box6").disabled = true;
            var box7va = document.getElementById("box7").disabled = true;
            var box8va = document.getElementById("box8").disabled = true;
        }

        if((box3va == "x" && box4va == "x" && box5va == "x")) 
        {
            document.getElementById("result").innerText = "player x won"
            var box0va = document.getElementById("box0").disabled = true;
            var box1va = document.getElementById("box1").disabled = true;
            var box2va = document.getElementById("box2").disabled = true;
            var box6va = document.getElementById("box6").disabled = true;
            var box7va = document.getElementById("box7").disabled = true;
            var box8va = document.getElementById("box8").disabled = true;
        }else if((box3va == "o" && box4va == "o" && box5va == "o")){
            document.getElementById("result").innerText = "player o won"
            document.getElementById("result").innerText = "player x won"
            var box0va = document.getElementById("box0").disabled = true;
            var box1va = document.getElementById("box1").disabled = true;
            var box2va = document.getElementById("box2").disabled = true;
            var box6va = document.getElementById("box6").disabled = true;
            var box7va = document.getElementById("box7").disabled = true;
            var box8va = document.getElementById("box8").disabled = true;
        }

        if((box6va == "x" && box7va == "x" && box8va == "x")) 
        {
            document.getElementById("result").innerText = "player x won"
            var box0va = document.getElementById("box0").disabled = true;
            var box1va = document.getElementById("box1").disabled = true;
            var box2va = document.getElementById("box2").disabled = true;
            var box3va = document.getElementById("box3").disabled = true;
            var box4va = document.getElementById("box4").disabled = true;
            var box5va = document.getElementById("box5").disabled = true;
        }else if((box6va == "o" && box7va == "o" && box8va == "o")){
            document.getElementById("result").innerText = "player o won"
            var box0va = document.getElementById("box0").disabled = true;
            var box1va = document.getElementById("box1").disabled = true;
            var box2va = document.getElementById("box2").disabled = true;
            var box3va = document.getElementById("box3").disabled = true;
            var box4va = document.getElementById("box4").disabled = true;
            var box5va = document.getElementById("box5").disabled = true;
        }

        if((box0va == "x" && box3va == "x" && box6va == "x")) 
        {
            document.getElementById("result").innerText = "player x won"
            var box1va = document.getElementById("box1").disabled = true;
            var box2va = document.getElementById("box2").disabled = true;
            var box4va = document.getElementById("box4").disabled = true;
            var box5va = document.getElementById("box5").disabled = true;
            var box7va = document.getElementById("box7").disabled = true;
            var box8va = document.getElementById("box8").disabled = true;
        }else if((box0va == "o" && box3va == "o" && box6va == "o")){
            document.getElementById("result").innerText = "player o won"
            document.getElementById("result").innerText = "player x won"
            var box1va = document.getElementById("box1").disabled = true;
            var box2va = document.getElementById("box2").disabled = true;
            var box4va = document.getElementById("box4").disabled = true;
            var box5va = document.getElementById("box5").disabled = true;
            var box7va = document.getElementById("box7").disabled = true;
            var box8va = document.getElementById("box8").disabled = true;
        }

        if((box1va == "x" && box4va == "x" && box7va == "x")) 
        {
            document.getElementById("result").innerText = "player x won"
            var box0va = document.getElementById("box0").disabled = true;
            var box2va = document.getElementById("box2").disabled = true;
            var box3va = document.getElementById("box3").disabled = true;
            var box5va = document.getElementById("box5").disabled = true;
            var box6va = document.getElementById("box6").disabled = true;
            var box8va = document.getElementById("box8").disabled = true;
        }else if((box1va == "o" && box4va == "o" && box7va == "o")){
            document.getElementById("result").innerText = "player o won"
            var box0va = document.getElementById("box0").disabled = true;
            var box2va = document.getElementById("box2").disabled = true;
            var box3va = document.getElementById("box3").disabled = true;
            var box5va = document.getElementById("box5").disabled = true;
            var box6va = document.getElementById("box6").disabled = true;
            var box8va = document.getElementById("box8").disabled = true;
        }

        if((box2va == "x" && box5va == "x" && box8va == "x")) 
        {
            document.getElementById("result").innerText = "player x won"
            var box0va = document.getElementById("box0").disabled = true;
            var box1va = document.getElementById("box1").disabled = true;
            var box3va = document.getElementById("box3").disabled = true;
            var box4va = document.getElementById("box4").disabled = true;
            var box6va = document.getElementById("box6").disabled = true;
            var box7va = document.getElementById("box7").disabled = true;
        }else if((box2va == "o" && box5va == "o" && box8va == "o")){
            document.getElementById("result").innerText = "player o won"
            var box0va = document.getElementById("box0").disabled = true;
            var box1va = document.getElementById("box1").disabled = true;
            var box3va = document.getElementById("box3").disabled = true;
            var box4va = document.getElementById("box4").disabled = true;
            var box6va = document.getElementById("box6").disabled = true;
            var box7va = document.getElementById("box7").disabled = true;
        }

        if((box0va == "x" && box4va == "x" && box8va == "x")) 
        {
            document.getElementById("result").innerText = "player x won"
            var box1va = document.getElementById("box1").disabled = true;
            var box2va = document.getElementById("box2").disabled = true;
            var box3va = document.getElementById("box3").disabled = true;
            var box5va = document.getElementById("box5").disabled = true;
            var box7va = document.getElementById("box6").disabled = true;
            var box7va = document.getElementById("box7").disabled = true;
        }else if((box0va == "o" && box4va == "o" && box8va == "o")){
            document.getElementById("result").innerText = "player o won"
            var box1va = document.getElementById("box1").disabled = true;
            var box2va = document.getElementById("box2").disabled = true;
            var box3va = document.getElementById("box3").disabled = true;
            var box5va = document.getElementById("box5").disabled = true;
            var box7va = document.getElementById("box6").disabled = true;
            var box7va = document.getElementById("box7").disabled = true;
        }

        if((box2va == "x" && box4va == "x" && box6va == "x")) 
        {
            document.getElementById("result").innerText = "player x won"
            var box3va = document.getElementById("box0").disabled = true;
            var box4va = document.getElementById("box1").disabled = true;
            var box5va = document.getElementById("box3").disabled = true;
            var box6va = document.getElementById("box5").disabled = true;
            var box7va = document.getElementById("box7").disabled = true;
            var box8va = document.getElementById("box8").disabled = true;
        }else if((box2va == "o" && box4va == "o" && box6va == "o")){
            document.getElementById("result").innerText = "player o won"
            document.getElementById("result").innerText = "player x won"
            var box3va = document.getElementById("box0").disabled = true;
            var box4va = document.getElementById("box1").disabled = true;
            var box5va = document.getElementById("box3").disabled = true;
            var box6va = document.getElementById("box5").disabled = true;
            var box7va = document.getElementById("box7").disabled = true;
            var box8va = document.getElementById("box8").disabled = true;
        }
        else if(
            (box0va == "x"  || box0va == "o") &&
            (box1va == "x"  || box1va == "o") &&
            (box2va == "x"  || box2va == "o") &&
            (box3va == "x"  || box3va == "o") &&
            (box4va == "x"  || box4va == "o") &&
            (box5va == "x"  || box5va == "o") &&
            (box6va == "x"  || box6va == "o") &&
            (box7va == "x"  || box7va == "o") &&
            (box8va == "x"  || box8va == "o") 
        ){

            document.getElementById("result").innerText = "Match Tie";
            
        }
        }

function fnReset(){
    location.reload();
}
