//  Change ./random_node/http_server.js into express 


import express from "express";

const app = express();

app.get("/name", (req, res) => {
    res.send("<h1>My name is Anish.</h1>");
});

app.get("/info", (req, res) => {
    res.send("<h1>anishkarki5710@gmail.com</h1>");
});

app.use((req, res) => {
    res.status(404).send("<h1>404 Not Found</h1>");
});




app.listen(8000, () => {
    console.log(`Server started on port ${8000}`);
});
