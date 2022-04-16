module.exports = (sequelize, DataTypes) =>{
    
    let alias = "MetodoDePago";
    
    let columnas = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        nombreMetodo: {type: DataTypes.STRING(50)},
    };
let config = {
        tableName:'MetodoDePago',
        camelCase:false,
        timestamps:false
    }

    const metodoDePago = sequelize.define(alias,columnas,config);


    MetodoDePago.associate = function (models){ 

        MetodoDePago.BelongsTo(models.Factura, {   
            as: "Factura",
            foreignKey: "metodo_FK"
             });
     }

     
    return metodoDePago
}