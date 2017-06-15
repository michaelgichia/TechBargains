const express = require('express');
const controllers = require('../controllers/subcategory.controller');

// Initialize router
const router = express.Router();

router.post('/create', (req, res, next) => {
  req.assert('title', 'Title must not be empty.').notEmpty();
  req.assert('category', 'Category must not be empty').notEmpty();
  req.sanitize('title').trim();
  req.sanitize('category').trim();
  req.sanitize('description').trim();

  // Errors
  const errors = req.validationErrors();
  if (errors.length > 0) {
    res.json({
      confirmation: 'fail',
      message: 'Form errors!',
      errors,
    });
    return;
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

router.put('/:id', (req, res) => {
  // Sanitize id passed in.
  req.sanitize('id').escape();
  req.sanitize('id').trim();

  req.assert('title', 'Title must not be empty.').notEmpty();
  req.assert('category', 'Category must not be empty').notEmpty();
  req.sanitize('title').trim();
  req.sanitize('category').trim();
  req.sanitize('description').trim();

  // Errors
  const errors = req.validationErrors();
  if (errors.length > 0) {
    return res.json({
      confirmation: 'fail',
      errors,
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
  .catch((errors) => {
    res.json({
      confirmation: 'fail',
      errors,
    });
  });
});

// delete SubCategory.
router.delete('/:subcategoryId', (req, res, next) => {
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

  const id = { _id: req.params.subcategoryId };

  controllers.deleteSubCategory(id)
  .then(() => {
    res.json({
      confirmation: 'success',
      message: 'Sub-Category successfully deleted.',
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
