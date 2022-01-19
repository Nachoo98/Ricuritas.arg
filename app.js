const express=require('express');
const path=require('path');
const app=express();


app.get('/',(req,res)=>{
    res.send("Bienvenidos");
})

app.listen(3015,);