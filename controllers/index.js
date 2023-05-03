const express = require('express');
const router = express.Router();

const locationRoutes = require("./locationController");
const travelRoutes = require("./travelController");
const tripRoutes = require("./tripsController");

router.get("/",(req,res)=>{
    res.send("this is the homepage!")
})

router.use("/api/locations",locationRoutes)
router.use("/api/trips",travelRoutes)
router.use("/api/trips",tripRoutes)


module.exports = router;