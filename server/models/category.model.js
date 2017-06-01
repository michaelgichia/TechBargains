const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    max: 100,
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
    isFeatured: this.isFeatured,
  };

  return summary;
};

module.exports = mongoose.model('Category', CategorySchema);
