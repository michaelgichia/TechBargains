const express = require("express");
const controllers = require("../controllers/merchant.controller");
const errorsHandler = require("../middlewares/errorsHandler");

// Initialize router
const router = express.Router();

router.post("/create", (req, res, next) => {
  req.assert("title", "Title must not be empty.").notEmpty();
  req.assert("description", "Description must not be empty").notEmpty();
  req
    .assert("public_id", "Upload the image again. Public id is missing")
    .notEmpty();

  req.sanitize("title").trim();
  req.sanitize("description").trim();
  req.sanitize("imageUrl").trim();
  req.sanitize("backlink").trim();
  req.sanitize("isFeatured").trim();
  req.sanitize("about").trim();
  req.sanitize("public_id").trim();

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
        errors: errorsHandler(errors)
      });
    });
});

router.put("/update/:merchantId", (req, res, next) => {
  // Sanitize id passed in.
  req.sanitize("id").escape();
  req.sanitize("id").trim();

  // Check other data
  req.assert("title", "Title must not be empty.").notEmpty();
  req.assert("description", "Description must not be empty").notEmpty();
  req
    .assert("public_id", "Upload the image again. Public id is missing")
    .notEmpty();

  req.sanitize("title").trim();
  req.sanitize("description").trim();
  req.sanitize("imageUrl").trim();
  req.sanitize("backlink").trim();
  req.sanitize("isFeatured").trim();
  req.sanitize("about").trim();
  req.sanitize("public_id").trim();

  // Errors
  const errors = req.validationErrors();
  if (errors) {
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

// delete Merchant.
router.delete("/:merchantId", (req, res, next) => {
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

  const id = { _id: req.params.merchantId };

  controllers
    .deleteStore(id)
    .then(() => {
      res.json({
        confirmation: "success",
        message: "Merchant successfully deleted."
      });
    })
    .catch(errors => {
      res.json({
        confirmation: "fail",
        message: "Merchant not found.",
        errors: errorsHandler(errors)
      });
    });
});

module.exports = router;
