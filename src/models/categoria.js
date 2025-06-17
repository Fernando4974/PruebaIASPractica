//const { INTEGER } = require("sequelize");
const {DataTypes} = require("sequelize");
const {sequelize}= require("../config/database.js");   

const Categoria= sequelize.define('Categoria',{

   id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
   },
   name:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true

   },
},
   {

   tableName: 'categorias',
   timestamps: true,
   undersored: true

});
module.exports=Categoria;