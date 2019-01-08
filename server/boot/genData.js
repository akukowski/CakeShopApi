

module.exports = function (app) {
  const data = [

  ];

  var db = app.dataSources.db;
  const CakeModel = app.models.Cake || db.buildModelFromInstance("Cake", data, {idInjection: true});

  data.map(function(cake) {
    CakeModel.create(cake, function (err, u) {
    if (err) {
      throw err;
    }
  });
})

}
