
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Rane', cohort_id: 1},
        {name: 'Bilbo', cohort_id: 2},
        {name: 'Carter', cohort_id: 3}
      ]);
    });
};
