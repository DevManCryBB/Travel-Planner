const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { Travelers } = require('.');

class Trips extends Model {}

Trips.init({
    // add properites here, ex:
    id: {
         type: DataTypes.INTEGER,
         allowNull:false,
         unique:true,
         primaryKey:true,
         autoIncrement:true
    },
    trip_budget:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    traveler_amount:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    traveler_id:{
        type:DataTypes.INTEGER,
        references: {
            model: 'Travelers',
            key: 'id'
        }
    },
    location_id:{
        type:DataTypes.INTEGER,
        references: {
            model: 'Locations',
            key: 'id'
        }
    }
},{
    sequelize
});

module.exports=Travelers