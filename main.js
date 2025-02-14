const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.end("Hello World");
    res.end("And This is Home Page");
})

app.listen(port,()=>{
    console.log(`Server is Running on https://localhost:${port}`);
})