'use strict';

angular.module ( 'underTheWeather' )
    .factory ( 'ListRetriever', ['$http', 'ListFactory',
                                 function ( $http, ListFactory ) {


    $http({
        url: "http://api.openweathermap.org/data/2.5/box/city",
        method: "GET",
        params: {
            bbox: "12,32,15,37,10",
            APPID: "bbddb4400491ecf3464e2fa763cdd7c8"
        }
    })
    .success ( function ( data ) {
        ListFactory.setList(data.list);
    });

return {
};
}] );
