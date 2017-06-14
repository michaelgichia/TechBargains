const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    max: 100,
  },
  description: {
    type: String,
    trim: true,
    max: 10000,
    default: '',
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
});

CategorySchema.methods.summary = function () {// eslint-disable-line
  const summary = {
    id: this._id.toString(),// eslint-disable-line
    name: this.name,
    description: this.description,
    isFeatured: this.isFeatured,
  };

  return summary;
};

CategorySchema.methods.summaryName = function () {// eslint-disable-line
  const summaryName = {
    id: this._id.toString(),// eslint-disable-line
    ids: this._id,// eslint-disable-line
    name: this.name,
    categoryArray: [],
  };

  return summaryName;
};

module.exports = mongoose.model('Category', CategorySchema);
