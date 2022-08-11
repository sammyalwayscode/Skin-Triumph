const express = require("express");
require("./config/db");
const cors = require("cors");
const PORT = 2221;
const app = express();
const productRoute = require("./router/productRouter");
const adminRoute = require("./router/adminRouter");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("Ready🚀🚀🚀...");
});

app.use("/api/product", productRoute);
app.use("/api/admin", adminRoute);

app.listen(PORT, () => {
  console.log(`Server on PORT: ${PORT}`);
});
