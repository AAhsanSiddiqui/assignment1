const express = require("express");
const categoryController = require("../controllers/categoryController");
const router = express.Router();




router
.route("/")
.get(categoryController.getAllCategory)
.post(categoryController.creatCat)

router
.route("/:id")
.patch(categoryController.updateCategory)
.delete(categoryController.deleteCategory)
.get(categoryController.getCategory)



module.exports = router;