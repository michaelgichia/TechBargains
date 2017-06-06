const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    max: 200,
  },
  description: {
    type: String,
    trim: true,
    max: 1000,
    default: '',
  },
  features: [{
    type: String,
    max: 1000,
  }],
  backlink: {
    type: String,
    trim: true,
    max: 1000,
    default: '',
  },
  percentage: {
    type: String,
    required: true,
  },
  subCategory: {
    type: Schema.Types.ObjectId,
    ref: 'SubCategory',
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  merchant: {
    type: Schema.ObjectId,
    ref: 'Merchant',
    required: true,
  },
  coupon: {
    type: String,
    default: '',
  },
  expire: {
    type: Date,
  },
  image: {
    type: String,
    trim: true,
    max: 1000,
    default: '',
  },
  themeColor: {
    type: String,
    default: '',
    max: 10,
  },
  isFeatured: {
    type: Boolean,
    default: true,
  },
  isCoupon: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

ItemSchema.methods.summary = function () {// eslint-disable-line
  const summary = {
    id: this._id.toString(),// eslint-disable-line
    name: this.name,
    description: this.description,
    backlink: this.backlink,
    percentage: this.percentage,
    category: this.category,
    subCategory: this.subCategory,
    merchant: this.merchant,
    coupon: this.coupon,
    expire: this.expire,
    features: this.features,
    created: this.created,
    image: this.image,
    themeColor: this.themeColor,
    isFeatured: this.isFeatured,
    isCoupon: this.isCoupon,
  };

  return summary;
};

module.exports = mongoose.model('Item', ItemSchema);

