app.factory('JuegoFactory', ['$resource', function($resource) {
  var factory = $resource('http://localhost:1337/Juego/:idJuego', {
    idJuego: '@idJuego'
  }, {
    update: {
      method: 'PUT',
      params: {
        idJuego: '@idJuego'
      }
    }
  });
  return factory;
}]);
