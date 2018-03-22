'use strict';

angular.module ( 'underTheWeather' )
    .factory ( 'ListFactory', [ '$rootScope', 'BaseWeather', 'SorterFactory',
function ($rootScope, BaseWeather, SorterFactory) {

    var list, rawList;
    
    function processList () {
        var base = BaseWeather.getCurrentBase();
        list = SorterFactory.sortThis( rawList, base );
        $rootScope.$emit("newListEvent");
    }
    
    $rootScope.$on('changedBaseEvent', function () {
        processList();
    });

return {
    setList: function ( newList ) {
        rawList = newList;
        processList();
    },
    getTheBest: function () {
        if (list) {
            return list[0];
        }
    },
    getTheRest: function () {
        if (list) {
            return list.slice(1, 8);
        }
    }
};
}] );
