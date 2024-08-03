require ("dotenv").config();
const express = require("express");
const path = require("path")
const cors = require ("cors")

const port = process.env.PORT;

const app = express()

// config para receber json e tambem dados atraves de url 
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
const routes = require("./routes/Router")
app.use(routes)

//cors
app.use(cors({credentials: true, origin:"http://http://localhost:5175"}))

//upload de imagem diretorio
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//db connection
require("./config/db")

app.listen(port, () => {
    console.log(`App rodando na porta: ${port}`)
  })