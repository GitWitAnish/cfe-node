const http = require("http");

const httpServer = http.createServer((req, res) => {
    switch (req.url) {
        case "/name":
            res.write("<h1>My name is Anish.</h1>");
            res.end("response ended");
            break;
        case "/info":
            res.write("<h1>anishkarki5710@gmail.com</h1>");
            res.end("response ended");
            break;
        default:
            res.write("<h1>404 Not Found</h1>");
            res.end("response ended");
            break;
    }
    res.end();
});

httpServer.listen(8000, () => {
    console.log(`Server started on port ${8000}`);
});
