const express = require("express");

const router = express.Router();

const Screen = require("../models/screen.model")

const crudController = require("./crud.controller")

router.post("",crudController.post(Screen))

router.get("",async(req,res)=>{

    const screens = await

    Screen.find().lean().exec()

    return res.status(200).send({screens})

})

router.delete("/:id",crudController.deleteOne(Screen))

module.exports = router;

