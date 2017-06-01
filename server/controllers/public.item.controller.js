const Item = require('../models/item.model');

const Promise = require('bluebird');

const find = (params) =>
  new Promise((resolve, reject) => {
    Item.find(params)
    .populate('category', 'name')
    .populate('subCategory', 'title')
    .exec((err, items) => {
      if (err) {
        reject(err);
      }
      const summaries = [];
      items.forEach((item) => {
        summaries.push(item.summary());
      });
      resolve(summaries);
    });
  });

const findById = (id) =>
  new Promise((resolve, reject) => {
    Item.findById(id)
    .populate('subCategory', '-_id title')
    .populate('category', '-_id name')
    .populate('merchant', '-_id title')
    .exec((err, item) => {
      if (err) {
        reject(err);
      }
      resolve(item.summary());
    });
  });

module.exports = {
  find,
  findById,
};
