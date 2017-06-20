const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autopopulate = require("mongoose-autopopulate");
const mongooseAlgolia = require('mongoose-algolia');

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    max: 200,
  },
  features: {
    type: String,
    trim: true,
    max: 10000,
    default: '',
  },
  backlink: {
    type: String,
    trim: true,
    max: 1000,
    default: '',
  },
  percentage: {
    type: String,
      max: 10,
    default: '',
  },
  subCategory: {
    type: Schema.Types.ObjectId,
    ref: 'SubCategory',
    autopopulate: true,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    autopopulate: true,
    required: true,
  },
  merchant: {
    type: Schema.Types.ObjectId,
    ref: 'Merchant',
    autopopulate: true,
    required: true,
  },
  coupon: {
    type: String,
    default: '',
  },
  expire: { 
    type: Number,
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
  isShipped: {
    type: String,
    trim: true,
    max: 500,
    default: '',
  },
  public_id: {
    type: String,
    max: 500,
    default: '',
  },
  isCoupon: {
    type: Boolean,
    default: false,
  },
  tags: [{
    type: String,
    required: true,
  }],
  created: {
    type: Number,
    default:  new Date().getTime(),
  },
});

// autopopulate
ItemSchema.plugin(autopopulate);

ItemSchema.methods.summary = function () {// eslint-disable-line
  const summary = {
    id: this._id.toString(),// eslint-disable-line
    name: this.name,
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
    isShipped: this.isShipped,
    public_id: this.public_id,
    tags: this.tags,
  };

  return summary;
};

// ItemSchema.post('remove', function() {
//   // Sync with algolia
// });
ItemSchema.plugin(mongooseAlgolia,{
  appId: "YNZ7XXV49B",
  apiKey: "6bab08a4370c5d546b65e485a0f802ab",
  indexName: 'item',
  debug: true,
  mappings: {
    tags: function(value) {
      return value.join(' ');
    }
  }

});
let Model = mongoose.model('Item', ItemSchema);

Model.SyncToAlgolia();
Model.SetAlgoliaSettings({
  searchableAttributes: ['name','features']
});


module.exports = Model;

