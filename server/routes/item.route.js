const express = require('express');
const controllers = require('../controllers/item.controller');

// Initialize router
const router = express.Router();

router.post('/create', (req, res, next) => {
  // Check other data
  req.assert('name', 'Name must not be empty.').notEmpty();
  req.assert('backlink', 'Back-link must not be empty').notEmpty();
  req.assert('subCategory', 'Sub-Category must not be empty').notEmpty();
  req.assert('category', 'Category must not be empty').notEmpty();
  req.assert('merchant', 'Merchant must not be empty').notEmpty();
  req.assert('expire', 'expire must not be empty').notEmpty();

  req.sanitize('name').trim();
  req.sanitize('backlink').trim();
  req.sanitize('percentage').trim();
  req.sanitize('subCategory').trim();
  req.sanitize('category').trim();
  req.sanitize('merchant').trim();
  req.sanitize('coupon').trim();
  req.sanitize('expire').trim();
  req.sanitize('image').trim();
  req.sanitize('themeColor').trim();
  req.sanitize('isFeatured').trim();
  req.sanitize('isCoupon').trim();
  req.sanitize('isShipped').trim();

  // Errors
  const errors = req.validationErrors();
  if (errors) {
    return res.json({
      confirmation: 'fail',
      message: 'Form errors!',
      errors,
    }).end();
  }
  controllers.create(req.body)
  .then((result) => {
    res.json({
      confirmation: 'success',
      result,
    });
  })
  .catch((err) => {
    res.json({
      confirmation: 'fail',
      message: err,
    });
  });
});

router.put('/update/:itemId', (req, res, next) => {
  // Sanitize id passed in.
  req.sanitize('id').trim();
  req.sanitize('id').escape();

  // Check other data
  req.assert('name', 'Name must not be empty.').notEmpty();
  req.assert('backlink', 'Back-link must not be empty').notEmpty();
  req.assert('subCategory', 'Sub-Category must not be empty').notEmpty();
  req.assert('category', 'Category must not be empty').notEmpty();
  req.assert('merchant', 'Merchant must not be empty').notEmpty();
  req.assert('expire', 'expire must not be empty').notEmpty();

  req.sanitize('name').trim();
  req.sanitize('features').trim();
  req.sanitize('backlink').trim();
  req.sanitize('percentage').trim();
  req.sanitize('subCategory').trim();
  req.sanitize('category').trim();
  req.sanitize('merchant').trim();
  req.sanitize('coupon').trim();
  req.sanitize('expire').trim();
  req.sanitize('image').trim();
  req.sanitize('themeColor').trim();
  req.sanitize('isFeatured').trim();
  req.sanitize('isCoupon').trim();
  req.sanitize('isShipped').trim();

  // Errors
  const errors = req.validationErrors();
  if (errors) {
    return res.json({
      confirmation: 'fail',
      message: 'Form errors!',
      errors,
    }).end();
  }

  const id = req.params.itemId;
  controllers.update(id, req.body)
  .then((result) => {
    res.json({
      confirmation: 'success',
      result,
    });
  })
  .catch((err) => {
    res.json({
      confirmation: 'fail',
      message: err,
    });
  });
});

router.post('/update/:itemId', (req, res, next) => {
  // Sanitize id passed in.
  req.sanitize('id').escape();
  req.sanitize('id').trim();

  // Errors
  const errors = req.validationErrors();
  if (errors.length > 0) {
    return res.json({
      confirmation: 'fail',
      message: errors,
    }).end();
  }

  const id = req.params.id;

  controllers.update(id, req.body)
  .then((result) => {
    res.json({
      confirmation: 'success',
      result,
    });
  })
  .catch((err) => {
    res.json({
      confirmation: 'fail',
      message: err,
    });
  });
});


// delete Item
router.delete('/:itemId', (req, res, next) => {
  // Sanitize id passed in.
  req.sanitize('id').escape();
  req.sanitize('id').trim();

  // Errors
  const errors = req.validationErrors();
  if (errors.length > 0) {
    return res.json({
      confirmation: 'fail',
      message: errors,
    }).end();
  }

  const id = { _id: req.params.itemId };

  controllers.deleteItem(id)
  .then(() => {
    res.json({
      confirmation: 'success',
      message: 'Item successfully deleted.',
    });
  })
  .catch((err) => {
    res.json({
      confirmation: 'fail',
      message: 'Item not found.',
      errors: err,
    });
  });
});


module.exports = router;
