const mongoose = require('mongoose');
const productSchema = require('./product');
const Schema = require('mongoose').Schema;


const lineProductSchema = new Schema ({
    qty: {type: Number, default: 1},
    product: productSchema
})

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    lineItems: [lineProductSchema],
    isPaid: { type: Boolean, default: false },
  }, {
    timestamps: true,
    // Serialize those virtuals!
    toJSON: { virtuals: true }
  });


module.exports = mongoose.model('Order', orderSchema);