app.controller('JuegoCtrl', ['$scope', 'JuegoFactory', 'EquipoFactory', 'toastr',
  function($scope, JuegoFactory, EquipoFactory, toastr) {
    $scope.juego = {};
    $scope.juegos = [];
    $scope.equipos = [];

    leerEquipos();
    leerJuegos();

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

    function leerJuegos() {
      JuegoFactory.query().$promise.then(
        function success(respuesta) {
          console.log('éxito en la lectura de juegos', respuesta);
          $scope.juegos = respuesta;
        },
        function error(error) {
          toastr.error('Error!', 'No se pudo leer los juegos');
          console.log('Error en en la lectura de juegos', error);
        });
    }

    $scope.registrar = function() {
      console.log('juego', $scope.juego);
      JuegoFactory.save($scope.juego).$promise.then(
        function success(respuesta) {
          console.log('éxito en el registro de juego', respuesta);
          toastr.success('Éxito!', 'Se registró un nuevo juego');
          $scope.juego = {};
          $scope.juegos.push(respuesta);
        },
        function error(error) {
          toastr.error('Error!', 'No se registró el nuevo juego');
          console.log('Error en registro de juego', error);
        });
    }

    $scope.eliminar = function(juego, indice) {
      console.log(juego);
      JuegoFactory.delete({
        idJuego: juego.id
      }).$promise.then(
        function success(respuesta) {
          console.log('éxito en eliminar el juego');
          toastr.success('Éxito!', 'Se eliminó un juego');
          $scope.juegos.splice(indice, 1);
        },
        function error(error) {
          toastr.error('Error!', 'No se eliminó el juego');
          console.log('Error en eliminar el juego', error);
        });
    }

    $scope.editar = function(juego, indice) {
      console.log(juego);
      JuegoFactory.update({
        idJuego: juego.id
      }, juego).$promise.then(
        function success(respuesta) {
          console.log('éxito en editar el juego', respuesta);
          toastr.success('Éxito!', 'Se editó un juego');
          $scope.juegos[indice] = respuesta;
        },
        function error(error) {
          toastr.error('Error!', 'No se editó el juego');
          console.log('Error en editar el juego', error);
        });
    }
  }
]);
