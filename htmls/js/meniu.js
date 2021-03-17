window.addEventListener("load",f_meniu);
function f_meniu(){
var ok=0;

document.getElementsByClassName("meniu")[0].onmouseover=function(){
    if(ok==0){
        //alert("Dubluclick pe meniu pentru a interschimba culorile\nClick pe butonul play pentru a porni muzica");
}   ok=1;
}
var play_btn = document.getElementById("play_audio");
var nr=0;
var color1="white";
var color2="black";
play_btn.onmousedown=function(){
    play_btn.style.color=color1;
    nr+=1;
}
play_btn.onmouseup=function(){       //opreste sau porneste muzica de pe fundal;
    play_btn.style.color=color2;
    if (nr%2==1){
        document.getElementById("music").play();
        document.getElementById("play").style.display="none";
        document.getElementById("stop").style.display="inline";
        
    } else {
        document.getElementById("music").pause();
        document.getElementById("play").style.display="inline";
        document.getElementById("stop").style.display="none";
    }
}
document.getElementById("music").onended=function(){
    document.getElementById("music").play();
}


var nr2=0;
document.getElementsByClassName("meniu")[0].ondblclick=function(){         //inverseaza culorile meniului
    if(nr2 % 2 == 0){
    document.getElementsByClassName("meniu")[0].style.backgroundColor="rgb(217, 38, 38)";
    document.getElementsByClassName("active")[0].style.backgroundColor="black";
    document.getElementsByClassName("menu_a")[0].style.color="black";
    document.getElementsByClassName("menu_a")[1].style.color="black";
    document.getElementsByClassName("menu_a")[2].style.color="black";
    document.getElementsByClassName("active")[0].style.color="white";
    play_btn.style.backgroundColor="black";
    play_btn.style.color="white";
    color1="rgb(217, 38, 38)";
    color2="white";
   
    
        document.getElementsByClassName("menu_a")[0].onmouseover=function(){
            document.getElementsByClassName("menu_a")[0].style.backgroundColor="black";
            document.getElementsByClassName("menu_a")[0].style.color="white";
        }
        document.getElementsByClassName("menu_a")[0].onmouseout=function(){
            document.getElementsByClassName("menu_a")[0].style.backgroundColor="";
            document.getElementsByClassName("menu_a")[0].style.color="black";
        }
        document.getElementsByClassName("menu_a")[1].onmouseover=function(){
            document.getElementsByClassName("menu_a")[1].style.backgroundColor="black";
            document.getElementsByClassName("menu_a")[1].style.color="white";
        }
        document.getElementsByClassName("menu_a")[1].onmouseout=function(){
            document.getElementsByClassName("menu_a")[1].style.backgroundColor="";
            document.getElementsByClassName("menu_a")[1].style.color="black";
        }
        document.getElementsByClassName("menu_a")[2].onmouseover=function(){
            document.getElementsByClassName("menu_a")[2].style.backgroundColor="black";
            document.getElementsByClassName("menu_a")[2].style.color="white";
        }
        document.getElementsByClassName("menu_a")[2].onmouseout=function(){
            document.getElementsByClassName("menu_a")[2].style.backgroundColor="";
            document.getElementsByClassName("menu_a")[2].style.color="black";
        }
    }
    else{
        document.getElementsByClassName("meniu")[0].style.backgroundColor="black";
        document.getElementsByClassName("active")[0].style.backgroundColor="rgb(217, 38, 38)";
        document.getElementsByClassName("menu_a")[0].style.color="white";
        document.getElementsByClassName("menu_a")[1].style.color="white";
        document.getElementsByClassName("menu_a")[2].style.color="white";
        document.getElementsByClassName("active")[0].style.color="black";
        play_btn.style.backgroundColor="rgb(217, 38, 38)";
        play_btn.style.color="black";
        color1="white";
        color2="black";
       
        
            document.getElementsByClassName("menu_a")[0].onmouseover=function(){
                document.getElementsByClassName("menu_a")[0].style.backgroundColor="rgb(217, 38, 38)";
                document.getElementsByClassName("menu_a")[0].style.color="";
            }
            document.getElementsByClassName("menu_a")[0].onmouseout=function(){
                document.getElementsByClassName("menu_a")[0].style.backgroundColor="";
                document.getElementsByClassName("menu_a")[0].style.color="";
            }
            document.getElementsByClassName("menu_a")[1].onmouseover=function(){
                document.getElementsByClassName("menu_a")[1].style.backgroundColor="rgb(217, 38, 38)";
                document.getElementsByClassName("menu_a")[1].style.color="";
            }
            document.getElementsByClassName("menu_a")[1].onmouseout=function(){
                document.getElementsByClassName("menu_a")[1].style.backgroundColor="";
                document.getElementsByClassName("menu_a")[1].style.color="";
            }
            document.getElementsByClassName("menu_a")[2].onmouseover=function(){
                document.getElementsByClassName("menu_a")[2].style.backgroundColor="rgb(217, 38, 38)";
                document.getElementsByClassName("menu_a")[2].style.color="";
            }
            document.getElementsByClassName("menu_a")[2].onmouseout=function(){
                document.getElementsByClassName("menu_a")[2].style.backgroundColor="";
                document.getElementsByClassName("menu_a")[2].style.color="";
            }
        }
    nr2+=1;
    
}
}