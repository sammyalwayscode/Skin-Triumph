const productModel = require("../model/productModel");
const cloudinary = require("../config/cloudinary");

const getAllProducts = async (req, res) => {
  try {
    const productGet = await productModel.find();
    res.status(200).json({
      message: "All Products",
      data: productGet,
    });
  } catch (error) {
    res.status(404).json({
      message: "Couldn't Get Data",
      data: error.message,
    });
  }
};

const getOneProduct = async (req, res) => {
  try {
    const singleGet = await productModel.findById(req.params.id);
    res.status(200).json({
      message: "Product Goten",
      data: singleGet,
    });
  } catch (error) {
    res.status(404).json({
      message: "Couldn't Get Data",
      data: error.message,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const {
      productName,
      productDescription,
      shortDescription,
      price,
      category,
    } = req.body;
    const cloudImage = await cloudinary.uploader.upload(req.file.path);
    const productUpload = await productModel.create({
      productName,
      productDescription,
      shortDescription,
      price,
      category,
      avatar: cloudImage.secure_url,
      avatarID: cloudImage.public_id,
    });

    res.status(200).json({
      message: "Product Uploaded Sucessfully",
      data: productUpload,
    });
  } catch (error) {
    res.status(404).json({
      message: "Couldn't Create Product",
      data: error.message,
    });
  }
};

module.exports = { getAllProducts, createProduct, getOneProduct };
