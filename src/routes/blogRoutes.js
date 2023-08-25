const express = require("express");
const router = express.Router();
const {
  createPost,
  getPostById,
  getAllPosts,
} = require("../controllers/postController");
const { createComment } = require("../controllers/commentController");
const { createLike } = require("../controllers/likeController");

router.post("/createpost", createPost);
router.post("/createcomment", createComment);
router.get("/post/:id", getPostById);
router.get("/posts", getAllPosts);
router.post("/like", createLike);

module.exports = router;
