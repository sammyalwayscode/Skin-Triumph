const hapijoi = require("@hapi/joi");

const validateAdmin = (data) => {
  const adminValidate = hapijoi.object({
    name: hapijoi.string(),
    email: hapijoi.string().email(),
    password: hapijoi.string().min(3).max(25),
  });
  return adminValidate.validate(data);
};
module.exports.validateAdmin = validateAdmin;
