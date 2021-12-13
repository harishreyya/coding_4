const express = require("express");

const router = express.Router();

const User = require("../models/user.model");


const crudController = require("./crud.controller")

router.post("",crudController.post(User))

router.get("",async(req,res)=>{

    const users = await

    User.find().lean().exec()

    return res.status(200).send({users})

})

router.delete("/:id",crudController.deleteOne(User))

module.exports = router;

