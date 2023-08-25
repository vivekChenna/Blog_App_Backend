const Post = require("../models/postModel");

const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;

    const response = await Post.create({ title, description });

    return res.status(200).json({
      success: true,
      message: "successfully created a post",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "not able to create a post",
      data: {},
      err: { error },
    });
  }
};

const getPostById = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await Post.findById(id).populate("comments");

    return res.status(201).json({
      success: true,
      data: post,
      message: "successfully fetched the post",
    });
  } catch (error) {
    console.log("something went wrong");
    console.log(error);
    return res.status(201).json({
      success: false,
      data: {},
      message: "not able to  fetch the post",
      err: { error },
    });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
      .populate("comments")
      .populate("likes")
      .exec();

    return res.status(201).json({
      success: true,
      data: { posts },
      message: "fetched all posts successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      data: {},
      message: "not able to fetch the posts",
      err: { error },
    });
  }
};

module.exports = {
  createPost,
  getPostById,
  getAllPosts,
};
