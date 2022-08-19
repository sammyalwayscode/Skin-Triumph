const blogModel = require("../model/blogModel");
const cloudinary = require("../config/cloudinary");

const getBlogs = async (req, res) => {
  try {
    const blogsGet = await blogModel.find();
    res.status(200).json({
      message: "Blogs Gotten",
      data: blogsGet,
    });
  } catch (error) {
    res.status(404).json({
      message: "An Error Occoured",
    });
  }
};

const getBlog = async (req, res) => {
  try {
    const getABlog = await blogModel.findById(req.params.id);
    res.status(200).json({
      message: "Goton Sucessfully",
      data: getABlog,
    });
  } catch (error) {
    res.status(404).json({
      message: "An Error Occored",
      data: error.message,
    });
  }
};

const createBlog = async (req, res) => {
  try {
    const {
      blogTitle,
      blogShotDes,
      descPragraphOne,
      descPragraphTwo,
      descPragraphThree,
    } = req.body;

    const cloudImage = await cloudinary.uploader.upload(req.file.path);

    const createBlog = await blogModel.create({
      blogTitle,
      blogShotDes,
      descPragraphOne,
      descPragraphTwo,
      descPragraphThree,
      blogImg: cloudImage.secure_url,
      blogImgID: cloudImage.public_id,
    });

    res.status(201).json({
      message: "Blog Created Sucessfully",
      data: createBlog,
    });
  } catch (error) {
    res.status(404).json({
      message: "An Error Occoured",
      data: error.message,
    });
  }
};

module.exports = { getBlogs, createBlog, getBlog };
