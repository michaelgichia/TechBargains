const Merchant = require('../models/merchant.model');

const Promise = require('bluebird');

const find = (params) =>
  new Promise((resolve, reject) => {
    Merchant.find(params, (err, stores) => {
      if (err) {
        reject(err);
        return;
      }
      const summaries = [];
      stores.forEach((store) => {
        summaries.push(store.summary());
      });
      resolve(summaries);
    });
  });

const findById = (id) =>
  new Promise((resolve, reject) => {
    Merchant.findById(id, (err, store) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(store.summary());
    });
  });

const findFeaturedStores = (params) =>
  new Promise((resolve, reject) => {
    Merchant.find({ isFeatured: true })
        .limit(8)
        .sort('-date')
        .select('title imageUrl')
        .exec((err, stores) => {
          if (err) {
            reject(err);
            return;
          }
          const summaries = [];
          stores.forEach((store) => {
            summaries.push(store.summary());
          });
          resolve(summaries);
        });
  });

module.exports = {
  find,
  findById,
  findFeaturedStores,
};
