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
      if (item !== null) {
        resolve(item.summary());
      }
    });
  });

const findFeaturedCoupon = (params) =>
  new Promise((resolve, reject) => {
    Item.find({  isCoupon: true, isFeatured: true })
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

module.exports = {
  find,
  findById,
  findFeaturedCoupon,
  findFeaturedDeals
};
