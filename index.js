const express= require("express");
const app=express();
app.get('/alllist',(req,res)=>{
    res.json({msg:'success'})
})
app.get('/all',(req,res)=>{
    console.log()
    res.json({msg:'to test the tag in the GIT'})
})
app.listen(5000,()=>{console.log('listinging to the port ')})