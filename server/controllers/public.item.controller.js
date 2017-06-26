const Item = require("../models/item.model");

const Promise = require("bluebird");

const find = params =>
  new Promise((resolve, reject) => {
    Item.find(params).sort("-date").exec((err, items) => {
      if (err) {
        reject(err);
        return;
      }
      const summaries = [];
      items.forEach(item => {
        summaries.push(item.summary());
      });
      resolve(summaries);
    });
  });

const findById = id =>
  new Promise((resolve, reject) => {
    Item.findById(id).exec((err, item) => {
      if (err) {
        reject(err);
        return;
      }
      if (item !== null) {
        resolve(item.summary());
      }
    });
  });

const findFeaturedCoupon = params =>
  new Promise((resolve, reject) => {
    Item.find({ isCoupon: true, isFeatured: true })
      .limit(8)
      .sort("-date")
      .select("name percentage image isShipped backlink coupon")
      .exec((err, coupons) => {
        if (err) {
          reject(err);
          return;
        }
        const summaries = [];
        coupons.forEach(coupon => {
          summaries.push(coupon.summary());
        });
        resolve(summaries);
      });
  });

const findFeaturedDeals = params =>
  new Promise((resolve, reject) => {
    Item.find({ isFeatured: true, isCoupon: false })
      .limit(8)
      .sort("-date")
      .select("_id name percentage image isShipped backlink coupon public_id")
      .exec((err, deals) => {
        if (err) {
          reject(err);
          return;
        }
        const summaries = [];
        deals.forEach(deal => {
          summaries.push(deal.summary());
        });
        resolve(summaries);
      });
  });

const findSpecificDeals = id =>
  new Promise((resolve, reject) => {
    Item.find({ merchant: id }).limit(8).sort("-date").exec((err, deals) => {
      if (err) {
        reject(err);
        return;
      }
      const summaries = [];
      deals.forEach(deal => {
        summaries.push(deal.summary());
      });
      resolve(summaries);
    });
  });

const findSpecificCoupons = id =>
  new Promise((resolve, reject) => {
    Item.find({ merchant: id, isCoupon: true })
      .limit(8)
      .sort("-date")
      .select("name isShipped merchant isCoupon backlink coupon")
      .exec((err, deals) => {
        if (err) {
          reject(err);
          return;
        }
        const summaries = [];
        deals.forEach(deal => {
          summaries.push(deal.summary());
        });
        resolve(summaries);
      });
  });

const findTrendingDeals = params =>
  new Promise((resolve, reject) => {
    Item.find({ isFeatured: true })
      .limit(50)
      .sort("-date")
      .exec((err, items) => {
        if (err) {
          reject(err);
          return;
        }
        const summaries = [];
        items.forEach(item => {
          summaries.push(item.summary());
        });
        resolve(summaries);
      });
  });

const findSpecificCategory = id =>
  new Promise((resolve, reject) => {
    Item.find({ subCategory: id, isCoupon: false })
      .limit(20)
      .sort("-date")
      .exec((err, categories) => {
        if (err) {
          reject(err);
          return;
        }
        const summaries = [];
        categories.forEach(category => {
          summaries.push(category.summary());
        });
        resolve(summaries);
      });
  });

const findCategoryCoupons = id =>
  new Promise((resolve, reject) => {
    Item.find({ subCategory: id, isCoupon: true })
      .limit(8)
      .sort("-date")
      .select("name isShipped merchant isCoupon backlink coupon")
      .exec((err, deals) => {
        if (err) {
          reject(err);
          return;
        }
        const summaries = [];
        deals.forEach(deal => {
          summaries.push(deal.summary());
        });
        resolve(summaries);
      });
  });

const findRelatedProduct = id =>
  new Promise((resolve, reject) => {
    Item.find({ _id: id }).limit(8).sort("-date").exec((err, deals) => {
      if (err) {
        reject(err);
        return;
      }
      const subCategoryId = deals[0].subCategory;
      Item.find({ subCategory: { $in: subCategoryId } })
        .limit(20)
        .sort("-date")
        .exec((err, related) => {
          if (err) {
            reject(err);
            return;
          }
          deals.push({ relatedProducts: related });
          resolve(deals);
        });
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
  findSpecificCategory,
  findCategoryCoupons,
  findRelatedProduct
};
