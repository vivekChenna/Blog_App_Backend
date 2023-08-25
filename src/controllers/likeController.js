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

const unlikeFunc = async (req, res) => {
  try {
    const { post, like } = req.body;

    const unlikeData = await Like.findOneAndDelete({
      post: post,
      _id: like,
    });

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: unlikeData._id } },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "successfully deleted like from post",
      err: {},
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "not able to deleted like",
      err: { error },
    });
  }
};

module.exports = {
  createLike,
  unlikeFunc,  
};
