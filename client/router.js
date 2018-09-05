const express = require('express')
const bodyParser = require('body-parser')
const apiRoute = require('./routes/api/index.js')

const app = express()
// Original index.js(backend).
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))

app.use('/api', apiRoute)

// build for deploymnt for knexapivid....not sure I need.
// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static('client/build'))

// 	const path = require('path')
// 	app.get('*', function (req, res) {
// 		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
// 	})
// }

// server.js fusion
const jwt = require('express-jwt')
const jwtAuthz = require('express-jwt-authz')
const jwksRsa = require('jwks-rsa')
const cors = require('cors')
require('dotenv').config()

if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
  throw 'Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file'
}

app.use(cors())
// end server.js fusion

// Testing 3001 instead of 8000. 
// Perfect fusion of knexAPIvid + 04-Authentication.
// Consider changing proxy target in package.json now?
const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log('Nathans new server is listening on http://localhost:3001. The react app should be built and served at http://localhost:3000.')
