const express = require('express')
const app = express()
const jwt = require('express-jwt')
const jwtAuthz = require('express-jwt-authz')
const jwksRsa = require('jwks-rsa')
const cors = require('cors')
require('dotenv').config()

if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
	throw 'Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file'
}

app.use(cors())

const checkJwt = jwt({
	secret: jwksRsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
	}),

  // Validate the audience and the issuer.
	audience: process.env.AUTH0_AUDIENCE,
	issuer: `https://${process.env.AUTH0_DOMAIN}/`,
	algorithms: ['RS256']
})

const checkScopesAdmin = jwtAuthz([ 'write:messages' ])

app.post('/', checkJwt, checkScopesAdmin, function(req, res) {
	res.json({ message: 'Hello from an admin endpoint! You need to be authenticated and have a scope of write:messages to see this.' })
})

// 
// app.get('/', checkJwt, checkScopesAdmin, (req,res) => {
// 	db.select()
// 	.from('users')
// 	.orderBy('id')
// 	.then((data) => {
// 		res.send(data)
// 	})
// })

module.exports = app