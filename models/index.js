const Travelers = require("./travel");
const Locations = require("./location");
const Trips = require("./trips");

Travelers.hasMany(Locations, {
    foreignKey: 'traveler_id',
    onDelete: 'CASCADE'
});

Locations.hasMany(Travelers, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE'
});

module.exports = {
    Travelers:Travelers,
    Locations:Locations,
    Trips:Trips
}