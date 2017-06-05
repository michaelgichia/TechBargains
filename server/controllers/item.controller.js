const Item = require('../models/item.model');

const Promise = require('bluebird');

const create = (body) =>
  new Promise((resolve, reject) => {
    // Convert string to array.
    const featuresArray = body.features.split('.').filter((feature) => feature.trim().length !== 0);
    body.features = featuresArray;
    Item.create(body, (err, item) => {
      if (err) {
        reject(err);
      }
      resolve(item.summary());
    });
  });

const update = (id, params) =>
  new Promise((resolve, reject) => {
    // Convert string to array.
    const paramsCopy = Object.assign({}, params); 
    const featuresArray = paramsCopy.features.split('.').filter((feature) => feature.trim().length !== 0);
    paramsCopy.features = featuresArray;

    const itemId = { _id: id };

    Item.findByIdAndUpdate(itemId, paramsCopy, { upsert: false, new: true }, (err, item) => {
      if (err) {
        reject(err);
      }
      resolve(item.summary());
    });
  });

const deleteItem = (id) =>
  new Promise((resolve, reject) => {
    Item.findOneAndRemove(id, (err) => {
      if (err) {
        reject(err);
      }
      resolve(null);
    });
  });

module.exports = {
  create,
  update,
  deleteItem,
};
