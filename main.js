const express = require('express');
const app = express();
const path = require('path');
const port = 3012;


// app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.send("<b>Home Page</b>");
})

app.get('/about',(req,res)=>{
    res.send("<b>About Page</b>");
})

app.get('/users',(req,res)=>{
    res.send("<b>Users Page</b>");
})

app.get('/signup',(req,res)=>{
    const filePath = path.join(__dirname, './public/index.html');
    res.sendFile(filePath);
})


app.post('/',(req,res)=>{
    res.send("It's a Post Request");
})

app.put('/',(req,res)=>{
    res.send("It's a Put Request");
})


app.listen(port,()=>{
    console.log(`Server is Running on http://localhost:${port}`);
}) 