/* Leaflet Configuration*/

var map = L.map('map', {
  center: [39.996643, -75.163282],
  zoom: 12
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

var pageNumber = 0;

var pointToLayer = function(feature,latlng){
  return L.circleMarker(latlng,geojsonMarkerOptions);
};

var filter0 = function(feature){
  if (feature.properties.G!=="") {
    return true;}else {return false;}
  };

var filter1 = function(feature){
  if (feature.properties.G==="true") {
    return true;}else {return false;}};

var filter2 = function(feature){
  if (feature.properties.I==="true") {
    return true;} else {return false;}};

var filter3 = function(feature){
  if (feature.properties.H==="true") {
    return true;} else {return false;}};

    var colorMarker = function(feature){
      switch(feature) {
        case'Center City':return 'red';
        case'Bridesburg Kensington Port Richmond':return 'green';
        case'Germantown Chestnut Hill':return 'black';
        case'Lower Northeast':return 'yellow';
        case'North':return 'purple';
        case'Northeast':return 'orange';
        case'Northwest':return '#91e6d9';
        case'Olney Oak Lane':return 'gray';
        case'Roxborough Manayunk':return 'pink';
        case'South':return 'blue';
        case'Southwest':return 'brown';
        case'West':return 'maroon';
      }
    };

    var geojsonMarkerOptions1 = function(feature){
      return{
        radius: 8,
        fillColor: colorMarker(feature.properties.B),

        weight: 0.1,
        opacity: 0.3,
        fillOpacity: 0.5
      };
    };



var filter4 = function(feature){
  if (feature.properties.B===""){
    return false;}else{return true;}};


var myFilter = filter0;
var colorOptions = geojsonMarkerOptions;
var geojsonMarkerOptions1;
var geojsonMarkerOptions = {
  radius: 8,
  fillColor: "red",
  weight: 0.1,
  opacity: 0.3,
  fillOpacity: 0.5
};

var showResults = function(){
  $('#intro').hide();
  $('#results').show();
};

$(document).ready(function(){
  var downloadData = $.ajax("https://raw.githubusercontent.com/tammydou/OST4GIS-Midterm/master/midterm/convertcsv.geojson");
  downloadData.done(function(data){
  var parseData = JSON.parse(data);
/*pageOne*/
  /*var pageOne = L.geoJson(parseData.features, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, geojsonMarkerOptions);
    }
  }).addTo(map);*/

  featureGroup = L.geoJson(parseData, {
    pointToLayer:pointToLayer,
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<b> Name:  </b>"+feature.properties.A+"; <br><b>Address: </b>"+feature.properties.C+"; <br><b>Time: </b>"+feature.properties.F+","+feature.properties.D+","+feature.properties.E+"; <br><b>Bus: </b>"+feature.properties.J);
      layer.on('mouseover',function(event){
      layer.openPopUp();});
      layer.on('mouseout',function(event){
      layer.closePopUp();});
    },
    filter:myFilter,
    style:colorOptions,
  }).addTo(map);
  $('#previous').hide();
});

});



/*pageTwo*/

/*PageThree*/

/*PageFour*/

/*PageFive*/

/*Next*/
$('#next').click(function(e){
  pageNumber++;
  $('#previous').show();
  map.removeLayer(featureGroup);
  if (pageNumber == 1){
    myFilter=filter1;
    colorOptions=geojsonMarkerOptions;
    title="More to Market: Cooking Demonstrations";
    content="Many of The Food Trust's farmers markets offer free cooking demonstrations where customers can learn to cook healthy meals using seasonal produce found right at market. Join the cooking demonstrations and have fun!";
  }
  if (pageNumber == 2){
    myFilter=filter2;
    colorOptions=geojsonMarkerOptions;
    title="Farmers Market Open All Year Round";
    content="Most farmers markets pop up just in time for the warm weather. Luckily, there are still plenty of farmers markets offering farm-fresh produce, cheese, meat, fish, honey, flowers and more in all corners of the city on all days of the week. Some farmers’ markets stay put at parks and public spaces all year long. Check out the farmers market that open all year round!";
  }
  if (pageNumber == 3){
    myFilter=filter3;
    colorOptions=geojsonMarkerOptions;
    title="The Food Trust's Farmers Market";
    content="The Food Trust, in partnership with Get Healthy Philly, operates 22 farmers markets in Philadelphia. Many of The Food Trust's farmers markets are located in neighborhoods that otherwise lack access to healthy foods; these markets accept SNAP (food stamp) benefits and Philly Food Bucks to make fruits and vegetables more affordable to everyone. Find out places to earn more fruits and veggies with Philly Food Bucks!";
  }
  if (pageNumber == 4){
    myFilter=filter4;
    colorOptions=geojsonMarkerOptions1;
    title="The Food Trust's Farmers in Different Districts";
    content="Farmers Markets in Philadelphia located in different districts, including Center City, Bridesburg Kensington Port Richmond, Germantown Chestnut Hill, Lower Northeast, North, Northeast, Olney Oak Lane, Roxborough Manayunk, South, Southwest, West. Each marker color coded based on district. To get more information about the farmers market, click on that marker on the map.";
    $('#next').hide();
  }
/*
  if (pageNumber == 5){
    $('#previous').show();
    myFilter=filter4;
    colorOptions=geojsonMarkerOptions1;
    $('#next').hide();
  }
  */
  $('.title').text(title);
  $('.content').text(content);
  showResults();

  $(document).ready(function(){
    var downloadData = $.ajax("https://raw.githubusercontent.com/tammydou/OST4GIS-Midterm/master/midterm/convertcsv.geojson");
    downloadData.done(function(data){
      var parseData = JSON.parse(data);

  /*pageOne*/
    /*var pageOne = L.geoJson(parseData.features, {
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
      }
    }).addTo(map);*/

      featureGroup = L.geoJson(parseData, {
        pointToLayer:pointToLayer,

        onEachFeature: function(feature, layer) {
          layer.bindPopup(" Name:  "+feature.properties.A+"; Address:  "+feature.properties.C);
          layer.on('mouseover',function(event){
          layer.openPopUp();});
          layer.on('mouseout',function(event){
          layer.closePopUp();});
        },
        filter:myFilter,
        style:colorOptions,
      }).addTo(map);

    });
  });
});
/*Previous*/


$('#previous').click(function(e){
  pageNumber--;
  $('#next').show();
  map.removeLayer(featureGroup);
  if (pageNumber === 0){
    myFilter=filter0;
    colorOptions=geojsonMarkerOptions;
    /*$('#previous').hide();*/
    $('#previous').hide();
    title="FIND A FARMERS MARKET NEAR YOU!";
    content="Surrounded by richly fertile farmland and home to innovative urban growing projects, Philadelphia is a market-goer’s dream. Year-round and seasonally, open-air stalls dot the city and countryside, from the bustling indoor Reading Terminal Market to the gingham-clothed tables of the Phoenixville Market, collectively connecting consumers to freshly grown and produced food every day of the week. With many accepting electronic payments, Philly’s growing roster of farmers’ markets has made eating fresh, local food an easy way of life. Here, your master list of farmers markets in the Philadelphia region.";
}
  if (pageNumber == 1){
    myFilter=filter1;
    colorOptions=geojsonMarkerOptions;
    /*$('#previous').hide();*/
    title="More to Market: Cooking Demonstrations";
    content="Many of The Food Trust's farmers markets offer free cooking demonstrations where customers can learn to cook healthy meals using seasonal produce found right at market. Join the cooking demonstrations and have fun!";
  }
  if (pageNumber == 2){
    myFilter=filter2;
    colorOptions=geojsonMarkerOptions;
    title="Farmers Market Open All Year Round";
    content="Most farmers markets pop up just in time for the warm weather. Luckily, there are still plenty of farmers markets offering farm-fresh produce, cheese, meat, fish, honey, flowers and more in all corners of the city on all days of the week. Some farmers’ markets stay put at parks and public spaces all year long. Check out the farmers market that open all year round!";
  }
  if (pageNumber == 3){
    myFilter=filter3;
    colorOptions=geojsonMarkerOptions;
    title="The Food Trust's Farmers Market";
    content="The Food Trust, in partnership with Get Healthy Philly, operates 22 farmers markets in Philadelphia. Many of The Food Trust's farmers markets are located in neighborhoods that otherwise lack access to healthy foods; these markets accept SNAP (food stamp) benefits and Philly Food Bucks to make fruits and vegetables more affordable to everyone. Find out places to earn more fruits and veggies with Philly Food Bucks!";
  }
  if (pageNumber == 4){
    myFilter=filter4;
    colorOptions=geojsonMarkerOptions;
    title="Farmers Markets in Different Districts";
    content="Farmers Markets in Philadelphia located in different districts, including Center City, Bridesburg Kensington Port Richmond, Germantown Chestnut Hill, Lower Northeast, North, Northeast, Olney Oak Lane, Roxborough Manayunk, South, Southwest, West. Each marker color coded based on district. To get more information about the farmers market, click on that marker on the map.";
  }
  $('.title').text(title);
  $('.content').text(content);
  showResults();
/*
  if (pageNumber == 5){
    myFilter=filter5;
    colorOptions=geojsonMarkerOptions1;
  }
  */
  $(document).ready(function(){
    var downloadData = $.ajax("https://raw.githubusercontent.com/tammydou/OST4GIS-Midterm/master/midterm/convertcsv.geojson");
    downloadData.done(function(data){
      var parseData = JSON.parse(data);

      var display;


  /*pageOne*/
    /*var pageOne = L.geoJson(parseData.features, {
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
      }
    }).addTo(map);*/

      featureGroup = L.geoJson(parseData, {
        pointToLayer:pointToLayer,
        onEachFeature: function(feature, layer) {
          layer.bindPopup(" Name:  "+feature.properties.A+"; Address:  "+feature.properties.C);
          layer.on('mouseover',function(event){
          layer.openPopUp();});
          layer.on('mouseout',function(event){
          layer.closePopUp();});
        },
        filter:myFilter,
        style:colorOptions,
      }).addTo(map);
    });
  });
});





    /*var pageOne = L.geoJson(parseData.features, {
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
      }
    }).addTo(map);*/

    /*var popup = L.popup()
    .setLatLng([parseData.features.geometry.coordinates[1],parseData.features.geometry.coordinates[0]])
    .setContent("Name:"+parseData.features.properties.A+"Address:"+parseData.features.properties.C)
    .openOn(map);*/


    /*var pageTwo = L.geoJson(parseData.features, {
      filter: function(feature, layer) {
          if (feature.properties.FIELD10 === "Y"){
            return pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
       }
    ).addTo(map);*/





  /*  var makeMarkers = function(markers){
      return _.map(markers, function(mar){return L.circlemarker([mar(Feature.geometry.coordinates))})
    }*/
