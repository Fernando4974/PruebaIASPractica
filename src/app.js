require('dotenv').config();
const express=require('express');

const {TestConnection}=require('./config/database');


const app=express();

app.use(express.json());

PORT=process.env.APP_PORT || 3000;

app.get('/',(req,res)=>{

    res.send("API de productos funcionando api-1");
})
 async function StartServer() {

    await TestConnection();
    app.listen(PORT,()=>{
    
    console.log(`API en el puerto ${PORT}`);
    console.log(`accede a la appi en  http://localhost: ${PORT}`);
    

 })
}
 StartServer();