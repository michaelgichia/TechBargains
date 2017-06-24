const express = require("express");
const controllers = require("../controllers/item.controller");
const errorsHandler = require("../middlewares/errorsHandler");

// Initialize router
const router = express.Router();

router.post("/create", (req, res, next) => {
  // Check other data
  req.assert("name", "Name cannot not be empty.").notEmpty();
  req.assert("backlink", "Back-link cannot not be empty").notEmpty();
  req.assert("subCategory", "Sub-Category cannot not be empty").isArray();
  req.assert("category", "Category cannot not be empty").notEmpty();
  req.assert("merchant", "Merchant cannot not be empty").notEmpty();
  req
    .assert("public_id", "Upload the image again. Public id is missing")
    .notEmpty();
  req.assert("tags", "Tags cannot be empty.").isArray();

  req.sanitize("name").trim();
  req.sanitize("backlink").trim();
  req.sanitize("percentage").trim();
  req.sanitize("subCategory").trim();
  req.sanitize("category").trim();
  req.sanitize("merchant").trim();
  req.sanitize("coupon").trim();
  req.sanitize("expire").trim();
  req.sanitize("image").trim();
  req.sanitize("themeColor").trim();
  req.sanitize("isFeatured").trim();
  req.sanitize("isCoupon").trim();
  req.sanitize("isShipped").trim();
  req.sanitize("public_id").trim();
  for (const i in req.body.tags) {
    req.sanitize(i).trim();
  }

  // Errors
  const errors = req.validationErrors();
  if (errors) {
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
        errors: errorsHandler(errors)
      });
    });
});

router.put("/update/:itemId", (req, res, next) => {
  // Sanitize id passed in.
  req.sanitize("id").trim();
  req.sanitize("id").escape();

  // Check other data
  req.assert("name", "Name cannot not be empty.").notEmpty();
  req.assert("backlink", "Back-link cannot not be empty").notEmpty();
  req.assert("subCategory", "Sub-Category cannot not be empty").isArray();
  req.assert("category", "Category cannot not be empty").notEmpty();
  req.assert("merchant", "Merchant cannot not be empty").notEmpty();
  req
    .assert("public_id", "Upload the image again. Public id is missing")
    .notEmpty();
  req.assert("tags", "Tags cannot be empty.").isArray();

  req.sanitize("name").trim();
  req.sanitize("features").trim();
  req.sanitize("backlink").trim();
  req.sanitize("percentage").trim();
  req.sanitize("category").trim();
  req.sanitize("merchant").trim();
  req.sanitize("coupon").trim();
  req.sanitize("expire").trim();
  req.sanitize("image").trim();
  req.sanitize("themeColor").trim();
  req.sanitize("isFeatured").trim();
  req.sanitize("isCoupon").trim();
  req.sanitize("isShipped").trim();
  req.sanitize("public_id").trim();
  for (const i in req.body.subCategory) {
    req.sanitize(i).trim();
  }
  for (const i in req.body.tags) {
    req.sanitize(i).trim();
  }

  // Errors
  const errors = req.validationErrors();
  if (errors) {
    return res
      .json({
        confirmation: "fail",
        message: "Form errors!",
        errors: errorsHandler(errors)
      })
      .end();
  }
  console.log({req: req.body})
  const id = req.params.itemId;
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

// delete Item
router.delete("/:itemId", (req, res, next) => {
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

  const id = { _id: req.params.itemId };

  controllers
    .deleteItem(id)
    .then(() => {
      res.json({
        confirmation: "success",
        message: "Item successfully deleted."
      });
    })
    .catch(errors => {
      res.json({
        confirmation: "fail",
        message: "Item not found.",
        errors: errorsHandler(errors)
      });
    });
});

module.exports = router;
