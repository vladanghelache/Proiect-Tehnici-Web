
window.addEventListener('load',feedback);
function feedback(){
    fb();
    for(let i=1;i<=5;i++){
        const button=document.createElement("button");
        button.id='button'+i;
        button.innerHTML=i+' puncte';
        button.onclick=function(){
                this.style.color="red";
                for(let j=1;j<=5;j++){
                    if(j!=i){
                        document.getElementById('button'+j).style.color="black";
                    }
                }
                document.getElementById('nota').value=i;
        }

        document.getElementById("butoanenote"). appendChild(button);
    }
    document.getElementById("submit").addEventListener('click',intarziere);
    function intarziere(){
        setTimeout(reset,1000);
    }
    function reset(){
        document.getElementById("coment").value="";
        document.getElementById("name").value="";
        document.getElementById("nota").value="";
        for(let j=1;j<=5;j++){
            document.getElementById('button'+j).style.color="black";
        }
        fb();
    }
    function fb(){               // afisare feedback;
        var vect;
        var xhr = new XMLHttpRequest();
        xhr.open('Get','http://localhost:3000/json');
        xhr.onreadystatechange=function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                vect= JSON.parse(xhr.responseText);
                var m=document.getElementById("feedback-uri");
                while(m.hasChildNodes()){
                
                    m.removeChild(m.childNodes[0]);
                    
                }

                for (let o=0;o<vect.length;o++){
                    if(parseInt(vect[o].negative)<=3){
                    var t=vect[o].nume
                    var t2=vect[o].nota+" din 5";
                    var nume_nota=document.createElement("P");
                    nume_nota.classList.add("info")
                    nume_nota.innerHTML=t+' (nota '+t2+')';
                    m.appendChild(nume_nota);

                    let tx;
                    if(vect[o].comentariu!="undefined"){
                        tx=vect[o].comentariu;
                    }
                    
                    var coment=document.createElement("P");
                    coment.classList.add("comentariu")
                    coment.innerHTML=tx;
                    m.appendChild(coment);
                    var txt=vect[o].negative;
                    var negative=document.createElement("P");
                    negative.classList.add("negative")
                    negative.innerHTML='Voturi negative: '+txt;
                    m.appendChild(negative);

                    var txt2=vect[o].positive;
                    var positive=document.createElement("P");
                    positive.classList.add("positive")
                    positive.innerHTML='Voturi pozitive: '+txt2;
                    m.appendChild(positive);

                    var vot_n=document.createElement("button");
                    var vot_p=document.createElement("button");
                    vot_n.classList.add("vot_negativ");
                    vot_p.classList.add("vot_pozitiv");
                    vot_p.innerHTML='+';
                    vot_n.innerHTML='-';
                    vot_p.onclick=function(){
                        var x = new XMLHttpRequest();
                        x.open("GET",'http://localhost:8081/cale2?tip_vot=pozitiv&'+"position="+String(o));
                        x.onreadystatechange=function(){
                            if (x.readyState == 4 && x.status == 200)
                            {alert(x.responseText);}
                        }
                        x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
                        x.send();
                        intarziere();
                    }
                    vot_n.onclick=function(){
                        var x = new XMLHttpRequest();
                        x.open("GET",'http://localhost:8081/cale2?tip_vot=negativ&'+"position="+String(o));
                        x.onreadystatechange=function(){
                            if (x.readyState == 4 && x.status == 200)
                            {alert(x.responseText);}
                        }
                        x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
                        x.send();
                        intarziere();
                    }
                    
                    m.appendChild(vot_p);
                    m.appendChild(vot_n);
                    
                }
                } 
         }
        }
        xhr.send();
    }
    var nr=0;
    document.getElementById("show").onclick=function(){
        if(nr%2==0)
        {
            this.innerHTML='Show';
            document.getElementById('feedback-uri').style.display='none';
        }
        else{
            this.innerHTML='Hide';
            document.getElementById('feedback-uri').style.display='';
        }
        nr+=1;
    }
}

