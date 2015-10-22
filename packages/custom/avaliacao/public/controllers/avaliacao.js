'use strict';

/* jshint -W098 */
angular.module('mean.avaliacao').controller('AvaliacaoController', ['$scope', 'Global', 'Avaliacao',
  function($scope, Global, Avaliacao) {
    $scope.global = Global;
    $scope.package = {
      name: 'avaliacao'
    };
  }
]);
