const express = require("express");

const router = express.Router();

const Seat = require("../models/seats.model")

const crudController = require("./crud.controller")

router.post("",crudController.post(Seat))

router.get("",async(req,res)=>{

    const seats = await

    Seat.find().lean().exec()

    return res.status(200).send({seats})

})

router.delete("/:id",crudController.deleteOne(Seat))

module.exports = router;
