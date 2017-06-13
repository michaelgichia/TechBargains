const Item = require('../models/item.model');

const Promise = require('bluebird');

const find = (params) =>
  new Promise((resolve, reject) => {
    Item.find(params)
    .sort('-date')
    .populate('subCategory', '-_id title')
    .populate('category', '-_id name')
    .populate('merchant', '-_id title')
    .exec((err, items) => {
      if (err) {
        reject(err);
        return;
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
        return;
      }
      if (item !== null) {
        resolve(item.summary());
      }
    });
  });

const findFeaturedCoupon = (params) =>
  new Promise((resolve, reject) => {
    Item.find({ isCoupon: true, isFeatured: true })
        .limit(8)
        .sort('-date')
        .select('name percentage image isShipped backlink coupon')
        .exec((err, coupons) => {
          if (err) {
            reject(err);
            return;
          }
          const summaries = [];
          coupons.forEach((coupon) => {
            summaries.push(coupon.summary());
          });
          resolve(summaries);
        });
  });

const findFeaturedDeals = (params) =>
  new Promise((resolve, reject) => {
    Item.find({ isFeatured: true, isCoupon: false })
        .limit(8)
        .sort('-date')
        .select('name percentage image isShipped backlink coupon')
        .exec((err, deals) => {
          if (err) {
            reject(err);
            return;
          }
          const summaries = [];
          deals.forEach((deal) => {
            summaries.push(deal.summary());
          });
          resolve(summaries);
        });
  });

const findSpecificDeals = (id) =>
  new Promise((resolve, reject) => {
    Item.find({ merchant: id })
        .limit(8)
        .populate('subCategory', '-_id title')
        .populate('category', '-_id name')
        .populate('merchant', '-_id title')
        .sort('-date')
        .exec((err, deals) => {
          if (err) {
            reject(err);
            return;
          }
          const summaries = [];
          deals.forEach((deal) => {
            summaries.push(deal.summary());
          });
          resolve(summaries);
        });
  });

const findSpecificCoupons = (id) =>
  new Promise((resolve, reject) => {
    Item.find({ merchant: id, isCoupon: true })
        .limit(8)
        .sort('-date')
        .select('name isShipped merchant isCoupon backlink coupon')
        .populate('category', '-_id name')
        .populate('merchant', '-_id title')
        .exec((err, deals) => {
          if (err) {
            reject(err);
            return;
          }
          const summaries = [];
          deals.forEach((deal) => {
            summaries.push(deal.summary());
          });
          resolve(summaries);
        });
  });

const findTrendingDeals = (params) =>
  new Promise((resolve, reject) => {
    Item.find({ isFeatured: true, isCoupon: false })
    .limit(50)
    .sort('-date')
    .populate('subCategory', '-_id title')
    .populate('category', '-_id name')
    .populate('merchant', '-_id title')
    .exec((err, items) => {
      if (err) {
        reject(err);
        return;
      }
      const summaries = [];
      items.forEach((item) => {
        summaries.push(item.summary());
      });
      resolve(summaries);
    });
  });

module.exports = {
  find,
  findById,
  findFeaturedCoupon,
  findFeaturedDeals,
  findSpecificDeals,
  findSpecificCoupons,
  findTrendingDeals,
};
