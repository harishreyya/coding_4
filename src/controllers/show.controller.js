const express = require("express");

const router = express.Router();

const Show = require("../models/show.model")

const crudController = require("./crud.controller")

router.post("",crudController.post(Show))

router.get("",async(req,res)=>{

    const shows = await

    Show.find().lean().exec()

    return res.status(200).send({shows})

})

router.delete("/:id",crudController.deleteOne(Show))

module.exports = router;

