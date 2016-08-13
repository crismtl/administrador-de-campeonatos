app.factory('EquipoFactory', ['$resource', function($resource) {
  var factory = $resource('http://localhost:1337/Equipo/:idEquipo', {
    idEquipo: '@idEquipo'
  }, {
    update: {
      method: 'PUT',
      params: {
        idEquipo: '@idEquipo'
      }
    }
  });
  return factory;

}]);
