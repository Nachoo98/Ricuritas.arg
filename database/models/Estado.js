module.exports = (sequelize, DataTypes) =>{
    
    let alias = "Estado";
    
    let columnas = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},  
        nombreEstado: {type: DataTypes.STRING(50)},
    };
let config = {
        tableName:'Estado',
        camelCase:false,
        timestamps:false
    }

    const estado = sequelize.define(alias,columnas,config);


   estado.associate = function (models){ 

     estado.belongsTo(models.Pedido, {   
            as: "Pedido",
            foreignKey: "estado_FK"
             });
     }


    return estado
}