// https://www.nextree.co.kr/p8574/ 블로그를 읽어보면서 찬찬히 진행해보기

const http = require('http');
// const fs = require('fs').promises;
// const hostname = '127.0.0.1'; 
// const port = 3000; 

function onRequest(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'}); 
    res.write('Hello Node.js'); 
    res.end(); 
}

http.createServer(onRequest).listen(8888); 

// const server  = http.createServer(async (req, res)=>{ 
 
//     try {
//         const data = await fs.readFile('login.html');

//         // res.statusCode = 200; 
//         // res.setHeader('Content-Type': 'text/plain;charset=utf-8'); 
//         res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });    
//         res.end(data); 
//     } catch (err) {
//         res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });    
//         console.log(err.message); 
//     }

// }).listen(port, hostname, ()=>{
//     console.log(`Server running at http://${hostname}:${port}/`);
    
// });

