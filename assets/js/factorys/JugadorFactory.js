app.factory('JugadorFactory', ['$resource', function($resource) {
  var factory = $resource('http://localhost:1337/Jugador/:idJugador', {
    idJugador: '@idJugador'
  }, {
    update: {
      method: 'PUT',
      params: {
        idJugador: '@idJugador'
      }
    }
  });
  return factory;
}]);
