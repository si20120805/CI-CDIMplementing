const express= require("express");
const app=express();
app.get('/alllist',(req,res)=>{
    res.json({msg:'success'})
})
app.listen(5000,()=>{console.log('listinging to the port ')})