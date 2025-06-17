//const { ForeignKeyConstraintError } = require("sequelize");

const Categoria = require('./categoria.js');
const Producto = require('./producto.js');

Producto.belongsTo(Categoria,{
    foreignKey: 'idCategoria',
    as:'categoria' 
});

Categoria.hasMany(Producto,{
    foreignKey: 'idCategoria',
    as: 'producto'
})

module.exports={Producto,Categoria}
