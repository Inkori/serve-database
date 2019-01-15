var express = require("express");
var router = express.Router();
const createError = require('http-errors')
// var pgp = require("pg-promise");

// const { getConection } = require("../lib/db");
const { products } = require("../db.json");
// const db = getConection();

router.get("/products", function(req, res, next) {
  // let productsArraySlice;
  // if (req.query._page && req.query._limit) {
  //   productsArraySlice = products.slice(
  //     (req.query._page - 1) * req.query._limit,
  //     req.query._limit * req.query._page
  //   );
  // }
  // console.log("asdasdasdas----------d", db);

  // console.log("-----------------------------------", db.any);
  // console.log("PAGEEEEEEEEEEEEEEEE---", req.query);
  // db.any("select * from product")
  //   .then(data => {
  //     const page = req.query._page;
  //     const limit = req.query._limit;
  //     const sliceArr = data.slice((page - 1) * limit, limit * page);
  //     res.join(sliceArr);
  //     // if (req.query._page && req.query._limit) {
  //     //   productsArraySlice = products.slice(
  //     //     (req.query._page - 1) * req.query._limit,
  //     //     req.query._limit * req.query._page
  //     //   );
  //     //   res.json(data);
  //     // }
  //   })
  //   .catch(e => next(e));

  // return db;

  let productsArraySlice;
  if (req.query._page && req.query._limit) {
    productsArraySlice = products.slice(
      (req.query._page - 1) * req.query._limit,
      req.query._limit * req.query._page
    );
  } 
  // else if (req.query.id) {
  //   console.log("QUERY ID", req.query.id);
  //   productsArraySlice = [products[req.query.id - 1]];
  // }
  console.log("productsArraySlice", productsArraySlice);
  res.json(productsArraySlice);
});

router.get("/products/:id", (req, res, next) => {
  console.log(req.params.id);
  console.log();
  const id = req.params.id;
  const productById = products.find(
    item => item.id = id
  );
  console.log("productById", productById);
  res.json(productById);
 });


 router.get("/product/:id", (req, res, next) => {
  manager
    .getBookById(req.param("id"))
    .then(function(data) {
      res.send(data);
    })
    .catch(function(error) {
      next(error);
    });
});

//route

// router.post("/post", (req, res, next) => {
//   const data = { ...req.body };
//   manager
//     .postBook(data)
//     .then(function() {
//       res.send("completed successfully");
//     })
//     .catch(function(error) {
//       next(error);
//     });
// });

// router.post("/update", (req, res, next) => {
//   const body = { ...req.body };
//   const data = [];
//   console.log(body);
  

// });

// router.patch('/products/update', function (req, res, next) {
//   if (req.query.id) {
//     res.json(req.query)
//     manager.Uppdate(req.query).catch(err => next(err))
//   } else {
//     return next(createError(`Record with id=${req.query.id} doesn't change`))
//   }
// })

// router.delete('/products/del', function (req, res, next) {
//   if (req.query.id) {
//     res.json(req.query)
//     manager.Del(req.query.id).catch(err => next(err))
//   } else {
//     return next(createError(`Record with id=${req.query.id} doesn't delete`))
//   }
// })

//manag

// FindOne: id => model.findOne(id),

// InsertNew: query => model.insertNew(query),

// Uppdate: (query) => model.Update(query),

// Del: (id) => model.Del(id)

//module

// const { getConnection } = require('../bd')
// const bd = getConnection()
// const yachtsHeader = [
//   'name',
//   'url',
//   'year',
//   'length',
//   'location',
//   'material',
//   'description',
//   'cost'
// ]

// module.exports = {
//   count: () => {
//     const SQLquery = `SELECT COUNT(id) FROM yachts`
//     return bd.one(SQLquery)
//   },

//   findMany: (start, limit) => {
//     // const SQLquery = `SELECT * FROM yachts WHERE id>$1 AND id<=$2 ORDER BY id`
//     const SQLquery = `SELECT * FROM yachts ORDER BY id OFFSET $1  LIMIT $2`
//     return bd.any(SQLquery, [start, limit])

//   },

//   findOne: id => {
//     const SQLquery = `SELECT * FROM yachts WHERE id=$1`
//     return bd.one(SQLquery, [id])
//   },

//   insertNew: query => {
//     const fields = yachtsHeader.join('","')
//     const values = yachtsHeader.map(fieldName => query[fieldName])
//     const SQLquery = `INSERT INTO yachts ("${fields}") VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`
//     return bd.none(SQLquery, values)
//   },

//   Update: ({ id, ...params }) => {
//     const columnValues = yachtsHeader.reduce((previousValue, fieldName) => {
//       if (params[fieldName]) {
//         if (previousValue === '') {
//           return `${fieldName} = '${params[fieldName]}'`
//         } else {
//           return `${previousValue}, ${fieldName} = ${params[fieldName]}`
//         }
//       } else {
//         return previousValue
//       }
//     }, '')
//     const SQLquery = `UPDATE yachts SET ${columnValues} WHERE id=${id};`
//     return bd.none(SQLquery)
//   },

//   Del: (id) => {
//     const SQLquery = `DELETE FROM yachts WHERE id=${id};`
//     return bd.none(SQLquery)
//   }
// }

module.exports = router;
