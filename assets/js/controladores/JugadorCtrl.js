app.controller('JugadorCtrl', ['$scope', 'JugadorFactory', 'EquipoFactory', 'toastr',
  function($scope, JugadorFactory, EquipoFactory, toastr) {
    $scope.jugador = {};
    $scope.jugadores = [];
    $scope.equipos = [];

    leerEquipos();
    leerJugadores();

    function leerEquipos() {
      EquipoFactory.query().$promise.then(
        function success(respuesta) {
          console.log('éxito en la lectura de equipos');
          $scope.equipos = respuesta;
        },
        function error(error) {
          toastr.error('Error!', 'No se pudo leer los equipos');
          console.log('Error en en la lectura de equipos', error);
        });
    }

    function leerJugadores() {
      JugadorFactory.query().$promise.then(
        function success(respuesta) {
          console.log('éxito en la lectura de jugadores');
          $scope.jugadores = respuesta;
        },
        function error(error) {
          toastr.error('Error!', 'No se pudo leer los jugadores');
          console.log('Error en en la lectura de jugadores', error);
        });
    }

    $scope.registrar = function() {
      console.log('jugador', $scope.jugador);
      JugadorFactory.save($scope.jugador).$promise.then(
        function success(respuesta) {
          console.log('éxito en el registro de jugador', respuesta);
          toastr.success('Éxito!', 'Se registró un nuevo jugador');
          $scope.jugador = {};
          $scope.jugadores.push(respuesta);
        },
        function error(error) {
          toastr.error('Error!', 'No se registró el nuevo jugador');
          console.log('Error en registro de jugador', error);
        });
    }

    $scope.eliminar = function(jugador, indice) {
      console.log(jugador);
      JugadorFactory.delete({
        idJugador: jugador.id
      }).$promise.then(
        function success(respuesta) {
          console.log('éxito en eliminar el jugador');
          toastr.success('Éxito!', 'Se eliminó un jugador');
          $scope.jugadores.splice(indice, 1);
        },
        function error(error) {
          toastr.error('Error!', 'No se eliminó el jugador');
          console.log('Error en eliminar el jugador', error);
        });
    }

    $scope.editar = function(jugador, indice) {
      console.log(jugador);
      JugadorFactory.update({
        idJugador: jugador.id
      }, jugador).$promise.then(
        function success(respuesta) {
          console.log('éxito en editar el jugador', respuesta);
          toastr.success('Éxito!', 'Se editó un jugador');
          $scope.jugadores[indice] = respuesta;
        },
        function error(error) {
          toastr.error('Error!', 'No se editó el jugador');
          console.log('Error en editar el jugador', error);
        });
    }
  }
]);
