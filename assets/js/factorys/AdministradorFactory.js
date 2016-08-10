app.factory('AdministradorFactory', ['$resource', function($resource) {
  var factory = $resource('http://localhost:1337/Administrador/:idAdministrador', {
    idAdministrador: '@idAdministrador'
  }, {
    login: {
      url: 'http://localhost:1337/Administrador/ingreso',
      method: 'POST'
    },
    actualizar: {
      method: 'PUT',
      params: {
        idAdministrador: '@idAdministrador'
      }
    }
  });
  return factory;

}]);
