const Category = require('../models/category.model');

const Promise = require('bluebird');

const create = (body) =>
  new Promise((resolve, reject) => {
    Category.create(body, (err, category) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(category);
    });
  });

const update = (id, params) =>
  new Promise((resolve, reject) => {
    Category.findByIdAndUpdate(id, params, { new: true }, (err, category) => {
      if (err) {
        reject(err, null);
        return;
      }
      resolve(null, category);
    });
  });

const deleteCategory = (id) =>
  new Promise((resolve, reject) => {
    Category.findOneAndRemove(id, (err) => {
      if (err) {
        reject(err, null);
        return;
      }
      resolve(null, null);
    });
  });

module.exports = {
  create,
  update,
  deleteCategory,
};
