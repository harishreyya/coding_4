const express = require("express")

const router = express.Router();

const Movie = require("../models/movie.model")
const crudController = require("./crud.controller")

router.post("",crudController.post(Movie))
router.get("", async(req,res) => {
    const movies = await Movie.find().lean().exec()

    return res.status(200).send({movies})
});



router.delete("/:id", crudController.deleteOne(Movie))



module.exports = router