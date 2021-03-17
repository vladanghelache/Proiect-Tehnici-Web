var express = require("express");
var app = express();
var http = require('http');
var fs = require('fs');
var url=require("url");

app.use(express.static('htmls'));
app.use('/css',express.static(__dirname+'/htmls/css'));
app.use('/js',express.static(__dirname+'/htmls/js'));
app.use('/mp3',express.static(__dirname+'/htmls/mp3'));
app.get('/json',function(req,res){
    var date=fs.readFileSync("data.json");
    res.writeHead(200,{'Content-Type': 'text/plain','Access-Control-Allow-Origin':null});
    res.end(date);
});


var server = app.listen(3000,'0.0.0.0',function (){
    console.log(server.address());
});


console.log('hey');

   var server2 = http.createServer(function (req, res) { var url_parts=url.parse(req.url,true);
       if(url_parts.pathname =='/cale'){    var query=url_parts.query; 
        var nm=query.name;
        var cmt=query.coment;
        var nota=query.nota;
        console.log(nm);
        var ob={
            nume: nm,
            comentariu: cmt,
            nota: nota,
            negative: 0,
            positive: 0

        };
        console.log(ob);
        var txt=fs.readFileSync('data.json').toString();
        var v=JSON.parse(txt);
        v.push(ob);
        console.log(v);
        fs.writeFileSync('data.json',JSON.stringify(v));
        res.end("Feedback-ul a fost trimis.");
        

        } 
        if(url_parts.pathname =='/cale2')
        {
            var query=url_parts.query; 
            var position=query.position;
            var tip_vot=query.tip_vot;
        console.log(url_parts);
        var txt=fs.readFileSync('data.json').toString();
        var v=JSON.parse(txt);
        if(tip_vot=='negativ')
        {
            v[parseInt(position)].negative=parseInt(v[parseInt(position)].negative)+1;
        }
        if(tip_vot=='pozitiv')
        {
            v[parseInt(position)].positive=parseInt(v[parseInt(position)].positive)+1;
        }
        fs.writeFileSync('data.json',JSON.stringify(v));
        res.writeHead(200,{'Content-Type': 'text/plain','Access-Control-Allow-Origin':null});
        res.end("Votul a fost inregistrat");
        

        } 
            }).listen(8080);