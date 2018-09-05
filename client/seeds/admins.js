const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  return knex('admins').insert([
    {
      email: "owner@gmail.com",
      name: "Owner Person",
      phone: "512-777-7777",
      adminType: "owner",
      hashed_pw: '' // bcrypt.hashSync('owner', 10);
    },
    {
      email: "admin@gmail.com",
      name: "Admin Poker",
      phone: "987-654-3210",
      adminType: "admin",
      hashed_pw: '' // bcrypt.hashSync('admin', 10);
    }
  ])
};


