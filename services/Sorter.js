'use strict';

angular.module ( 'underTheWeather' )
    .factory ( 'SorterFactory', [
function () {
    
    var baseTemp, baseHumid;
    
    var distFromBaseValue = ( value, base ) => Math.abs(base-value);
    var temperatureComp = R.comparator( (a,b) => distFromBaseValue(a.main.temp, baseTemp) < distFromBaseValue(b.main.temp, baseTemp) );
    var humidComp = R.comparator( (a,b) => distFromBaseValue(a.main.humidity, baseHumid) < distFromBaseValue(b.main.humidity, baseHumid) );
    
    function setBaseWeather (base) {
        baseTemp = base.temperature;
        baseHumid = base.humidity;
    }
    
return {
    sortThis: function ( list, base ) {
        setBaseWeather(base);
        return list.sort( (a,b) => temperatureComp(a,b) || humidComp(a,b) );
    }
};
}] );
