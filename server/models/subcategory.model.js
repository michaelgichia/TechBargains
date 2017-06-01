const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubCategorySchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    max: 100,
  },
  category: [{
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  }],
});

SubCategorySchema.methods.summary = function () {// eslint-disable-line
  const summary = {
    id: this._id.toString(),// eslint-disable-line
    title: this.title,
    category: this.category,
  };

  return summary;
};


module.exports = mongoose.model('SubCategory', SubCategorySchema);
