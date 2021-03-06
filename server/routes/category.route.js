const express = require("express");
const controllers = require("../controllers/category.controller");
const errorsHandler = require("../middlewares/errorsHandler");

// Initialize router
const router = express.Router();

router.post("/create", (req, res, next) => {
  req.assert("name", "Name must not be empty.").notEmpty();
  req.assert("isFeatured", "isFeatured must not be empty.").notEmpty();
  req.sanitize("name").trim();
  req.sanitize("isFeatured").trim();
  req.sanitize("description").trim();

  // Errors
  const errors = req.validationErrors();
  if (errors.length > 0) {
    return res
      .json({
        confirmation: "fail",
        message: "Form errors!",
        errors: errorsHandler(errors)
      })
      .end();
  }

  controllers
    .create(req.body)
    .then(result => {
      res.json({
        confirmation: "success",
        result
      });
    })
    .catch(errors => {
      res.json({
        confirmation: "fail",
        message: "Category not saved!",
        errors: errorsHandler(errors)
      });
    });
});

router.put("/:id", (req, res) => {
  // Sanitize id passed in.
  req.sanitize("id").escape();
  req.sanitize("id").trim();

  req.assert("name", "Name must not be empty.").notEmpty();
  req.assert("isFeatured", "isFeatured must not be empty.").notEmpty();
  req.sanitize("name").trim();
  req.sanitize("isFeatured").trim();
  req.sanitize("description").trim();

  // Errors
  const errors = req.validationErrors();
  if (errors.length > 0) {
    return res
      .json({
        confirmation: "fail",
        errors: errorsHandler(errors)
      })
      .end();
  }

  const id = req.params.id;

  controllers
    .update(id, req.body)
    .then(result => {
      res.json({
        confirmation: "success",
        result
      });
    })
    .catch(errors => {
      res.json({
        confirmation: "fail",
        errors: errorsHandler(errors)
      });
    });
});

// delete Category.
router.delete("/:id", (req, res, next) => {
  // Sanitize id passed in.
  req.sanitize("id").escape();
  req.sanitize("id").trim();

  // Errors
  const errors = req.validationErrors();
  if (errors.length > 0) {
    return res
      .json({
        confirmation: "fail",
        errors: errorsHandler(errors)
      })
      .end();
  }

  const id = { _id: req.params.id };

  controllers
    .deleteCategory(id)
    .then(() => {
      res.json({
        confirmation: "success",
        message: "Category successfully deleted."
      });
    })
    .catch(errors => {
      res.json({
        confirmation: "fail",
        message: "Category not found.",
        errors: errorsHandler(errors)
      });
    });
});

module.exports = router;
