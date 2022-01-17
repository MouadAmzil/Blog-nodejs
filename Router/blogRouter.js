const express = require("express");
const router = express.Router();
const controller = require("../controllers/blogsControllers")

//TODO GET is for get all data
router.get("/", controller.get_index)
//TODO POST is for get all data
router.post("/", controller.create)
//TODO Get some details for blog
router.get("/:id", controller.details)
//TODO Delete
router.delete("/:id", controller.delete_blog)

module.exports = router;
