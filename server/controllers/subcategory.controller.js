const SubCategory = require("../models/subcategory.model");

const Promise = require("bluebird");

const create = body =>
  new Promise((resolve, reject) => {
    SubCategory.create(body, (err, payload) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(payload);
    });
  });

const update = (id, params) =>
  new Promise((resolve, reject) => {
    SubCategory.findByIdAndUpdate(id, params, { new: true }, (err, payload) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(payload.summary());
    });
  });

const deleteSubCategory = id =>
  new Promise((resolve, reject) => {
    SubCategory.findOneAndRemove(id, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve(null);
    });
  });

module.exports = {
  create,
  update,
  deleteSubCategory
};
