var models = require('./server.js').models;
/*
var toSave = [
    {name: "Nick", email: "solo@mail.com"},
    {name: "Nicko", email: "sologee@mail.com"},
    {name: "Solo", email: "solo1@mail.com"},
    {name: "Achilles", email: "achii1@mail.com"},
    {name: "Ned", email: "sollo@mail.com"},
    {name: "Nicky", email: "solow@gmail.com"},
    {name: "Nick2", email: "solos@gmail.com"},
    {name: "Nick1", email: "solo1@gmail.com"},
];

toSave.map(obj => {
    models.Profile.create(obj, (err, created) => {
        console.log("Created?", created);
    })
});
*/

var filter = {
  where: {
    email: {like: 'solo1'},
  },
  order: 'id ASC',
  limit: 10,
};

models.Profile.destroyAll(filter.where, (err, found) => {
  console.log("Found?", err, found);
});
