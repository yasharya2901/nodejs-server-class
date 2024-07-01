const http = require('http');


const homepage = (res) => {
    res.setHeader('Content-Type', 'text/html');

    res.write("<html><head><title>My First Backend Request</title></head>");
    res.write("<body><h1>Hello, World!</h1></body>");
    res.write("</html>");
    res.end();
}

const loginPage = (res) => {
    res.setHeader('Content-Type', 'text/html');

    res.write("<html><head><title>My First Backend Request</title></head>");
    res.write("<body><h1>Hello, Login!</h1></body>");
    res.write("</html>");
    res.end();
}


const server = http.createServer((req, res)=>{
    if (req.url == "/") {
        homepage(res);
    }

    if (req.url == "/login") {
        loginPage(res);
    }
})


const port = 3000;
const host = "localhost";
server.listen(port, host, ()=> {
    console.log("Server is listening at port " + port);
});