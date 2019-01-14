var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get("/products", function(req, res, next) {
  console.log("asdasddasdasd", req);
  console.log("hi");
  let productsArraySlice;
  if (req.query._page && req.query._limit) {
    productsArraySlice = products.slice(
      req.query._page,
      req.query._page + req.query._limit
    );
  }
  // res.render("index", { title: "Express" });
  const data = JSON.stringify(productsArraySlice);
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.end(data);
});


module.exports = router;
