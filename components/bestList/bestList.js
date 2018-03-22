'use strict';

angular.module ( 'underTheWeather' )
    .directive ( 'bestList', function () {
        return {
            templateUrl: 'components/bestList/bestList.html',
            restrict: 'E',
            replace: true,
            link:     function postLink ( scope, element, attrs ) {
            }
        };
    } );