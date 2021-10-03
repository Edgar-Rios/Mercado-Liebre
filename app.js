const express = require("express");
const path = require("path");

let pathAbsolute = (relativePath) => path.resolve(__dirname, relativePath);

const app = express();
const PORT = 3000;

const publicPath = "public"; 
app.use(express.static(publicPath));


app.get(`/`, (req, res) =>{
    res.sendFile(pathAbsolute("./views/home.html"))
});

app.listen(PORT, () => console.log(`servidor levantado: http://localhost:${PORT}`))