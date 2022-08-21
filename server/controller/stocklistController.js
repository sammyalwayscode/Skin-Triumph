const stocklistModel = require("../model/stockListModel");

const getAllStocklist = async (req, res) => {
  try {
    const getStore = await stocklistModel.find();
    res.status(200).json({
      message: "Data Gotten Sucessfully",
      data: getStore,
    });
  } catch (error) {
    res.status(404).json({
      message: "An Error Occoured",
      data: error.message,
    });
  }
};

const getAStore = async (req, res) => {
  try {
    const oneStore = await stocklistModel.findById(req.params.id);
    res.status(200).json({
      message: "Data Gotten Sucessfully",
      data: oneStore,
    });
  } catch (error) {
    res.status(404).json({
      message: "An Error Occoured",
      data: error.message,
    });
  }
};

const createStore = async (req, res) => {
  try {
    const { office, phoneNo, address, email, hours } = req.body;
    const newStore = await stocklistModel.create({
      office,
      phoneNo,
      address,
      email,
      hours,
    });
    res.status(201).json({
      message: "Uploaded Sucessfully",
      data: newStore,
    });
  } catch (error) {
    res.status(404).json({
      message: "An Error Occoured",
      data: error.message,
    });
  }
};

module.exports = { getAStore, getAllStocklist, createStore };
