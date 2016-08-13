app.controller('PerfilCtrl', ['$scope', 'AdministradorFactory', 'toastr', '$cookies',

  function($scope, AdministradorFactory, toastr, $cookies) {
    $scope.admin = {};

    AdministradorFactory.get({
      idAdministrador: $cookies.get('AdminId')
    }).$promise.then(function success(respuesta) {
        console.log('éxito en la obtenciòn de administrador', respuesta);
        $scope.admin = respuesta;
      },
      function error(error) {
        toastr.error('Error!', 'No se pudo obtener el administrador');
        console.log('Error en obtener el administrador', error);
      });

    $scope.actualizar = function() {
      console.log('admin update', $scope.admin);
      AdministradorFactory.actualizar({
        idAdministrador: $cookies.get('AdminId')
      }, $scope.admin).$promise.then(function success(respuesta) {
          console.log('éxito en la actualización de administrador', respuesta);
          toastr.success('Éxito!', 'Se actualizó la información del administrador');
          $scope.admin = respuesta;
        },
        function error(error) {
          toastr.error('Error!', 'No se pudo obtener el administrador');
          console.log('Error al actualizar el administrador', error);
        });
    }
  }
]);
