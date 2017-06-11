const Item = require('../models/item.model');

const Promise = require('bluebird');

const create = (body) =>
  new Promise((resolve, reject) => {

    Item.create(body, (err, item) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(item.summary());
    });
  });

const update = (id, params) =>
  new Promise((resolve, reject) => {

    const itemId = { _id: id };

    Item.findByIdAndUpdate(itemId, params, { upsert: false, new: true }, (err, item) => {
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
