module.exports = (sequelize, DataTypes) =>{
    
    let alias = "Factura";
    
    let columnas = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        monto:{type: DataTypes.FLOAT},  
        numeroFactura: {type: DataTypes.STRING(100)},
    };
let config = {
        tableName:'Factura',
        camelCase:false,
        timestamps:false
    }

    const factura = sequelize.define(alias,columnas,config);
    return factura
}