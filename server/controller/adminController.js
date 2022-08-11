const adminModel = require("../model/adminModel");
const { validateAdmin } = require("../validation/userValidate");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require("../config/cloudinary");
const crypto = require("crypto");
const verifyAdmin = require("../model/verifyAdmin");
const { verifyMail } = require("../config/emailAPIsetUp");
const { error } = require("console");

const signUpAdmin = async (req, res) => {
  try {
    //Validating User
    const { error } = validateAdmin(req.body);

    if (error) {
      res.status(409).json({
        status: "Failed to Validate User",
        message: error.details[0].message,
      });
    } else {
      //Verify to check if user exist Before
      const oldUser = await adminModel.findOne({ email: req.body.email });
      if (oldUser) {
        res.status(404).json({
          message: "User already exist",
        });
      } else {
        //Creating a New User
        const { name, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);
        const cloudImage = await cloudinary.uploader.upload(req.file.path);
        const tokenValue = crypto.randomBytes(23).toString("hex");
        const adminToken = crypto.randomBytes(5).toString("hex");
        const myToken = jwt.sign({ tokenValue }, "elEGAnceiNYoUrskiNCAre", {
          expiresIn: "2d",
        });

        const adminUser = await adminModel.create({
          name,
          email,
          password: hashed,
          avatarImg: cloudImage.secure_url,
          avatarImgID: cloudImage.public_id,
          verifiedToken: myToken,
          OTP: adminToken,
        });

        await verifyAdmin.create({
          token: myToken,
          userID: adminUser._id,
          _id: adminUser._id,
        });

        verifyMail(email, adminUser._id, adminToken);

        res.status(201).json({
          message: "Check Your Inbox to Continue...",
        });
      }
    }
  } catch (error) {
    res.status(404).json({
      status: 404,
      message: error,
    });
  }
};

const adminVerify = async (req, res) => {
  try {
    const { mainOTP } = req.body;
    const user = await adminModel.findById(req.params.id);
    if (user) {
      if (user.verifiedToken !== "") {
        if (user.OTP === mainOTP) {
          await adminModel.findByIdAndUpdate(
            user._id,
            {
              isVerify: true,
              isAdmin: true,
              verifiedToken: "",
              OTP: "",
            },
            { new: true }
          );
          await verifyAdmin.findByIdAndUpdate(
            user._id,
            {
              userID: user._id,
              token: "",
            },
            { new: true }
          );
          res.status(200).json({
            message: "Verification Complete 👍, You can Now Go Sign In",
          });
        } else {
          res.status(404).json({
            status: error.message,
            message:
              "You've Entered to wrong OTP, please check your email to ensure you enter the correct OTP",
          });
        }
      } else {
        res.status(404).json({
          status: error.message,
          message: "You've Not been Verified Yet",
        });
      }
    } else {
      res.status(404).json({
        status: error.message,
        message: "Not A User",
      });
    }
  } catch (error) {
    res.status(404).json({
      status: 404,
      message: error.message,
    });
  }
};

const signInAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await adminModel.findOne({ email });
    if (user) {
      const checkPassword = await bcrypt.compare(password, user.password);
      if (checkPassword) {
        if (user.isVerify && user.verifiedToken === "") {
          const { password, ...info } = user._doc;
          const token = jwt.sign(
            {
              _id: user._id,
              isVerify: user.isVerify,
              isAdmin: user.isAdmin,
            },
            "elEGAnceiNYoUrskiNCAre",
            { expiresIn: "2d" }
          );

          res.status(200).json({
            message: `Welcome Back ${user.name}`,
            data: { token, ...info },
          });
        } else {
          verifyMail(email, user._id);

          res.status(201).json({
            message:
              "Please go to your Email to verify your Account Before you can Sign In",
          });
        }
      } else {
        res.status(404).json({
          message: "Invalid Password",
        });
      }
    } else {
      res.status(404).json({
        message: "User Not Recognised",
      });
    }
  } catch (error) {
    res.status(404).json({
      status: 404,
      message: error.message,
    });
  }
};

module.exports = { signUpAdmin, adminVerify, signInAdmin };
