const router = require("express").Router();
const Product = require("../models/product");
const Bundle = require("../models/bundle");

router.post("/", async (req, res) => {
  try {
    const bundle = new Bundle(req.body);
    await bundle.save();
    res.send(bundle);
  } catch (error) {
    res.status(500).send({ error: "Bundle couldn't be created" });
  }
});

router.get("/", async (req, res) => {
  const bundles = await Bundle.find({});

  if (!bundles) {
    res.status(404).send({ error: "No bundles found" });
  }

  res.send(bundles);
});

// router.get("/:id", async (req, res) => {
//   const bundle = await Bundle.findById(req.params.id);
//   if (!bundle) {
//     res.status(404).send({ error: "Bundle not found" });
//   }
//   res.send(bundle);
// });

router.post("/addProduct/:bundleID", async (req, res) => {
  //   console.log(req.body);
  try {
    const product = await Product({
      ...req.body,
      BundleID: req.params.bundleID,
    });
    console.log(req.body);
    await product.save();
    res.send(product);
  } catch (error) {
    res.status(500).send({ error: "Product couldn't be added to bundle" });
  }
});

router.get("/getAll", async (req, res) => {
  try {
    const bundles = await Bundle.find({}).populate("products");
    if (!bundles) {
      res.status(404).send({ error: "Bundle not found" });
    }
    console.log(bundles);
    res.send(bundles);
  } catch (error) {
    res.status(500).send({ error: "Something went wrong" });
  }
});

module.exports = router;
