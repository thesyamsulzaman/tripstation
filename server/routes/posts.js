const express = require("express");
const router = express.Router();

const PostController = require("../controllers/post");

router.get("/", PostController.getAllPosts);

module.exports = router;
