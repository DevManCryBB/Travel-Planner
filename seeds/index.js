const sequelize = require("../config/connection");

const {Travelers,Locations,Trips} = require("../models")

const travellers = [
    {
      "name": "Sal",
      "email": "sal@hotmail.com"
    },
    {
      "name": "Lernantino",
      "email": "lernantino@gmail.com"
    },
    {
      "name": "Amiko",
      "email": "amiko2k20@aol.com"
    },
  ]

const locations = [
    {
      "location_name": "Japan"
    },
    {
      "location_name": "South Korea"
    },
    {
      "location_name": "Costa Rica"
    },
    {
      "location_name": "Germany"
    },
    {
      "location_name": "Taiwan"
    },
  ]

const trips = [
    {
        trip_budget:10000,
        traveler_amount:3,
        traveler_id:1,
        location_id:1
    },
    {
        trip_budget:10000,
        traveler_amount:4,
        traveler_id:2,
        location_id:2
    }
    {
        trip_budget:10000,
        traveler_amount:3,
        traveler_id:3,
        location_id:3
    },
    {
        trip_budget:10000,
        traveler_amount:3,
        traveler_id:4,
        location_id:4
    },
    {
        trip_budget:10000,
        traveler_amount:3,
        traveler_id:5,
        location_id:5
    },
]

const startSeedin = async ()=>{
    try{
        await sequelize.sync({force:true});
        const tripsData = await trips.bulkCreate(trips);
        const locationsData = await locations.bulkCreate(locations);
        const travelersData = await locations.bulkCreate(travelers);
        console.log("all done!")
        process.exit(0);
    } catch (err){
        console.log(err)
    }
}

startSeedin()
