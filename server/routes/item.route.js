const express = require('express');
const controllers = require('../controllers/item.controller');
// const algoliasearch = require('algoliasearch');
// const client = algoliasearch('YNZ7XXV49B', '6bab08a4370c5d546b65e485a0f802ab');
// const itemIndex = client.initIndex('item');

// Initialize router
const router = express.Router();

router.post('/create', (req, res, next) => {
  // Check other data
  req.assert('name', 'Name cannot not be empty.').notEmpty();
  req.assert('backlink', 'Back-link cannot not be empty').notEmpty();
  req.assert('subCategory', 'Sub-Category cannot not be empty').notEmpty();
  req.assert('category', 'Category cannot not be empty').notEmpty();
  req.assert('merchant', 'Merchant cannot not be empty').notEmpty();
  req.assert('public_id', 'Upload the image again. Public id is missing').notEmpty();

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
  req.sanitize('public_id').trim();


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
  .catch((errors) => {
    res.json({
      confirmation: 'fail',
      errors,
    });
  });
});

router.put('/update/:itemId', (req, res, next) => {
  // Sanitize id passed in.
  req.sanitize('id').trim();
  req.sanitize('id').escape();

  // Check other data
  req.assert('name', 'Name cannot not be empty.').notEmpty();
  req.assert('backlink', 'Back-link cannot not be empty').notEmpty();
  req.assert('subCategory', 'Sub-Category cannot not be empty').notEmpty();
  req.assert('category', 'Category cannot not be empty').notEmpty();
  req.assert('merchant', 'Merchant cannot not be empty').notEmpty();
  req.assert('public_id', 'Upload the image again. Public id is missing').notEmpty();

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
  req.sanitize('public_id').trim();

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
    // itemIndex.addObject(result, function(err, content) {
    //   if(err) {    
    //     console.log(err);
    //   }
    // });
    res.json({
      confirmation: 'success',
      result,
    });
  })
  .catch((errors) => {
    res.json({
      confirmation: 'fail',
      errors,
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
      errors,
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
  .catch((errors) => {
    res.json({
      confirmation: 'fail',
      message: 'Item not found.',
      errors,
    });
  });
});


module.exports = router;
