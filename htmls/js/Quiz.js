window.addEventListener("load",f);
function f(){
    var nm;
    var pct=0;
    var v_ob=[];

    var text= localStorage.getItem("Clasament");
    if(text==null){
        var myJSON = JSON.stringify(v_ob);
        localStorage.setItem("Clasament", myJSON);
        text= localStorage.getItem("Clasament");
        
    }
    v_ob=JSON.parse(text);
    if(text!="[]"){
        h();
    }
    
    var x=document.getElementsByClassName("intr");
    var y=document.getElementsByClassName("submit");
    var l_true=document.getElementsByClassName("true");
    document.getElementById("submitnickn").onclick=function(){
        nm=document.getElementById("nume").value;
        x[0].style.display="inline";
        
    }

    var i;
    for(i=0;i<y.length;i++){
       
        y[i].onclick=function(){
            
            
            t=0;
            while(this!=y[t])
            {t++;}
            x[t].style.display="none";
            if(l_true[t].checked == true){
                pct+=5;
                alert("Raspuns corect\nPuncte: "+pct.toString());
                l_true[t].checked=false;
            }
            else{
                alert("Raspuns grestit\nPuncte: "+pct.toString());
                l_true[t].checked=true;
                l_true[t].checked=false;
            }
            if(t<x.length-1){
                x[t+1].style.display="inline";
            }
            else{
                alert("Punctaj final: "+pct.toString());
                var ob={
                    nume:"",
                    puncte:0
                }
                ob.puncte=pct;
                ob.nume=nm;
                v_ob.push(new Object(ob));
                pct=0;
                h();
                    
            }

        }

    }
    document.getElementById("submitsearch").onclick=function(){
        var c=document.getElementById("cauta").value;
        var o;
        var m=document.getElementById("rez");
        while(m.hasChildNodes()){
            
            m.removeChild(m.childNodes[0]);
            
        }
        for (o=0;o<v_ob.length;o++){
            if(v_ob[o].nume==c){
                var t=(o+1).toString()+". "+v_ob[o].nume+" :: "+v_ob[o].puncte.toString()+" puncte";
                var parag=document.createElement("P");
                parag.innerHTML=t;
                document.getElementById("rez").appendChild(parag);
            }
        } 
    }
    function h(){               // afisarea clasamentului;
        var o;
                var m=document.getElementById("clasament");
                while(m.hasChildNodes()){
                
                    m.removeChild(m.childNodes[0]);
                    
                }
                v_ob.sort(function(a, b){return b.puncte - a.puncte});
                for (o=0;o<v_ob.length;o++){
                    var t=(o+1).toString()+". "+v_ob[o].nume+" :: "+v_ob[o].puncte.toString()+" puncte";
                    var parag=document.createElement("P");
                    parag.innerHTML=t;
                    document.getElementById("clasament").appendChild(parag);
              
                } 
    }
    window.addEventListener("unload",save);
    function save(){
        var myJSON = JSON.stringify(v_ob);
        localStorage.setItem("Clasament", myJSON);
        
    }

}
