const express = require("express")

const connect = require("./configs/db")

const userController = require("./controllers/user.controller");

const moviesController = require("./controllers/movie.controller")

const theaterController = require("./controllers/theater.controller")

const screenController = require("./controllers/screen.controller")

const showController = require("./controllers/show.controller")

const seatsController = require("./controllers/seats.controller")

const app = express();

app.use(express.json());

app.use("/users",userController)
app.use("/movies",moviesController)
app.use("/theaters",theaterController)
app.use("/screens",screenController)
app.use("/shows",showController)
app.use("/seats",seatsController)


app.listen(2345, async function (){
    await connect();
    console.log("listening on port 2345")
})