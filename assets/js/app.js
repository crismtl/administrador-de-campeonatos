var app = angular.module('campeonato', ['ui.router', 'ngResource', 'toastr', 'ngCookies']);
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
            // controller: 'IngresoCtrl',
            data: {
                loginRequerido: false
            }
        })
        .state('registro', {
            url: "/registro",
            templateUrl: "vistas/registro.html",
            // controller: 'IngresoCtrl',
            data: {
                loginRequerido: false
            }
        })
        .state('perfil', {
            url: "/perfil",
            templateUrl: "vistas/perfil.html",
            // controller: 'IngresoCtrl',
            data: {
                loginRequerido: true
            }
        })
        // // .state('acercade', {
        // //     url: "/acercade",
        // //     templateUrl: "rutas/acercade.html",
        // //     // data: {
        // //     //     loginRequerido: false
        // //     // }
        // // })
        // .state('solicitud', {
        //     url: "/solicitud",
        //     templateUrl: "vistas/solicitud.html",
        //     controller: 'SolicitudCtrl',
        //     data: {
        //         loginRequerido: true
        //     }
        // })
        // .state('consulta', {
        //     url: "/consulta",
        //     templateUrl: "vistas/consulta.html",
        //     controller: 'ConsultaCtrl',
        //     data: {
        //         loginRequerido: true
        //     }
        // })

    ;
    $urlRouterProvider.otherwise("/");
});

app.run(function($rootScope, $cookies, $state, toastr) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
        var requiereLogin = toState.data.loginRequerido;

        if (requiereLogin) {
            if ($cookies.get('UsuarioId')) {
                toastr.success('Felicidades se encuentra logueado', 'Éxito');
            } else {
                toastr.info('Necesita estar logueado para poder acceder a esta vista', 'Información');
                event.preventDefault();
                return $state.go('ingreso')
            }
        }
    });
});
