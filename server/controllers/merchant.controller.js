const Merchant = require('../models/merchant.model');

const Promise = require('bluebird');

const create = (body) =>
  new Promise((resolve, reject) => {
    Merchant.create(body, (err, store) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(store.summary());
    });
  });

const update = (id, params) =>
  new Promise((resolve, reject) => {
    const merchantId = { _id: params.id };
    Merchant.findByIdAndUpdate(
      merchantId,
      params,
      { upsert: true, new: true },
      (err, store) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(store.summary());
      });
  });

const deleteStore = (id) =>
  new Promise((resolve, reject) => {
    Merchant.findOneAndRemove(id, (err) => {
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
  deleteStore,
};
