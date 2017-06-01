const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.get('/:resource', (req, res) => {
  const resource = req.params.resource;
  const controller = controllers[resource];

  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource',
    });
    return;
  }

  controller.find(req.query, false)
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

router.get('/:resource/:id', (req, res) => {
  const resource = req.params.resource;
  const controller = controllers[resource];

  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource',
    });
    return;
  }

  const id = req.params.id;
  controller.findById(id)
  .then((result) => {
    res.json({
      confirmation: 'success',
      result,
    });
  })
  .catch((err) => {
    res.json({
      confirmation: 'fail',
      message: 'Resource not found!' || err,
    }).end();
  });
});

module.exports = router;
