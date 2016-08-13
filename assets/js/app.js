var app = angular.module('campeonato', ['ui.router', 'ngResource', 'toastr', 'ngCookies', 'ui.gravatar']);
app.config(function($stateProvider, $urlRouterProvider, toastrConfig) {
  angular.extend(toastrConfig, {
    autoDismiss: false,
    containerId: 'toast-container',
    maxOpened: 0,
    newestOnTop: true,
    positionClass: 'toast-bottom-right',
    preventDuplicates: false,
    preventOpenDuplicates: false,
    target: 'body'
  });

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "vistas/inicio.html",
      data: {
        loginRequerido: false
      }
    })
    .state('ingreso', {
      url: "/ingreso",
      templateUrl: "vistas/ingreso.html",
      controller: 'IngresoAdminCtrl',
      data: {
        loginRequerido: false
      }
    })
    .state('registro', {
      url: "/registro",
      templateUrl: "vistas/registro.html",
      controller: 'RegistroAdminCtrl',
      data: {
        loginRequerido: false
      }
    })
    .state('perfil', {
      url: "/perfil",
      templateUrl: "vistas/perfil.html",
      controller: 'PerfilCtrl',
      data: {
        loginRequerido: true
      }
    })
    .state('equipos', {
      url: "/equipos",
      templateUrl: "vistas/equipos.html",
      controller: 'EquipoCtrl',
      data: {
        loginRequerido: true
      }
    })
    .state('jugadores', {
      url: "/jugadores",
      templateUrl: "vistas/jugadores.html",
      // controller: 'PerfilCtrl',
      data: {
        loginRequerido: true
      }
    })
    .state('juegos', {
      url: "/juegos",
      templateUrl: "vistas/juegos.html",
      // controller: 'PerfilCtrl',
      data: {
        loginRequerido: true
      }
    });
  $urlRouterProvider.otherwise("/");
});

app.run(function($rootScope, $cookies, $state, toastr) {
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
    var requiereLogin = toState.data.loginRequerido;

    if (requiereLogin) {
      if ($cookies.get('AdminId')) {
        toastr.success('Felicidades usted ha ingresado al sistema', 'Éxito');
      } else {
        toastr.info('Necesita ingresar al sistema para poder acceder a esta vista', 'Información');
        event.preventDefault();
        return $state.go('ingreso')
      }
    }
  });
});
