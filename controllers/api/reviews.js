const Product = require('../../models/product');

module.exports = {
    createReview,
    allReviews,
}


async function allReviews(req, res) {
    const product = await Product.findById(req.params.id);
    const review = product.review.findAll();
    res.json(review);
}

async function createReview(req, res) {
    req.body.user = req.user._id;
    console.log(req.body);
    console.log(req.user);
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({ error: 'Product not found 👎' });
    }
    product.review.push(req.body);
    try {
       const savedProduct = await product.save();
        return res.status(201).json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while saving the review 🤷‍♀️' });
    }
}