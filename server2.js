var http=require("http")
var a=100
var b=200
var c=a+b
var msg
if(c==30){
    msg="Sum is 30"
} 
else{
    msg="Sum is not 30"
}
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
    res.write("A value: "+a)
    res.write("<br/>B value: "+b)
    res.write(`<br/><b>Sum is: ${c}</b>`)
    res.end("<br/>"+msg)
}).listen(4000)
console.log("http://127.0.0.1:4000")