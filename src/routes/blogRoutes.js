const express = require("express");
const router = express.Router();
const {
  createPost,
  getPostById,
  getAllPosts,
} = require("../controllers/postController");
const { createComment } = require("../controllers/commentController");
const { createLike, unlikeFunc } = require("../controllers/likeController");

router.post("/createpost", createPost);
router.post("/createcomment", createComment);
router.get("/post/:id", getPostById);
router.get("/posts", getAllPosts);
router.post("/likes/like", createLike);
router.post("/likes/unlike", unlikeFunc);

module.exports = router;
