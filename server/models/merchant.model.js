const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MerchantSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    max: 100,
  },
  imageUrl: {
    type: String,
    trim: true,
    max: 1000,
    default: '',
  },
  description: {
    type: String,
    required: true,
    trim: true,
    max: 1000,
  },
  about: {
    type: String,
    default: '',
    trim: true,
    max: 10000,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
});

MerchantSchema.methods.summary = function () {// eslint-disable-line
  const summary = {
    id: this._id.toString(),// eslint-disable-line
    title: this.title,
    imageUrl: this.imageUrl,
    description: this.description,
    isFeatured: this.isFeatured,
    description: this.description,
    about: this.about,
  };

  return summary;
};


module.exports = mongoose.model('Merchant', MerchantSchema);
