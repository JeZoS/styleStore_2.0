const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    gender:String,
    skin_tone:String,
    body_type:String,
    product_type:String,
    statement:String,
    ocassion:String,
    suggestion:String,
    src:String,
});


module.exports = Product = mongoose.model('product',productSchema)