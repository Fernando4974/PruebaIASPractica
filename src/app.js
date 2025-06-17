require('dotenv').config();
const express=require('express');
const{Categoria,Producto}= require('./models');
const {TestConnection}=require('./config/database');
const app=express();
const {sequelize}= require('./config/database');

app.use(express.json());

PORT=process.env.APP_PORT || 3000;

app.get('/',(req,res)=>{

    res.send("API de productos funcionando api-1");
})
 async function StartServer() {

    await TestConnection();
    try {
        
        await sequelize.sync({alter:true});
        console.log('Modelos sincronizados con la BD');

    } catch (error) {

        console.error(error+'Error al sincronizar modelos');
        process.exit(1);
        
    }
    app.listen(PORT,()=>{
    
    console.log(`API en el puerto ${PORT}`);
    console.log(`accede a la appi en  http://localhost: ${PORT}`);
    

 })
}
 StartServer();