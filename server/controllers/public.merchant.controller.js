const Merchant = require("../models/merchant.model");

const Promise = require("bluebird");

const find = params =>
  new Promise((resolve, reject) => {
    Merchant.find()
    .sort("-createdAt")
    .limit(50)
    .exec(params, (err, stores) => {
      if (err) {
        reject(err);
        return;
      }
      const summaries = [];
      stores.forEach(store => {
        summaries.push(store.summary());
      });
      resolve(summaries);
    });
  });

const findById = id =>
  new Promise((resolve, reject) => {
    Merchant.findById(id, (err, store) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(store.summary());
    });
  });

const findFeaturedStores = params =>
  new Promise((resolve, reject) => {
    Merchant.find({ isFeatured: true })
      .sort("-createdAt")
      .limit(8)
      .select("title imageUrl")
      .exec((err, stores) => {
        if (err) {
          reject(err);
          return;
        }
        const summaries = [];
        stores.forEach(store => {
          summaries.push(store.summary());
        });
        resolve(summaries);
      });
  });

const findLatestStores = params =>
  new Promise((resolve, reject) => {
    Merchant.find()
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

const findCategoryFeaturedStores = subCategoryId =>
  new Promise((resolve, reject) => {
    Merchant.find({ subCategory:  subCategoryId })
      .sort("-createdAt")
      .limit(12)
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
  findLatestStores,
  findFeaturedStores,
  findCategoryFeaturedStores
};
