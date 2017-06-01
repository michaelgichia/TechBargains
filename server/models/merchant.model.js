const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MerchantSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    max: 100,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
});

MerchantSchema.methods.summary = function () {// eslint-disable-line
  const summary = {
    id: this._id.toString(),// eslint-disable-line
    title: this.title,
    description: this.description,
  };

  return summary;
};


module.exports = mongoose.model('Merchant', MerchantSchema);
