const router = require("express").Router();
const Product = require("../models/product");
const fetchProducts = require("../utilities/fetchProducts");

//localhost/api/products
router.get("/", async (req, res) => {
  const products = await fetchProducts(
    req.query.searchkey,
    parseInt(req.query.pageno)
  );

  res.send(products);
});

router.post("/", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.send(product);
});

module.exports = router;
