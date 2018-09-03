exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', table => {
		table.increments('id');
		table.string('email');
    table.string('hashed_pw');
    table.string('name');
		table.string('phone');
    table.integer('balanceHours');
    table.integer('qualifierHours');
		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('users');
};
