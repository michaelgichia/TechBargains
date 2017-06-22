const express = require("express");
const controllers = require("../controllers/banner.controller");
const errorsHandler = require("../middlewares/errorsHandler");

// Initialize router
const router = express.Router();

router.post("/create", (req, res) => {
  req.assert("title", "Title must not be empty.").notEmpty();
  req.assert("imageUrl", "Image url must not be empty.").notEmpty();
  req.assert("isFeatured", "isFeatured must not be empty.").notEmpty();
  req
    .assert("public_id", "Upload the image again. Public id is missing")
    .notEmpty();

  req.sanitize("title").trim();
  req.sanitize("imageUrl").trim();
  req.sanitize("backlink").trim();
  req.sanitize("isFeatured").trim();
  req.sanitize("public_id").trim();

  // Errors
  const errors = req.validationErrors();
  if (errors.length > 0) {
    res.json({
      confirmation: "fail",
      message: "Form errors!",
      errors: errorsHandler(errors)
    })
    return;
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
        message: "Banner not saved!",
        errors: errorsHandler(errors)
      });
    });
});

// delete Category.
router.delete("/delete/:bannerId", (req, res) => {
  // Sanitize id passed in.
  req.sanitize("id").escape();
  req.sanitize("id").trim();

  // Errors
  const errors = req.validationErrors();
  if (errors.length > 0) {
    res.json({
      confirmation: "fail",
      message: "Form errors!",
      errors: errorsHandler(errors)
    })
    return;
  }

  const id = { _id: req.params.bannerId };

  controllers
    .deleteBanner(id)
    .then(() => {
      res.json({
        confirmation: "success",
        message: "Banner successfully deleted."
      });
    })
    .catch(errors => {
      res.json({
        confirmation: "fail",
        message: "Banner not found.",
        errors: errorsHandler(errors)
      });
    });
});

router.put("/update/:bannerId", (req, res) => {
  // Sanitize id passed in.
  req.sanitize("id").escape();
  req.sanitize("id").trim();

  req.assert("title", "Title must not be empty.").notEmpty();
  req.assert("imageUrl", "Image url must not be empty.").notEmpty();
  req.assert("isFeatured", "isFeatured must not be empty.").notEmpty();
  req
    .assert("public_id", "Upload the image again. Public id is missing")
    .notEmpty();

  req.sanitize("title").trim();
  req.sanitize("imageUrl").trim();
  req.sanitize("backlink").trim();
  req.sanitize("isFeatured").trim();
  req.sanitize("public_id").trim();
  // Errors
  const errors = req.validationErrors();
  if (errors.length > 0) {
    res.json({
      confirmation: "fail",
      errors: errorsHandler(errors)
    })
    return;
  }

  const { bannerId }= req.params;

  controllers
    .update(bannerId, req.body)
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

module.exports = router;
