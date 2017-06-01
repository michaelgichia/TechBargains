const SubCategory = require('../models/subcategory.model');

const Promise = require('bluebird');

const find = (params) =>
  new Promise((resolve, reject) => {
    SubCategory.find(params, (err, payload) => {
      if (err) {
        reject(err);
        return;
      }
      const summaries = [];
      payload.forEach((category) => {
        summaries.push(category.summary());
      });
      resolve(summaries);
    });
  });

const findById = (id) =>
  new Promise((resolve, reject) => {
    SubCategory.findById(id, (err, payload) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(payload.summary());
    });
  });

module.exports = {
  find,
  findById,
};
