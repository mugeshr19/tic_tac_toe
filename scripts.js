let boxes = document.querySelectorAll(".box_s");
let gameover = false;
let turn = "X";
boxes.forEach(e =>{
    e.innerHTML = ""
    e.addEventListener("click",() =>{
        if(!gameover && e.innerHTML === ""){
            e.innerHTML = turn;
            checkwin();
            checkdraw();
            changeturn();
        }
    })
})
 function changeturn(){
    if(turn === "X"){
        turn = "O";
    }
    else{
        turn = "X";
    }
 }
 let countx = 1;
 let county = 1;
 function checkwin(){
    let win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i = 0;i<win.length;i++){
        let f_one = boxes[win[i][0]].innerHTML;
        let f_two = boxes[win[i][1]].innerHTML;
        let f_three = boxes[win[i][2]].innerHTML;
        if(f_one != "" && f_one == f_two && f_one == f_three){
            if(f_one == "X"){
                document.querySelector(".ofx").innerHTML = countx;
                countx++;
            }
            if(f_one == "O"){
                document.querySelector(".ofy").innerHTML = county;
                county++;
            }
            gameover = true;
        }
    }
 }
 function again(){
    gameover = false;
    turn = "X";
    boxes.forEach(e =>{
        e.innerHTML = ""
        e.addEventListener("click",() =>{
            if(!gameover && e.innerHTML === ""){
                e.innerHTML = turn;
                checkwin();
                checkdraw();
                changeturn();
            }
        })
    })
 }
 function reset(){
    countx = 0;
    county = 0;
    document.querySelector(".ofx").innerHTML = countx;
    document.querySelector(".ofy").innerHTML = county;
    gameover = false;
    turn = "X";
    boxes.forEach(e =>{
        e.innerHTML = ""
        e.addEventListener("click",() =>{
            if(!gameover && e.innerHTML === ""){
                e.innerHTML = turn;
                checkwin();
                checkdraw();
                changeturn();
            }
        })
    })
 }
 function checkdraw(){
    if(!gameover){
        let isdraw = true;
        boxes.forEach(e =>{
            if(e.innerHTML == ""){
                isdraw = false;
            }
        })

        if(isdraw){
            gameover = true;
            alert("ITS AN DRAW");
        }
    }
 }
 var temp = 2;
 function turnon(){
    var element = document.body;
    element.classList.toggle("dark");
    if(temp%2==0){
        document.getElementById("X_scors").style.color = "#ff0000";
        document.getElementById("X_scors").style.border = "solid 2px #ff0000";
        document.getElementById("Y_scors").style.color = "#ff0000";
        document.getElementById("Y_scors").style.border = "solid 2px #ff0000";
        document.getElementById("xscore").style.color = "#ff0000";
        document.getElementById("xscore").style.border = "solid 2px #ff0000";
        document.getElementById("yscore").style.color = "#ff0000";
        document.getElementById("yscore").style.border = "solid 2px #ff0000";
        document.getElementById("boxss0").style.border = "solid 2px #ff0000";
        document.getElementById("boxss1").style.border = "solid 2px #ff0000";
        document.getElementById("boxss2").style.border = "solid 2px #ff0000";
        document.getElementById("boxss3").style.border = "solid 2px #ff0000";
        document.getElementById("boxss4").style.border = "solid 2px #ff0000";
        document.getElementById("boxss5").style.border = "solid 2px #ff0000";
        document.getElementById("boxss6").style.border = "solid 2px #ff0000";
        document.getElementById("boxss7").style.border = "solid 2px #ff0000";
        document.getElementById("boxss8").style.border = "solid 2px #ff0000";
        document.getElementById("play").style.background = "#c0c0c0";
        document.getElementById("reset").style.background = "#c0c0c0";
    }
    else{
        document.getElementById("X_scors").style.color = "#c0c0c0";
        document.getElementById("X_scors").style.border = "solid 2px #c0c0c0";
        document.getElementById("Y_scors").style.color = "#c0c0c0";
        document.getElementById("Y_scors").style.border = "solid 2px #c0c0c0";
        document.getElementById("xscore").style.color = "#c0c0c0";
        document.getElementById("xscore").style.border = "solid 2px #c0c0c0";
        document.getElementById("yscore").style.color = "#c0c0c0";
        document.getElementById("yscore").style.border = "solid 2px #c0c0c0";
        document.getElementById("boxss0").style.border = "solid 2px #c0c0c0";
        document.getElementById("boxss1").style.border = "solid 2px #c0c0c0";
        document.getElementById("boxss2").style.border = "solid 2px #c0c0c0";
        document.getElementById("boxss3").style.border = "solid 2px #c0c0c0";
        document.getElementById("boxss4").style.border = "solid 2px #c0c0c0";
        document.getElementById("boxss5").style.border = "solid 2px #c0c0c0";
        document.getElementById("boxss6").style.border = "solid 2px #c0c0c0";
        document.getElementById("boxss7").style.border = "solid 2px #c0c0c0";
        document.getElementById("boxss8").style.border = "#c0c0c0";
        document.getElementById("reset").style.background = "#c0c0c0";
    }
    temp++;
 }