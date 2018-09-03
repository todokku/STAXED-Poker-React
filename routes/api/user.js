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

// IDEMOPOTENCE: is gonna be the say no matter how many times you call on something. 
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

// PUT should replace everything with whats in body + replacing the rest with null.
router.put('/:id', function(req,res) {
	db('users')
		.where({ id: req.params.id })
		.update({
			email: req.body.email || null,
			hashed_pw: req.body.hashed_pw || null,
			name: req.body.name || null,
			phone: req.body.phone || null,
			balanceHours: req.body.balanceHours || null,
			qualifierHours: req.body.qualifierHours || null,
			access: req.body.access || null 
		})
		.returning('*')
		.then(function(data) {
		res.send(data)
	})
})

router.delete('/:id', function(req,res) {
	db('users')
		.where({ id: req.params.id })
		.first()
		.del()
		.then(result => {
			res.json({ success: true })
			// if(result.access == 'admin') {
			// 	knex('users')
			// 		.where({ id: req.params.id })
			// 		.del()
			// 		.then(postDelete => {
			// 			res.status(200).json("User Succesfully Deleted");
			// 		});
			// } else {
			// 	res.status(400).json("You Need Admin Privileges to Delete a User");
			// }
		});
});



module.exports = router

