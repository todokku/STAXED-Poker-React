const express = require('express')
const router = express.Router()
const db = require('../../db')


router.get('/', function(req, res) {
	db.select()
	.from('users')
	.orderBy('id')
	.then(function(data) {
		res.send(data)
	})
})

// body-parser lets server understand what your POSTed data.
// INSERT INTO 'tableName"(col1, col2) VALUES (col1_value, col2_value);
// SELECT * FROM TABLE WHERE ID = inserted_row;
router.post('/', (req, res) => {
	db.insert(req.body)
	.returning('*')
	.into('users')
	.then((data) => {
		res.send(data)
	})
})

router.get('/:id', (req, res) =>
	db('users')
		.where({id: req.params.id })
		.first()
		.then(function(data) {
			res.send(data)
		})
)

// IDEMOPOTENCE: is gonna be the say no matter how many times you call on something. (GET, POST)

// PATCH only modifies the one we submit in the body.
router.patch('/:id', function(req, res) {
	db('users')
		.where({ id: req.params.id })
		.update(req.body)
		.returning('*')
		.then(function(data) {
			res.send(data)
		})
})

// // PUT should replace everything with whats in body + replacing the rest with null.
router.put('/:id', function(req,res) {
	db('users')
		.where({ id: req.params.id })
		.update({
			title: req.body.title || null,
			is_done: req.body.is_done || null
		})
		.returning('*')
		.then(function(data) {
		res.send(data)
	})
})

// // Delete pretty easy.
// router.delete(':/id', function(req,res) {
// 	db('todo')
// 		.where({id: req.params.id}).del().then(function() {
// 			res.json({ success: true })
// 		})
// })



module.exports = router

