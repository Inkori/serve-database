var express = require("express");
var router = express.Router();
var pgp = require("pg-promise");

const { getConection } = require("../lib/db");
// const { products } = require("../db.json");
const db = getConection();

router.get("/products", function(req, res, next) {
  // let productsArraySlice;
  // if (req.query._page && req.query._limit) {
  //   productsArraySlice = products.slice(
  //     (req.query._page - 1) * req.query._limit,
  //     req.query._limit * req.query._page
  //   );
  // }
  // console.log("asdasdasdas----------d", db);

  console.log("-----------------------------------", db.any);
  console.log("PAGEEEEEEEEEEEEEEEE---", req.query);
  db.any("select * from product")
    .then(data => {
      const page = req.query._page;
      const limit = req.query._limit;
      const sliceArr = data.slice((page - 1) * limit, limit * page);
      res.join(sliceArr);
      // if (req.query._page && req.query._limit) {
      //   productsArraySlice = products.slice(
      //     (req.query._page - 1) * req.query._limit,
      //     req.query._limit * req.query._page
      //   );
      //   res.json(data);
      // }
    })
    .catch(e => next(e));

  return db;

  // let productsArraySlice;
  // if (req.query._page && req.query._limit) {
  //   productsArraySlice = products.slice(
  //     (req.query._page - 1) * req.query._limit,
  //     req.query._limit * req.query._page
  //   );
  // }
  //  else if (req.query.id) {
  //   console.log("QUERY ID", params.id);
  //   productsArraySlice = [products[req.params.id - 1]];
  // }
  res.json(productsArraySlice);
});

router.get("/products/:id", (req, res, next) => {
  console.log(req.params.id);
  const productById = product.find(
    item => (item.req.params.id = req.params.id)
  );
  res.json(productById);
});

module.exports = router;
