const express = require('express')
const router = express.Router();

//Router Level MiddleWare
router.use((req, res, next) => {
    console.log("Blog MiddleWare");
    console.log('Time: ', Date.now())
    next()
})


router.get('/',(req,res)=>{
    res.send("Blog Home Page")
})

router.get('/about',(req,res)=>{
    res.send("Blog About Page")
})

router.get('/blogspot/:any',(req,res)=>{
    res.send(`Fetch the Blogspot for ${req.params.any}`)
})

module.exports = router