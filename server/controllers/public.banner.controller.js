const Banner = require('../models/banner.model');
const Promise = require('bluebird');

const find = (params) =>
  new Promise((resolve, reject) => {
    Banner.find(params, (err, banners) => {
      if (err) {
        reject(err);
        return;
      }
      const summaries = [];
      banners.forEach((banner) => {
        summaries.push(banner.summary());
      });
      resolve(summaries);
    });
  });

const findById = (id) =>
  new Promise((resolve, reject) => {
    Banner.findById(id, (err, banner) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(banner.summary());
    });
  });

const findCarousel = (params) =>
  new Promise((resolve, reject) => {
    Banner.find({isFeatured: true}).sort('-date').limit(5).exec((err, banners) => {
      if (err) {
        reject(err);
        return;
      }
      const summaries = [];
      banners.forEach((banner) => {
        summaries.push(banner.summary());
      });
      resolve(summaries);
    });
  });

module.exports = {
  find,
  findById,
  findCarousel
};