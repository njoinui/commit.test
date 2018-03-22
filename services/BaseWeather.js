'use strict';

angular.module ( 'underTheWeather' )
    .factory ( 'BaseWeather', ['$rootScope',
function ( $rootScope ) {

var baseList = {
    "male": {
        "temperature": 21,
        "humidity": 50
    },
    "female": {
        "temperature": 22,
        "humidity": 50
    }
};

var currentBase = "male";

function setBase ( selector ) {
    currentBase = selector;
    $rootScope.$emit("changedBaseEvent");
}

return {
    getCurrentBase: function () {
        return baseList[currentBase];
    },
    getCurrentBaseName: function () {
        return currentBase;
    },
    setCurrentBase:     function ( selector ) {
        setBase( selector );
    },
    getBaseObj:         function () {
        return baseList;
    }
};
}] );
