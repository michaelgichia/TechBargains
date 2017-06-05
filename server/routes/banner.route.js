const express = require('express');
const controllers = require('../controllers/banner.controller');

// Initialize router
const router = express.Router();

router.post('/create', (req, res) => {
  req.assert('title', 'Title must not be empty.').notEmpty();
  req.assert('imageUrl', 'Image url must not be empty.').notEmpty();
  req.assert('isFeatured', 'isFeatured must not be empty.').notEmpty();
  req.sanitize('title').trim();
  req.sanitize('imageUrl').trim();
  req.sanitize('backlink').trim();
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
      message: 'Banner not saved!',
      error: err,
    });
  });
});

// delete Category.
router.delete('/:bannerId', (req, res) => {
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

  controllers.deleteBanner(id)
  .then(() => {
    res.json({
      confirmation: 'success',
      message: 'Banner successfully deleted.',
    });
  })
  .catch((err) => {
    res.json({
      confirmation: 'fail',
      message: 'Banner not found.',
      errors: err,
    });
  });
});

router.post('/update/:bannerId', (req, res) => {
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


module.exports = router;
