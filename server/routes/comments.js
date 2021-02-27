const express = require("express");
const router = express.Router();

const CommentController = require("../controllers/comment");

router.get("/", CommentController.getAllComments);

module.exports = router;
