'use strict';

angular.module('mean.alunos').factory('Alunos', ['$resource',
function($resource) {
	return $resource('api/alunos/:alunoId', {
      alunoId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
}]);