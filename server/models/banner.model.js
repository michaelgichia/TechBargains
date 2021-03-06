const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BannerSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    max: 100
  },
  backlink: {
    type: String,
    trim: true,
    max: 1000,
    default: ""
  },
  imageUrl: {
    type: String,
    trim: true,
    max: 1000,
    default: "",
  },
  public_id: {
    type: String,
    default: "",
    max: 500
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
});

BannerSchema.methods.summary = function() {
  // eslint-disable-line
  const summary = {
    id: this._id.toString(), // eslint-disable-line
    title: this.title,
    backlink: this.backlink,
    imageUrl: this.imageUrl,
    isFeatured: this.isFeatured,
    public_id: this.public_id
  };

  return summary;
};

module.exports = mongoose.model("Banner", BannerSchema);
