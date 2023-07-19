const express = require('express');
const router = express.Router();
const reviewCtrl = require('../../controllers/api/reviews');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


//GET all reviews /:id/reviews
router.get('/:id/reviews', ensureLoggedIn, reviewCtrl.allReviews);

//POST post a review /:id/reviews/new
router.post('/:id/reviews/new', ensureLoggedIn, reviewCtrl.createReview);


module.exports = router
