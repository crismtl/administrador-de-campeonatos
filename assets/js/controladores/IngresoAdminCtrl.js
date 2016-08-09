app.controller('IngresoAdminCtrl', ['$scope', '$state', 'AdministradorFactory', 'toastr', '$cookies',
  function($scope, $state, AdministradorFactory, toastr, $cookies) {
    $scope.admin = {}

    $scope.ingresar = function() {
      AdministradorFactory.login({
        correo: $scope.admin.correo,
        contrasenia: $scope.admin.contrasenia
      }).$promise.then(
        function success(respuesta) {
          toastr.success('Bienvenido', 'Éxito');
          $cookies.put('AdminId', respuesta.id);
          $state.go('perfil');
          console.log(respuesta);
        },
        function error(error) {
          console.log(error);
          toastr.error('Algo salió mal con su ingreso', 'Error');
        });
    }
  }
]);
