module.exports = (sequelize, DataTypes) =>{
    
    let alias = "Producto_Pedido";
    
    let columnas = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        producto_FK: {type: DataTypes.INTEGER},
        pedido_FK: {type: DataTypes.INTEGER},
    };
let config = {
        tableName:'Producto_Pedido',
        camelCase:false,
        timestamps:false
    }

    const producto_pedido = sequelize.define(alias,columnas,config);


    
     producto_pedido.associate = function (models){

        producto_pedido.belongsTo(models.Producto, {   
          
            foreignKey: "producto_FK"});


         producto_pedido.belongsTo(models.Pedido, {   
       
        foreignKey: "pedido_FK"});
     }

    return producto_pedido;
}