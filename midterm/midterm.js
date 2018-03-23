/* Leaflet Configuration*/

var map = L.map('map', {
  center: [39.954353, -75.163282],
  zoom: 12
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

var state = {
  slideNumber:0
};

$(document).ready(function(){
  var downloadData = $.ajax("https://raw.githubusercontent.com/tammydou/OST4GIS-Midterm/master/midterm/farmersmarket_1.geojson");
  downloadData.done(function(data){
    var parseData = JSON.parse(data);
    var geojsonMarkerOptions = {
      radius: 4,
      fillColor: "fa4e30",
      color: "#000",
      weight: 0.1,
      opacity: 0.3,
      fillOpacity: 1
    };

    /* console.log(parseData.features); */

    var pageOne = L.geoJson(parseData.features, {
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
      }
    }).addTo(map);


    /*var pageTwo = L.geoJson(parseData.features, {
      filter: function(feature, layer) {
          if (feature.properties.FIELD10 === "Y"){
            return pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
       }
    ).addTo(map);*/


  });


  /*  var makeMarkers = function(markers){
      return _.map(markers, function(mar){return L.circlemarker([mar(Feature.geometry.coordinates))})
    }*/

});
