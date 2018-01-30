angular
  .module('app')
  .config(config);

function config ($stateProvider, $urlRouterProvider) {

$stateProvider

  // setup an abstract state for the tabs directive

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller:'CtrlLogin'
  })
  .state('seasons', {
    url: '/seasons',
    templateUrl: 'templates/seasons.html',
    controller:'CtrlSeasons'
  })


  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.estado', {
    url: '/estado/:id',
    views: {
      'tab-estado': {
        templateUrl: 'templates/tab-estado.html',
        controller: 'CtrlEstado'
      }
    }
  })

  .state('tab.evol', {
      url: '/evol',
      views: {
        'tab-evol': {
          templateUrl: 'templates/tab-evol.html',
          controller: 'CtrlEvol'
        }
      }
    })
    .state('tab.riesgos', {
      url: '/riesgos',
      views: {
        'tab-riesgos': {
          templateUrl: 'templates/tab-riesgos.html',
          controller: 'CtrlRiesgos'
        }
      }
    })

  .state('tab.descarga', {
    url: '/descarga',
    views: {
      'tab-descarga': {
        templateUrl: 'templates/tab-descarga.html',
        controller : 'CtrlDescarga'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
}
