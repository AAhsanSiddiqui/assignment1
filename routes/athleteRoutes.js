const express = require("express")
const athleteControllers = require("../controllers/athleteController")
const router = express.Router();




router
.route("/")
.get(athleteControllers.getAllAthelete)
.post(athleteControllers.createAthelete)


// router
// .route("/:id")
// .get(athleteControllers.getAthelete)
// .patch(athleteControllers.updateAthelete)
// .delete(athleteControllers.deleteAthelete)



module.exports = router;