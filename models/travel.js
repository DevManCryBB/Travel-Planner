const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Travelers extends Model {}

Travelers.init({
    // add properites here, ex:
    name: {
         type: DataTypes.STRING,
         allowNull:false,
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            min:0
        }
    },
    species:{
        type:DataTypes.STRING,
        allowNull:false
    },
    notes:{
        type:DataTypes.TEXT
    }
},{
    sequelize
});

module.exports=Travelers