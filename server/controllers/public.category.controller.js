const Category = require('../models/category.model');
const SubCategory = require('../models/subcategory.model');
const Promise = require('bluebird');

const find = (params) =>
  new Promise((resolve, reject) => {
    Category.find(params, (err, categories) => {
      if (err) {
        reject(err);
        return;
      }
      const summaries = [];
      categories.forEach((category) => {
        summaries.push(category.summary());
      });
      resolve(summaries);
    });
  });

const findById = (id) =>
  new Promise((resolve, reject) => {
    Category.findById(id, (err, category) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(category.summary());
    });
  });

const findCategoriesAndSubscategories = (params) => {
  const categories = [];
  const summaries = [];
  return new Promise((resolve, reject) => {
    Category.find(params, (err, results) => {
      if (err) {
        reject(err);
        return;
      }
      results.map((val) => categories.push(val));

      categories.map((val, index) => {
        summaries.push(new Object());
        summaries[index].name = val.name;
        summaries[index].id = val._id.toString();
        summaries[index].categoryArray = [];
      });

      summaries.map((sub) => {
        SubCategory.find({ category: sub.id }, (err, resultss) => {
          if (err) {
            reject(err);
          }
          resultss.map((result) => {
            sub.categoryArray.push(result.title);
          });
          resolve(summaries);
        });
      });
    });
  });
};

module.exports = {
  find,
  findById,
  findCategoriesAndSubscategories,
};
