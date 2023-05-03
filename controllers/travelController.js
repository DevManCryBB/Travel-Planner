const router = require("express").Router();
const travel = require("../../models");

router.get("/", async (req,res)=> {
    try{
        const travelData = await travel.findAll();
        res.json(travelData);

    } catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;