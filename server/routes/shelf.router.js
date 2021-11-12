const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// const client = require('filestack-js').init("A09e78cDRI65bPtSGZMEwz");
// client.picker().open();

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log(req.user);
  
  let queryText = `SELECT * FROM "item"`;

  pool.query(queryText)
    .then(result => {
      res.send(result.rows);
    }).catch(err => {
      console.log('Errrrrror', err);
      res.sendStatus(500);
    });
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('shelf POST');
  console.log('isAuthenticated?', req.isAuthenticated());
  console.log('user', req.user);

  // endpoint functionality
  const sqlText = `
  INSERT INTO "item" ("description", "image_url", "user_id")
  VALUES ($1, $2, $3);
  `;

  const userId = req.user.id
  const values = [req.body.description, req.body.image_url, userId]

  pool
    .query(sqlText, values)
    .then(result => {
      res.sendStatus(201);
    })
    .catch(err => {
      res.sendStatus(500);
    })
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const idToDelete = req.params.id
  const idUser = req.user.id
  console.log('This is what we are deleting -->', idToDelete, idUser);

  //query text needs to combine item id and check user id against the databases user_id
  let queryText = `
  DELETE FROM "item"
  WHERE "id" = $1 AND "user_id" = $2
  `;

  pool.query(queryText, [idToDelete, idUser])
    .then(respond => {
      res.send(200);
    })
    .catch(error => {
      console.log('ERROR IN DELETE', error);
      res.sendStatus(500);
    })
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
