'use strict';

angular.module ( 'underTheWeather' )
    .controller ( 'ListCtrl', ['$scope', '$rootScope', 'ListFactory',
function ( $scope, $rootScope, ListFactory ) {

    var scope = $scope;
    
    $rootScope.$on('newListEvent', function () {
        scope.best = ListFactory.getTheBest();
        scope.rest = ListFactory.getTheRest();
        console.log(scope.rest);
    });
    
    }] );