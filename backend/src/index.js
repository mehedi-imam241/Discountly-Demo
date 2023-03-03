require("dotenv").config();
const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const bundleRoutes = require("./routes/bundleRoute");
require("./db/mongoose");

const app = express();

app.use(express.json());
// Enable CORS for all routes
app.use(cors());

app.use("/api/products", productRoutes);
app.use("/api/bundles", bundleRoutes);
// Define your routes here

// Start the server
const port = process.env.PORT || 6969;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
