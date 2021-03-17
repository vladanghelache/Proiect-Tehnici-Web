window.addEventListener("load",hideOrShow);
window.addEventListener("load",reverseList);
window.addEventListener("load",changeType);
function hideOrShow(){
    var x = document.getElementsByClassName("show_hide");
    var y = document.getElementsByClassName("lst");
    var i;
    for(i=0;i<x.length;i++){
        x[i].onclick=function(){
            t=0;
            while(this!=x[t])
            {t++;}
            if(this.innerHTML=="Show"){
                this.innerHTML="Hide";
                y[t].style.display="grid";
            }
            else{
                this.innerHTML="Show";
                y[t].style.display="none";
            }
        }
    }
}
function reverseList(){
    
    var lista=document.getElementsByTagName("OL")[0];
    lista.ondblclick=function(){
        var elemente=lista.children;
        for(i=elemente.length-1;i>=0;i--)
        {
            lista.appendChild(elemente[i]);
        }

    }

}
function changeType(){
    var indici=document.getElementsByClassName("ind");
    indici[0].checked=true;
    var lista=document.getElementById("lista");
    lista.style.listStyleType=indici[0].value;
    for(let i=0;i<indici.length;i++)
    {
        indici[i].onclick=function(){
            lista.style.listStyleType=this.value;
        }
    }


}