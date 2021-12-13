const express = require("express");

const router = express.Router();

const movies = require("../models/movie.model")

const crudController = require("./crud.controller")

router.post("",crudController.post(movies))

router.get("",async(req,res)=>{

    const movies = await

    movies.find().lean().exec()

    return res.status(200).send({movies})

})

router.delete("/:id",crudController.deleteOne(movies))

module.exports = router;
