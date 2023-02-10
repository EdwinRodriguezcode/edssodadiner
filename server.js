const http= require('http');
const PORT= process.env.PORT || 5500
const server=http.createServer((req,res)=>{
res.writeHead(200,{'content-type':'text/plain'})
    res.end('Hello World')
})

server.listen(port, ()=> console.log(`Server started on ${PORT}`+'press ctl-c to terminate.......'))
