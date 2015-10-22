'use strict';

angular.module('mean.avaliacao').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('avaliacao example page', {
      url: '/avaliacao/example',
      templateUrl: 'avaliacao/views/index.html'
    });
  }
]);
