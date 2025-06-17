const {DataTypes}= require('sequelize');
const { DECIMAL } = require('sequelize');
const {sequelize}= require('../config/database');

const Producto=sequelize.define('Producto',{

    id:{
         type:DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
        },
    name:{
        type:DataTypes.STRING,
        unique:true,
        allowNull: false,

    },
    descripcion:{
        type:DataTypes.TEXT,
        allowNull:true,
    },
    precio:{
        type: DataTypes.DECIMAL(10, 2),
        defaulValue:0.00,
        allowNull:false,
    },
    stock:{
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0,
    },
},
{
    tableName: 'productos',   
    timestamps: true,        
    underscored: true,

})

module.exports=Producto;