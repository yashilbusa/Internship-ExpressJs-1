const express = require('express');
const app = express();
const port = 3056;

const bodyparser = require('body-parser');
const path = require('path');

const blog = require('./routes/blog')
const shop = require('./routes/shop')

app.use('/blog',blog)
app.use('/shop',shop)

// built in middleware 
// app.use(express.static("public"));
app.use(express.json());

const dataParse = bodyparser.json()
const dataUrl = bodyparser.urlencoded()

app.post('/login', dataParse, (req, res) =>{
    console.log(req.body);
    res.status(200).send(req.body.username)
  })
  
app.post('/api', dataUrl,  (req, res) =>{
    console.log(req.body);
    res.status(200).send(req.body)
})



//Application Level MiddleWare

app.use((req,res,next)=>{
    req.val = "I am Yashil Busa"
    // console.log("Middleware 1");
    next()
})

app.use((req,res,next)=>{
    // console.log("Middleware 2");
    next()
})


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


//Template Engine
app.set('views','./Views'); 
app.set('view engine','ejs');

app.get('/homeEngine',(req,res)=>{
    res.render('home',{name:"Yashil Busa"})
})


app.listen(port,()=>{
    console.log(`Server is Running on http://localhost:${port}`);
})