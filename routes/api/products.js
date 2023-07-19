const express = require('express');
const router = express.Router();
const productCtrl = require('../../controllers/api/products');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//GET all posts /arttools
router.get('/', productCtrl.index);


//GET one post /arttools/:id
router.get('/:id', productCtrl.getOneProduct);

//POST create post /arttools
router.post('/', ensureLoggedIn, productCtrl.create);

//PUT update a post /arttools/:id
router.put('/:id', ensureLoggedIn, productCtrl.updateProduct);

//DELETE delete a post /arttools/:id
router.delete('/:id', ensureLoggedIn, productCtrl.deleteProduct);



//GET all reviews /:id/reviews
// router.get('/:id/reviews', productCtrl.allReviews);
 
//POST post a review /:id/reviews/new
// router.post('/:id/reviews/new', productCtrl.createReview);


module.exports = router;