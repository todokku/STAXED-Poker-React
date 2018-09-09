exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', table => {
		table.increments('id');
		table.string('email');
    table.string('hashed_pw');
		table.string('phone');
    table.integer('balanceHours');
		table.integer('qualifierHours');
		table.string('access');
		table.boolean('checkedIn');
    table.string('name');
		table.string('username');
		table.string('nickname');
		table.string('picture');
		table.string('user_id');
		table.string('password');
		table.boolean('email_verified');
		table.string('given_name');
		table.string('family_name');
		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('users');
};

/*
curl --request PATCH \
  --url 'https://YOUR_AUTH0_DOMAIN/api/v2/users/USER_ID' \
  --header 'authorization: Bearer ABCD' \
  --header 'content-type: application/json' \
	--data '{"user_metadata": {"picture": "https://example.com/some-image.png"}}'
	
	*/

	/*

	/*
	Changing User Picture in user.user_metadata.picture

	Step 1) Pick between curl or Node

	curl --request PATCH \
  --url 'https://YOUR_AUTH0_DOMAIN/api/v2/users/USER_ID' \
  --header 'authorization: Bearer ABCD' \
  --header 'content-type: application/json' \
	--data '{"user_metadata": {"picture": "https://example.com/some-image.png"}}'
	
	var request = require("request");

	OR
	// Using Node.JS

	var options = { method: 'PATCH',
		url: 'https://YOUR_AUTH0_DOMAIN/api/v2/users/USER_ID',
		headers: 
		{ 'content-type': 'application/json',
			authorization: 'Bearer ABCD' },
		body: 
		{ user_metadata: { picture: 'https://example.com/some-image.png' } },
		json: true };

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});

	Step 2) Make a rule. Checks 
	function(user, context, callback) {
		if(user.user_metadata.picture)
			user.picture = user.user_metadata.picture;

		// Insert my cb here to do something if it does exist.
		callback(null, user, content)
	}

	OPTIONAL: Change default picture for all users. 
	
	function (user, context, callback) {
  if (user.picture.indexOf('cdn.auth0.com') > -1) {
    const url = require('url');
    const u = url.parse(user.picture, true);
    u.query.d = 'URL_TO_YOUR_DEFAULT_PICTURE_HERE';
    delete u.search;
    user.picture = url.format(u);
  }
  callback(null, user, context);
}

	*/

