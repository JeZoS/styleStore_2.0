const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../Schema");

router.post("/", (req, res) => {
  const product = new Product({
    _id: mongoose.Types.ObjectId(),
    gender: req.body.gender,
    skin_tone: req.body.skin_tone,
    body_type: req.body.body_type,
    product_type: req.body.product_type,
    statement: req.body.statement,
    ocassion: req.body.ocassion,
    suggestion: req.body.suggestion,
    src: req.body.src,
  });
  product
    .save()
    .then((result) => {
      console.log(result);
      res.send({
        data: result,
      });
    })
    .catch((err) => console.log(err));
});
//
//
//
//
//
//
//
router.get("/men_summer", async (req, res) => {
  const result = await Product.find(
    { gender: "male" } && { product_type: "summer" }
  );
  res.status(200).send(result);
});

router.get("/men_winter", async (req, res) => {
  const result = await Product.find(
    { gender: "male" } && { product_type: "winter" }
  );
  res.send(result);
});

router.get("/men_office", async (req, res) => {
  const result = await Product.find(
    { gender: "male" } && { product_type: "office" }
  );
  res.send(result);
});

router.get("/men_wedding", async (req, res) => {
  const result = await Product.find(
    { gender: "male" } && { product_type: "wedding" }
  );
  res.send(result);
});
//
//
//
//
//
//
//
router.get("/women_winter", async (req, res) => {
  const result = await Product.find(
    { gender: "female" } && { product_type: "winter" }
  );
  res.send(result);
});

router.get("/women_summer", async (req, res) => {
  const result = await Product.find(
    { gender: "female" } && { product_type: "summer" }
  );
  res.send(result);
});

router.get("/women_office", async (req, res) => {
  const result = await Product.find(
    { gender: "female" } && { product_type: "office" }
  );
  res.send(result);
});

router.get("/women_wedding", async (req, res) => {
  const result = await Product.find(
    { gender: "female" } && { product_type: "wedding" }
  );
  res.send(result);
});
//
//
//
//
//
//
//
router.get("/:_id", async (req, res) => {
  const result = await Product.find({ _id: req.params._id });
  res.send(result);
});

module.exports = router;
