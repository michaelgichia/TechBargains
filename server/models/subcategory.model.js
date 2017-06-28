const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubCategorySchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    max: 100
  },
  description: {
    type: String,
    trim: true,
    max: 10000,
    default: ""
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  }
});

SubCategorySchema.methods.summary = function() {
  // eslint-disable-line
  const summary = {
    id: this._id.toString(), // eslint-disable-line
    title: this.title,
    description: this.description,
    category: this.category
  };

  return summary;
};

module.exports = mongoose.model("SubCategory", SubCategorySchema);
