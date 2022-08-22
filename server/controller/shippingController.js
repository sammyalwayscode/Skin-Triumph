const shipingModel = require("../model/shippingModel");

const getShipping = async (req, res) => {
  try {
    const getShip = await shipingModel.find();
    res.status(200).json({
      message: "Data Goten",
      data: getShip,
    });
  } catch (error) {
    res.status(404).json({
      message: "An Error Occoured",
      data: error.message,
    });
  }
};

const createShip = async (req, res) => {
  try {
    const { email, username, state, LGA, phone, address, delivered, orders } =
      req.body;
    const newShip = await shipingModel.create({
      email,
      username,
      state,
      LGA,
      phone,
      address,
      delivered,
      orders,
    });
    res.status(201).json({
      message: "Order Created",
      data: newShip,
    });
  } catch (error) {
    res.status(404).json({
      message: "An Error Occoured",
      data: error.message,
    });
  }
};

module.exports = { getShipping, createShip };
