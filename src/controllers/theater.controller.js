const express = require("express");

const router = express.Router();

const theater = require("../models/theater.model")

const crudController = require("./crud.controller")

router.post("",crudController.post(theater))

router.get("",async(req,res)=>{

    const theater = await

    theater.find().lean().exec()

    return res.status(200).send({theater})

})

router.delete("/:id",crudController.deleteOne(theater))

module.exports = router;

