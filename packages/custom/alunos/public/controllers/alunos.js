'use strict';

/* jshint -W098 */
angular.module('mean.alunos').controller('AlunosController', ['$scope', '$stateParams', '$location', 'Global', 'Alunos', 'MeanUser',
	function($scope, $stateParams, $location, Global, Alunos, MeanUser) {
		$scope.global = Global;
		$scope.package = { name: 'alunos' };

		$scope.create = function(isValid) {
		    // $scope.aluno.permissions.push('test test');
		    var aluno = new Alunos($scope.aluno);
		    aluno.$save(function(response) {
		      $location.path('alunos');
		    });

		    $scope.aluno = {};
		};

	   $scope.find = function(isValid) {
	      Alunos.query(function(alunos) {
	        $scope.alunos = alunos;
	      });
	    };

	    $scope.findOne = function(isValid) {
			Alunos.get({alunoId: $stateParams.alunoId}, 
			function(aluno) {
				$scope.aluno = aluno;
			});
	  	};

	    $scope.remove = function(aluno) {
	      if (aluno) {
	        aluno.$delete(function(response) {
	          for (var i in $scope.alunos) {
	            if ($scope.alunos[i] === aluno) {
	              $scope.alunos.splice(i, 1);
	            }
	          }
	          $location.path('alunos');
	        });
	      } else {
	        $scope.aluno.$delete(function(response) {
	          $location.path('alunos');
	        });
	      }
	    };



	}
]);

 // $scope.create = function() {
		
 //        // $scope.aluno.permissions.push('test test');
 //        var aluno = new Alunos();
 //        aluno.nome = 'teste';

 //        aluno.$save(function(response) {
 //          $location.path('alunos/' + response._id);
 //        });

 //        $scope.aluno = {};
 //    };

 //    $scope.remove = function(aluno) {
 //      if (aluno) {
 //        aluno.$remove(function(response) {
 //          for (var i in $scope.alunos) {
 //            if ($scope.alunos[i] === aluno) {
 //              $scope.alunos.splice(i, 1);
 //            }
 //          }
 //          $location.path('alunos');
 //        });
 //      } else {
 //        $scope.aluno.$remove(function(response) {
 //          $location.path('alunos');
 //        });
 //      }
 //    };

 //    $scope.update = function(isValid) {
 //      if (isValid) {
 //        var aluno = $scope.aluno;
 //        if (!aluno.updated) {
 //          aluno.updated = [];
 //        }
 //        aluno.updated.push(new Date().getTime());

 //        aluno.$update(function() {
 //          $location.path('alunos/' + aluno._id);
 //        });
 //      } else {
 //        $scope.submitted = true;
 //      }
 //    };

 //    $scope.find = function() {
 //      Alunos.query(function(alunos) {
 //        $scope.alunos = alunos;
 //      });
 //    };

 //    $scope.findOne = function() {
 //      Alunos.get({
 //        alunoId: $stateParams.alunoId
 //      }, function(aluno) {
 //        $scope.aluno = aluno;
 //      });
 //    };