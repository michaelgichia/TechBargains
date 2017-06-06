const express = require('express');
const subController = require('../controllers/public.category.controller');
const banController = require('../controllers/public.banner.controller');
const itemController = require('../controllers/public.item.controller');
const router = express.Router();

router.get('/subcategory', (req, res) => {
  subController.findCategoriesAndSubscategories(req.query, false)
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

module.exports = router;
