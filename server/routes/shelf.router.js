const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware')

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  
  res.sendStatus(200); // For testing only, can be removed
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
router.delete('/:id', (req, res) => {
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
