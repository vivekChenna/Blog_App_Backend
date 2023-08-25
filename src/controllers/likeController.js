const Like = require("../models/likeModel");
const Post = require("../models/postModel");

const createLike = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({
      post,
      user,
    });

    const savedLike = await like.save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "liked",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "something went wrong",
      err: { error },
    });
  }
};

module.exports = {
  createLike,
};
