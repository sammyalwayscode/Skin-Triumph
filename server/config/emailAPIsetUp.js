const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const CLIENT_ID =
  "560020375245-22inuvpgcn979j0c1hjgqekrjq3rl2t0.apps.googleusercontent.com";
const CLIENT_SECRETE = "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";
const CLIENT_REDIRECT = "https://developers.google.com/oauthplayground";
const CLIENT_TOKEN =
  "1//04uqq3L6WLcK9CgYIARAAGAQSNwF-L9IrBQsCs6iwJStcfmS8dEtSzVugIPo-NZs4A5BT6N19bY_aeiuk9ddn7HDJTTSssAdtLUc";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRETE,
  CLIENT_REDIRECT
);

oAuth2Client.setCredentials({ refresh_token: CLIENT_TOKEN });

const verifyMail = async (email, adminUser, name, adminToken) => {
  try {
    const tokenValue = crypto.randomBytes(23).toString("hex");
    // const adminToken = crypto.randomBytes(5).toString("hex");
    const myToken = jwt.sign({ tokenValue }, "elEGAnceiNYoUrskiNCAre", {
      expiresIn: "2d",
    });
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "sammysamtest3@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRETE,
        refreshToken: CLIENT_TOKEN,
        accessToken: accessToken.myToken,
      },
    });
    const mailOptions = {
      from: "Skin Triumph 📧📭📭📥 <sammysamtest3@gmail.com>",
      to: email,
      subject: "Account Verification",
      html: `
        Hi There✌️, This is Mama Yaya, CEO Skin Triumph Thanks for Signing up with our skin care platform ${name} , we're so glad to have you onboard, You're Signing up as an Admin Please  <a href="http://localhost:3000/api/admin/${adminUser._id}/${myToken}" > Click on this Link <a/> to verify your admin account. 

        And hear is your Admin's Secret Key <strong> ${adminToken} </strong> Please keep it secured as you'll be required of it in the next pharse of your verification

        This Link expires in 30min`,
    };
    const result = transport.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(
          "Go To your Email to Complect Your Verification",
          info.response
        );
      }
    });
    return result;
  } catch (error) {
    return error;
  }
};

const orderMail = async (email, opt) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "sammysamtest3@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRETE,
        refreshToken: CLIENT_TOKEN,
        accessToken: accessToken.myToken,
      },
    });
    const mailOptions = {
      from: "Skin Triumph 📧📭📭📥 <sammysamtest3@gmail.com>",
      to: email,
      subject: "Purchase Sucessfull",
      html: `
      Hi There✌️, Thank you for your Order, your items will be delivered between 2-3 working days.
      Our Dispatcher will get in touch with you
      Hear is your Product ID to get your Product from the dispatcher ${opt}
      `,
    };
    const result = transport.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("Order Has Been sent to your email...", info.response);
      }
    });
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = { verifyMail, orderMail };
