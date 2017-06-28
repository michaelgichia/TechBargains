const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autopopulate = require("mongoose-autopopulate");
const mongooseAlgolia = require("mongoose-algolia");

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    max: 200
  },
  features: {
    type: String,
    trim: true,
    max: 10000,
    default: ""
  },
  backlink: {
    type: String,
    trim: true,
    max: 1000,
    default: ""
  },
  percentage: {
    type: String,
    max: 10,
    default: ""
  },
  subCategory: [
    {
      type: Schema.Types.ObjectId,
      ref: "SubCategory",
      autopopulate: true
    }
  ],
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    autopopulate: true
  },
  merchant: {
    type: Schema.Types.ObjectId,
    ref: "Merchant",
    autopopulate: true
  },
  coupon: {
    type: String,
    default: ""
  },
  expire: {
    type: Date,
    default: undefined
  },

  image: {
    type: String,
    trim: true,
    max: 1000,
    default: ""
  },
  themeColor: {
    type: String,
    default: "",
    max: 10
  },
  isFeatured: {
    type: Boolean,
    default: true
  },
  isShipped: {
    type: String,
    trim: true,
    max: 500,
    default: ""
  },
  public_id: {
    type: String,
    max: 500,
    default: ""
  },
  isCoupon: {
    type: Boolean,
    default: false
  },
  tags: [
    {
      type: String,
      required: true
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

ItemSchema.index({ expire: 1 }, { expireAfterSeconds: 0 });

ItemSchema.plugin(autopopulate);

ItemSchema.methods.summary = function() {
  const summary = {
    id: this._id.toString(),
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
    createdAt: this.createdAt
  };

  return summary;
};

// ItemSchema.plugin(mongooseAlgolia,{
//   appId: process.env.appId,
//   apiKey: process.env.apiKey,
//   indexName: 'item',
//   selector: '-_v -themeColor',
//   populate: [{
//     path: 'subCategory',
//     select: '_id title'
//   },{
//     path: 'category',
//     select: '_id name'
//   },{
//     path: 'merchant',
//     select: '_id title'
//   }],
//   debug: true,
//   mappings: {
//     tags: function(value) {
//       return value.join(' ');
//     }
//   }

// });

let Model = mongoose.model("Item", ItemSchema);

// Model.SyncToAlgolia();

module.exports = Model;
