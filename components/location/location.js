'use strict';

angular.module ( 'underTheWeather' )
    .directive ( 'location', [ function ( ) {
        return {
            templateUrl: function(element, attrs) {
                // leave alt-template attribute empty for regular template
                // alt-template="-condensed" for the condensed template
                return 'components/location/location'+attrs.altTemplate+'.html';
            },
            restrict: 'E',
            scope: {
                locale: "="
            },
            link:     function postLink ( scope, element, attrs ) {
            }
        };
    }] );