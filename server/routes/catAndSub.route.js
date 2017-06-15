const express = require('express');
const categoryController = require('../controllers/public.category.controller');
const banController = require('../controllers/public.banner.controller');
const itemController = require('../controllers/public.item.controller');
const merchantController = require('../controllers/public.merchant.controller');

const router = express.Router();

router.get('/subcategory', (req, res) => {
  categoryController.findCategoriesAndSubscategories(req.query, false)
  .then((entities) => {
    res.json({
      confirmation: 'success',
      results: entities,
    });
  })
  .catch((errors) => {
    res.json({
      confirmation: 'fail',
      errors,
    });
  });
});

router.get('/carousels', (req, res) => {
  banController.findCarousel(req.query, false)
  .then((entities) => {
    res.json({
      confirmation: 'success',
      results: entities,
    });
  })
  .catch((errors) => {
    res.json({
      confirmation: 'fail',
      errors,
    });
  });
});

router.get('/featured-coupons', (req, res) => {
  itemController.findFeaturedCoupon(req.query, false)
  .then((entities) => {
    res.json({
      confirmation: 'success',
      results: entities,
    });
  })
  .catch((errors) => {
    res.json({
      confirmation: 'fail',
      errors,
    });
  });
});

router.get('/featured-deals', (req, res) => {
  itemController.findFeaturedDeals(req.query, false)
  .then((entities) => {
    res.json({
      confirmation: 'success',
      results: entities,
    });
  })
  .catch((errors) => {
    res.json({
      confirmation: 'fail',
      errors,
    });
  });
});

router.get('/featured-stores', (req, res) => {
  merchantController.findFeaturedStores(req.query, false)
  .then((entities) => {
    res.json({
      confirmation: 'success',
      results: entities,
    });
  })
  .catch((errors) => {
    res.json({
      confirmation: 'fail',
      errors,
    });
  });
});


router.get('/specific-coupons/:couponsId', (req, res) => {

  const id = req.params.couponsId;

  itemController.findSpecificCoupons(id)
  .then((entities) => {
    res.json({
      confirmation: 'success',
      results: entities,
    });
  })
  .catch((errors) => {
    res.json({
      confirmation: 'fail',
      errors,
    });
  });
});

router.get('/trending-deals', (req, res) => {
  itemController.findTrendingDeals(req.query, false)
  .then((entities) => {
    res.json({
      confirmation: 'success',
      results: entities,
    });
  })
  .catch((errors) => {
    res.json({
      confirmation: 'fail',
      errors,
    });
  });
});

router.get('/specific-stores/:storeId', (req, res) => {

  const id = req.params.storeId;

  itemController.findSpecificDeals(id)
  .then((entities) => {
    res.json({
      confirmation: 'success',
      results: entities,
    });
  })
  .catch((errors) => {
    res.json({
      confirmation: 'fail',
      errors,
    });
  });
});

router.get('/specific-category/:categoryId', (req, res) => {

  const { categoryId } = req.params;

  itemController.findSpecificCategory(categoryId)
  .then((entities) => {
    res.json({
      confirmation: 'success',
      results: entities,
    });
  })
  .catch((errors) => {
    res.json({
      confirmation: 'fail',
      errors,
    });
  });
});

router.get('/category-coupons/:couponsId', (req, res) => {

  const { couponsId }= req.params;

  itemController.findCategoryCoupons(couponsId)
  .then((results) => {
    res.json({
      confirmation: 'success',
      results,
    });
  })
  .catch((errors) => {
    res.json({
      confirmation: 'fail',
      errors,
    });
  });
});


module.exports = router;
