const { default: mongoose } = require('mongoose');
const Product = require('../../models/product');
const { response } = require('express');

module.exports = {
    index,
    getOneProduct,
    create,
    deleteProduct,
    updateProduct,

    
};

//get all products
async function index(req, res) {
    const products = await Product.find().sort({createdAt: -1})
    res.json(products);
}

//get one product
async function getOneProduct(req, res) {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(200).json({error: "No such product"})
    }

    const product = await Product.findById(id).populate('review.user');
    
    if (!product) {
        return res.status(404).json({error: 'No such product'});
    } 

    res.status(200).json(product);
}

//add a new product
async function create(req, res) {
   
    try {
        req.body.user = req.user
        console.log(req.body)
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//delete a product 
async function deleteProduct(req, res) {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(200).json({error: "No such product"})
    }
    const product = await Product.findOneAndDelete({_id: id});
    if (!product) {
        return res.status(404).json({error: 'No such product'});
    } 
    res.status(200).json(product);
}

//update a product amount
async function updateProduct(req, res) {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(200).json({error: "No such product"})
    }
    
    const product = await Product.findOneAndUpdate({_id: id}, {
        //spreading the properties of the object in this new object.
        ...req.body
    }, 
    //give you the new updated document as a response instead of the original one
    { new: true });
    if (!product) {
        return res.status(404).json({error: 'No such product'});
    } 
    res.status(200).json(product);
}





