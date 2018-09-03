exports.up = function(knex, Promise) {
	return knex.schema.createTable('admins', table => {
		table.increments('id');
		table.string('email');
    table.string('hashed_pw');
    table.string('name');
		table.string('phone');
    table.string('adminType')
		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('admins');
};
