const mongoose = require("mongoose");

const favSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      },
      img: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = Fav = mongoose.model("favSchema", favSchema);
