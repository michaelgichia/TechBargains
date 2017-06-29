const SubCategory = require("../models/subcategory.model");

const Promise = require("bluebird");

const find = params =>
  new Promise((resolve, reject) => {
    SubCategory.find(params, (err, payload) => {
      if (err) {
        reject(err);
        return;
      }
      const summaries = [];
      payload.forEach(category => {
        summaries.push(category.summary());
      });
      resolve(summaries);
    });
  });

const findById = id =>
  new Promise((resolve, reject) => {
    SubCategory.findById(id)
    .exec((err, payload) => {
      if (err) {
        reject(err);
      }
      resolve(payload);
    });
  });

const findLatestCategories = params =>
  new Promise((resolve, reject) => {
    SubCategory.find()
      .sort("-createdAt")
      .limit(10)
      .select("title _id")
      .exec((err, stores) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(stores);
      });
  });

module.exports = {
  find,
  findById,
  findLatestCategories
};
