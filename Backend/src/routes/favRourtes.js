const express = require("express");
const router = express.Router();
const Fav = require("../favouriteSchema");
const Product = require("../Schema");
const verifyToken = require("./verifyUser");

router.get("/", async (req, res) => {
  res.send({ msg: "Bello" });
});

router.post("/:id", verifyToken, async (req, res) => {
  const favourite = await Fav.find({ user: req.user._id });
  const prod = await Product.findById(req.params.id);
  if (favourite[0]) {
    const hello = new Fav({
      user: req.user._id,
      items: [...favourite[0].items, { product: prod, img: req.body.img }],
    });
    await Fav.deleteOne(favourite._id);
    await hello.save();
    res.send({ message: "updated" });
  } else {
    const createdFav = new Fav({
      user: req.user._id,
      items: [{ product: prod, img: req.body.img }],
    });
    const nnw = await createdFav.save();
    res.send({ message: "created" });
  }
});

module.exports = router;
