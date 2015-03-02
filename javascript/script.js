console.log ("script working in script.js")

var map;
		var lincoln = new google.maps.LatLng(40.843474, -96.607009);

		var MY_MAPTYPE_ID = 'custom_style';

		function initialize() {

			var featureOpts = [
			{
			  stylers: [
			    { hue: '#FEE3A0' },
			    { visibility: 'simplified' },
			    { gamma: 0.5 },
			    { weight: 0.5 }
			  ]
			},
			{
			  featureType: "road",
			  elementType: "geometry",
			  stylers: [
			    { lightness: 100 },
			    { visibility: "simplified" }
			  ]
			},{
			  featureType: "road",
			  elementType: "labels",
			  stylers: [
			    { visibility: "off" }
			  ]
			},
			{
			  featureType: 'water',
			  stylers: [
			    { color: '#60CEB5' }
			  ]
			}
			];

		    var mapOptions = {
		      zoom: 5,
		      center: lincoln,
		      mapTypeControlOptions: {
		      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
		    },
		      mapTypeId: MY_MAPTYPE_ID
		    };

		    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		    var marker = new google.maps.Marker({
		      position: lincoln,
		      map: map,
		      title: 'Hello World!'
		    });

		    var styledMapOptions = {
		      name: 'Custom Style'
		    };

		    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

		    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
		}

		google.maps.event.addDomListener(window, 'load', initialize);
		console.log("script working")
