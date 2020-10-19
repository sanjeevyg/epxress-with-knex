
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movie').del()

  
      // Inserts seed entries
  await knex('movie').insert([
        {name: 'Titanic',
        rating: 9
      },
        {name: 'Lord of the Ring',
        rating: 8.8
      },
        {name: 'Sunrise',
      rating: 8.5}
      ]);
};
