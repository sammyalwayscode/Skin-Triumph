const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sammysamtest3@gmail.com",
    pass: "Sammysam2020@",
  },
});

module.exports = transport;
