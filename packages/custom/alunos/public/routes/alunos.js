'use strict';

angular.module('mean.alunos').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
	    .state('alunos', {
	      url: '/alunos',
	      templateUrl: 'alunos/views/list.html'
	    }).state('create aluno', {
	      url: '/alunos/create',
	      templateUrl: 'alunos/views/create.html'
	    });
 	}
]);
