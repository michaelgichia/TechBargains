const express = require('express');
const controllers = require('../controllers/category.controller');

// Initialize router
const router = express.Router();

router.post('/create', (req, res, next) => {
  req.assert('name', 'Name must not be empty.').notEmpty();
  req.assert('isFeatured', 'isFeatured must not be empty.').notEmpty();
  req.sanitize('name').trim();
  req.sanitize('isFeatured').trim();

  // Errors
  const errors = req.validationErrors();
  if (errors.length > 0) {
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
      message: 'Category not saved!',
      error: err,
    });
  });
});

// delete Category.
router.delete('/:categoryId', (req, res, next) => {
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

  const id = { _id: req.params.categoryId };

  controllers.deleteCategory(id)
  .then(() => {
    res.json({
      confirmation: 'success',
      message: 'Category successfully deleted.',
    });
  })
  .catch((err) => {
    res.json({
      confirmation: 'fail',
      message: 'Category not found.',
      errors: err,
    });
  });
});


module.exports = router;
