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
  .catch((err) => {
    res.json({
      confirmation: 'fail',
      message: err,
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
  .catch((err) => {
    res.json({
      confirmation: 'fail',
      message: err,
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
  .catch((err) => {
    res.json({
      confirmation: 'fail',
      message: err,
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
  .catch((err) => {
    res.json({
      confirmation: 'fail',
      message: err,
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
  .catch((err) => {
    res.json({
      confirmation: 'fail',
      message: err,
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
  .catch((err) => {
    res.json({
      confirmation: 'fail',
      message: err,
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
  .catch((err) => {
    res.json({
      confirmation: 'fail',
      message: err,
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
  .catch((err) => {
    res.json({
      confirmation: 'fail',
      message: err,
    });
  });
});

module.exports = router;
