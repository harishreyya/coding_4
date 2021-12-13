const express = require("express");

const router = express.Router();

const show = require("../models/show.model")

const crudController = require("./crud.controller")

router.post("",crudController.post(show))

router.get("",async(req,res)=>{

    const show = await

    show.find().lean().exec()

    return res.status(200).send({show})

})

router.delete("/:id",crudController.deleteOne(show))

module.exports = router;

