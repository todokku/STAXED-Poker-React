// const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  return knex('users').insert([
    {
      id: 1,
      email: "nathank@gmail.com",
      // hashed_pw: bcrypt.hashSync('nathan', 10);
      name: "Nathan Keolasy",
      phone: "210-777-7777",
      balanceHours: 10,
      qualifierHours: 25,
      access: 'admin'
    },
    {
      id: 2,
      email: "stephenpoker@gmail.com",
      // hashed_pw: bcrypt.hashSync('stephen', 10);
      name: "Stephen Poker",
      phone: "210-666-6666",
      balanceHours: 300,
      qualifierHours: 9999,
      access: 'member'
    },
    {
      id: 3,
      email: "michael@gmail.com",
      // hashed_pw: bcrypt.hashSync('michael', 10);
      name: "Michael Whitzel",
      phone: "210-555-5555",
      balanceHours: 10,
      qualifierHours: 25,
      access: 'member'
    }
  ])
};


