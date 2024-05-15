const express= require("express");
const app=express();
app.get('/alllist',(req,res)=>{
    res.json({msg:'success'})
})
app.get('/all',(req,res)=>{
    console.log()
    console.log('razer')
    res.json({msg:'to test the tag in the GIT'})
})

app.get('/alllist',(req,res)=>{
    console.log()
    console.log('razer')
    res.json({msg:'into the develop branch checking'})
})
app.listen(5000,()=>{console.log('listinging to the portttttttttttt ',process.env.PORT)})