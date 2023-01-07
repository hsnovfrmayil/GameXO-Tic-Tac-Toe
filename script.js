let next=document.querySelector(".next");
let tile=document.querySelectorAll(".tile");
let reload=document.querySelector('.reload');
let player="X";
let newtile=[];
function gameStart(){
    next.textContent=`${player}'s Turn`;
    tile.forEach(tiles => {
        tiles.addEventListener("click",doldur);        
    });
    reload.addEventListener("click",reloads);
    function reloads(){
        location.reload();
    }
    function doldur(e){        
        if(e.target.textContent!==""){
            e.target.style.border="3px solid red";
            document.querySelector(".error").textContent="Tile is not empty...";
            setTimeout(()=>{
                e.target.style.border="1px solid black";
                document.querySelector(".error").textContent="Not Error";
            },1000)
        }
        else{
            e.target.textContent=player;
            if(player==="X"){
                e.target.textContent=player;
                player="O";
                next.textContent=`${player}'s Turn`;                                
            }
            else{
                e.target.textContent=player;
                player="X";
                next.textContent=`${player}'s Turn`;                 
            }
            newtile.push("X");
            console.log(newtile)
        }
        getWin();
        getToe();
    }
}
function getWin(){
    getRow();
    getCell();
    getDiogonals();
}
function getRow(){
    if(tile[0].textContent===tile[1].textContent && tile[0].textContent===tile[2].textContent && tile[0].textContent!==""){
        next.textContent=`${tile[0].textContent} WINNN`;
        player="";
    }
    else if(tile[3].textContent===tile[4].textContent && tile[3].textContent===tile[5].textContent && tile[3].textContent!==""){
        next.textContent=`${tile[3].textContent} WINNN`;
        player="";
    }
    if(tile[6].textContent===tile[7].textContent && tile[6].textContent===tile[8].textContent && tile[6].textContent!==""){
        next.textContent=`${tile[6].textContent} WINNN`;
        player="";
    }
}
function getCell(){
    if(tile[0].textContent===tile[3].textContent && tile[0].textContent===tile[6].textContent && tile[0].textContent!==""){
        next.textContent=`${tile[0].textContent} WINNN`;
        player="";
    }
    else if(tile[1].textContent===tile[4].textContent && tile[1].textContent===tile[7].textContent && tile[1].textContent!==""){
        next.textContent=`${tile[1].textContent} WINNN`;
        player="";
    }
    if(tile[2].textContent===tile[5].textContent && tile[2].textContent===tile[8].textContent && tile[2].textContent!==""){
        next.textContent=`${tile[2].textContent} WINNN`;
        player="";
    }
}
function getDiogonals(){
    if(tile[0].textContent===tile[4].textContent && tile[0].textContent===tile[8].textContent && tile[0].textContent!==""){
        next.textContent=`${tile[0].textContent} WINNN`;
        player="";

    }
    else if(tile[2].textContent===tile[4].textContent && tile[2].textContent===tile[6].textContent && tile[2].textContent!==""){
        next.textContent=`${tile[2].textContent} WINNN`;
        player="";   
    }
}
function getToe(){
    if(newtile.length===9 && next.textContent!=="X WINNN" && next.textContent!=="O WINNN"){
        next.textContent="Toe";
    }
}
gameStart();
