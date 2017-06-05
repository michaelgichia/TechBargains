const categoryController = require('./public.category.controller');
const itemController = require('./public.item.controller');
const subCategoryController = require('./public.subcategory.controller');
const merchantController = require('./public.merchant.controller');
const bannerController = require('./public.banner.controller');

module.exports = {
  category: categoryController,
  item: itemController,
  subcategory: subCategoryController,
  merchant: merchantController,
  banner: bannerController,
};
