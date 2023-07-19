const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const reviewSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  content: {type: String, required: true},
  rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true
    }
},{
  timestamps: true
})

const productSchema = new Schema({
  image: {type: String},
  title: { type: String, required: true },
  description: {type: String},
  price: { type: Number, required: true },
  review: [reviewSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);





