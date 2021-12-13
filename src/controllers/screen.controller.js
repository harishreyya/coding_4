const express = require("express");

const router = express.Router();

const screen = require("../models/screen.model")

const crudController = require("./crud.controller")

router.post("",crudController.post(screen))

router.get("",async(req,res)=>{

    const screen = await

    screen.find().lean().exec()

    return res.status(200).send({screen})

})

router.delete("/:id",crudController.deleteOne(screen))

module.exports = router;

