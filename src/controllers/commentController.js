const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

const createComment = async (req, res) => {
  try {
    const { user, body, post } = req.body;

    const comment = new Comment({
      user,
      body,
      post,
    });

    const savedComment = await comment.save();

    /* updatedPost ko fetch karke layega fir uss post k andar 4 parameters hai 
    post k andar comments array me update kardenge savedComment ki id
    */
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      {
        new: true,
      }
    );

    console.log(updatedPost);

    return res.status(200).json({
      success: true,
      message: "successfully created a comment",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "not able to create a comment",
    });
  }
};

module.exports = {
  createComment,
};
