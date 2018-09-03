const express = require('express');
const router = express.Router();
const db = require('../../db');

router.get('/', (req, res) => {
  db.select()
    .from('admins')
    .orderBy('id')
    .then((data) => {
      res.send(data);
    })
})



module.exports = router; 