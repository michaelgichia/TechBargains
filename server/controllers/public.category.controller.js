const Category = require("../models/category.model");
const SubCategory = require("../models/subcategory.model");
const Promise = require("bluebird");

const find = params =>
  new Promise((resolve, reject) => {
    Category.find(params, (err, categories) => {
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

const findById = id =>
  new Promise((resolve, reject) => {
    Category.findById(id, (err, category) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(category);
    });
  });

const findCategoriesAndSubscategories = params => {
  const categoriesArray = [];
  return new Promise((resolve, reject) => {
    Category.find(params, (err, categories) => {
      if (err) {
        reject(err);
        return;
      }
      categories.map(category => categoriesArray.push(category.summaryName()));

      categoriesArray.map(category => {
        SubCategory.find({ category: category.ids }, (err, navItems) => {
          if (err) {
            reject(err);
          }
          navItems.map(navItem => {
            category.categoryArray.push(navItem.summary());
          });
          resolve(categoriesArray);
        });
      });
    });
  });
};

module.exports = {
  find,
  findById,
  findCategoriesAndSubscategories
};
