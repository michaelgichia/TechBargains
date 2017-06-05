const Banner = require('../models/banner.model');
const Promise = require('bluebird');

const create = (body) =>
  new Promise((resolve, reject) => {
    Banner.create(body, (err, banner) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(banner.summary());
    });
  });

const update = (id, params) =>
  new Promise((resolve, reject) => {
    Banner.findByIdAndUpdate(id, params, { new: true }, (err, banner) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(banner.summary());
    });
  });

const deleteBanner = (id) =>
  new Promise((resolve, reject) => {
    Banner.findOneAndRemove(id, (err) => {
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
  deleteBanner,
};
