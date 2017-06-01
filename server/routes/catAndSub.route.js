const express = require('express');
const controller = require('../controllers/public.category.controller');
const router = express.Router();

router.get('/subcategory', (req, res) => {
  controller.findCategoriesAndSubscategories(req.query, false)
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
