
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: 'WebPT4'},
        {name: 'Web18'},
        {name: 'WebPT2'}
      ]);
    });
};
