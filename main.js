const express = require('express');
const app = express();
const port = 3012;


app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.send("<b>Home Page</b>");
})

app.get('/about',(req,res)=>{
    res.send("<b>About Page</b>");
})

app.get('/users',(req,res)=>{
    res.send("<b>Users Page</b>");
})

app.post('/',(req,res)=>{
    res.send("It's a Post Request");
})

app.listen(port,()=>{
    console.log(`Server is Running on http://localhost:${port}`);
}) 