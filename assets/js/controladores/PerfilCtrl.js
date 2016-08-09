app.controller('PerfilCtrl', ['$scope', 'AdministradorFactory', 'toastr', '$cookies',

  function($scope, AdministradorFactory, toastr, $cookies) {
    $scope.admin = {};

    AdministradorFactory.get({
      id: $cookies.get('AdminId')
    }).$promise.then(function success(respuesta) {
        console.log('éxito en la obtenciòn de administrador', respuesta);
        $scope.admin = respuesta;
      },
      function error(error) {
        toastr.error('Error!', 'No se pudo obtener el administrador');
        console.log('Error en obtener el administrador', error);
      });
  }
]);
