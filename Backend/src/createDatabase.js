const connectDB = require("./connector");
// const { productModel } = require("./connector");
const Product = require("./Schema");
const data = require("./data");

connectDB();

const refreshAll = async () => {
  await Product.deleteMany();
  console.log(data);
  try {
    await Product.insertMany(data).then((res) => {
      console.log(res);
    });
    process.exit(1);
  } catch (err) {
    console.log(err);
  }
};
refreshAll();
