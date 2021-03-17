window.addEventListener("load",ascundeImg);
window.addEventListener("load",changeBackgroundColor);
window.addEventListener("load",titleAnimation);
window.addEventListener("load",marimeText);
function ascundeImg(){
    var b=document.getElementById("hide_img");
    var imagini=document.getElementsByTagName("IMG");
    var nr=0;
    b.onclick=function(){
        if(nr%2==0)
        {
            var i;
            for(i=0;i<imagini.length;i++)
            {
                imagini[i].style.display='none';
            }
            this.innerHTML='Afiseaza imaginile';
            nr+=1;
        }
        else{
            var i;
            for(i=0;i<imagini.length;i++)
            {
                imagini[i].style.display='block';
            }
            this.innerHTML='Ascunde imaginile';
            nr+=1;
        }
    }
    window.addEventListener("resize", hide);
    function hide(){
        if(nr%2==0){
        if(window.innerWidth<=900)
            {imagini[0].style.display='none';}
        else {imagini[0].style.display='block';}
    }
    else {imagini[0].style.display='none';}
    
    }
    
}

function changeBackgroundColor(){
    document.getElementById("sch_culoare").onclick=function(){
        var verif=document.createElement("DIV");
        var culoare=document.getElementById("culoare").value;
        try{
            
            verif.style.backgroundColor=culoare;
            if(culoare!=verif.style.backgroundColor)
            {
                throw culoare;
            }
            else{
                document.body.style.backgroundColor=culoare;
            }
        }
        catch(culoare){alert('Culoarea '+culoare+' este invalida');}
        verif.remove();
    }
}

function titleAnimation(){
    var h=document.getElementsByTagName("HEADER")[0];
    var litere=h.getElementsByTagName("SPAN");
    var interval=setTimeout(showTitle,3500);
    
    function showTitle(){
        
        var a=0;
        setInterval(showLitere,100);
        
        function showLitere(){
            
            litere[a].style.display='inline';
            litere[litere.length-1-a].style.display='inline';
            if(a==9)
            {
                clearInterval(interval);
            }
            else{
            a+=1;
            }
        }
    }
}

function marimeText(){
    var s=document.getElementById("marime");
    var b=document.getElementById("reset");
    var a=document.getElementsByTagName("ARTICLE")[0];
    var txt=localStorage.getItem("size");
    if(txt!=null)
    {
        s.selectedIndex=txt;
        if(txt=='0')
            {
                a.style.fontSize='10px';
            }
        if(txt=='1')
            {
                a.style.fontSize='14px';
            }
        if(txt=='2')
            {
                a.style.fontSize='18px';
            }
    }
    
    s.onclick=function(){
        
        localStorage.setItem("size", s.selectedIndex);
        if(s.selectedIndex=="0")
        {
            a.style.fontSize="10px";
        }
        if(s.selectedIndex=='1')
        {
            a.style.fontSize='14px';
        }
        if(s.selectedIndex=='2')
        {
            a.style.fontSize='18px';
        }
    }
    b.onclick=function(){
        a.style.fontSize="";
        s.selectedIndex="-1";
        localStorage.removeItem("size");
    }

}
