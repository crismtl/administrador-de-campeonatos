app.controller('RegistroAdminCtrl', ['$scope', 'AdministradorFactory', 'toastr',
  function($scope, AdministradorFactory, toastr) {
    $scope.admin = {};
    $scope.registrar = function() {
      console.log('admin', $scope.admin);
      AdministradorFactory.save($scope.admin).$promise.then(function success(respuesta) {
          console.log('éxito en el registro de administrador');
          toastr.success('Éxito!', 'Se registró un nuevo administrador');
          $scope.admin = {};
        },
        function error(error) {
          toastr.error('Error!', 'No se registró el nuevo administrador');
          console.log('Error en registro de administrador', error);
        });

    }
  }
]);
