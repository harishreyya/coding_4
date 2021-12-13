const express = require("express");

const router = express.Router();

const Theater = require("../models/theater.model")

const crudController = require("./crud.controller")

router.post("",crudController.post(Theater))

router.get("",async(req,res)=>{

    const theaters = await

    Theater.find().lean().exec()

    return res.status(200).send({theaters})

})

router.delete("/:id",crudController.deleteOne(Theater))

module.exports = router;

