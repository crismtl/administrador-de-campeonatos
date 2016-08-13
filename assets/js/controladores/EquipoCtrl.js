app.controller('EquipoCtrl', ['$scope', 'EquipoFactory', 'toastr',
  function($scope, EquipoFactory, toastr) {
    $scope.equipo = {};
    $scope.equipos = [];

    leerEquipos();

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

    $scope.registrar = function() {
      console.log('equipo', $scope.equipo);
      EquipoFactory.save($scope.equipo).$promise.then(
        function success(respuesta) {
          console.log('éxito en el registro de equipo');
          toastr.success('Éxito!', 'Se registró un nuevo equipo');
          $scope.equipo = {};
          $scope.equipos.push(respuesta);
        },
        function error(error) {
          toastr.error('Error!', 'No se registró el nuevo equipo');
          console.log('Error en registro de equipo', error);
        });
    }

    $scope.eliminar = function(equipo, indice) {
      console.log(equipo);
      EquipoFactory.delete({
        idEquipo: equipo.id
      }).$promise.then(
        function success(respuesta) {
          console.log('éxito en eliminar el equipo');
          toastr.success('Éxito!', 'Se eliminó un equipo');
          $scope.equipos.splice(indice, 1);
        },
        function error(error) {
          toastr.error('Error!', 'No se eliminó el equipo');
          console.log('Error en eliminar el equipo', error);
        });
    }

    $scope.editar = function(equipo, indice) {
      console.log(equipo);
      EquipoFactory.update({
        idEquipo: equipo.id
      }, equipo).$promise.then(
        function success(respuesta) {
          console.log('éxito en editar el equipo', respuesta);
          toastr.success('Éxito!', 'Se editó un equipo');
          $scope.equipos[indice] = respuesta;
        },
        function error(error) {
          toastr.error('Error!', 'No se editó el equipo');
          console.log('Error en editar el equipo', error);
        });
    }
  }
]);
