'use strict';

angular.module ( 'underTheWeather' )
    .directive ( 'myHeader', ['$rootScope', 'BaseWeather', function ( $rootScope, BaseWeather ) {
        return {
            templateUrl: 'components/header/header.html',
            restrict: 'E',
            replace: true,
            link:     function ( scope, element, attrs ) {
                scope.selectedBase = BaseWeather.getCurrentBaseName();
                scope.baseList = BaseWeather.getBaseObj();
                scope.updateBase = function () {
                    BaseWeather.setCurrentBase(scope.selectedBase);
                };
                $rootScope.$on('changedBaseEvent', function () {
                    scope.selectedBase = BaseWeather.getCurrentBaseName();
                })
            }
        };
    } ] );