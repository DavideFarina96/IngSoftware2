const index = require('../index');

/* NON VA ...... Leggo dal file "handleDirections.inputdata.js" l'oggetto contenente i dati di test 
const inputData = require('./handleDirections.inputdata');
var testObjects = inputData.testObjects;*/



var testObjects = [
	{  /* https://maps.googleapis.com/maps/api/directions/json?origin=Povo&destination=xxxxxxxxxxxxx&alternative=true&transit_mode=train|tram|bus&mode=transit&key=AIzaSyBm3HQcIrjGyQAjRemBa9HZjrbp2l0uMCc */
	   "available_travel_modes" : [ "DRIVING", "WALKING" ],
	   "geocoded_waypoints" : [
		  {
			 "geocoder_status" : "OK",
			 "place_id" : "ChIJM4r3mJN2gkcRcHPzi4kJBwo",
			 "types" : [ "locality", "political" ]
		  },
		  {
			 "geocoder_status" : "OK",
			 "place_id" : "ChIJKeBtcu9y5IkRKaLiRKwDj4M",
			 "types" : [
				"establishment",
				"general_contractor",
				"point_of_interest",
				"roofing_contractor"
			 ]
		  }
	   ],
	   "routes" : [],
	   "status" : "ZERO_RESULTS",
	   "expected" : "ZERO_RESULTS"
	},
	{
		/* https://maps.googleapis.com/maps/api/directions/json?origin=Povo&destination=Trento-autostaz&alternative=true&transit_mode=train|tram|bus&mode=transit&key=AIzaSyBm3HQcIrjGyQAjRemBa9HZjrbp2l0uMCc */
	   "geocoded_waypoints" : [
		  {
			 "geocoder_status" : "OK",
			 "place_id" : "ChIJM4r3mJN2gkcRcHPzi4kJBwo",
			 "types" : [ "locality", "political" ]
		  },
		  {
			 "geocoder_status" : "OK",
			 "place_id" : "ChIJQZuSBDZxgkcREfDOGl1uir8",
			 "types" : [
				"bus_station",
				"establishment",
				"point_of_interest",
				"transit_station"
			 ]
		  }
	   ],
	   "routes" : [
		  {
			 "bounds" : {
				"northeast" : {
				   "lat" : 46.0703792,
				   "lng" : 11.158009
				},
				"southwest" : {
				   "lat" : 46.03735,
				   "lng" : 11.1178852
				}
			 },
			 "copyrights" : "Map data ©2017 Google",
			 "legs" : [
				{
				   "arrival_time" : {
					  "text" : "2:31pm",
					  "time_zone" : "Europe/Rome",
					  "value" : 1512739884
				   },
				   "departure_time" : {
					  "text" : "2:09pm",
					  "time_zone" : "Europe/Rome",
					  "value" : 1512738591
				   },
				   "distance" : {
					  "text" : "9.2 km",
					  "value" : 9202
				   },
				   "duration" : {
					  "text" : "22 mins",
					  "value" : 1293
				   },
				   "end_address" : "38121 Trento, Province of Trento, Italy",
				   "end_location" : {
					  "lat" : 46.0703792,
					  "lng" : 11.1189911
				   },
				   "start_address" : "38123 Povo, Province of Trento, Italy",
				   "start_location" : {
					  "lat" : 46.065613,
					  "lng" : 11.158009
				   },
				   "steps" : [
					  {
						 "distance" : {
							"text" : "8.9 km",
							"value" : 8868
						 },
						 "duration" : {
							"text" : "17 mins",
							"value" : 1020
						 },
						 "end_location" : {
							"lat" : 46.067846,
							"lng" : 11.118867
						 },
						 "html_instructions" : "Bus towards Gardolo P.Le Neufahrn Sud",
						 "polyline" : {
							"points" : "aedxGqhbcAQDWp@{AvAQZIf@@`@N~C^rAJfCL^PT`C|Cf@`AfC~HnBKhBI~EPNNFVNtCDPTlAx@EdN^tAVrIlEnAV~C\\fBLbGd@z@XfAp@n@r@~DhHtEhIj@h@j@XlC|@HXLDNAr@\\JFr@TbBf@jAp@|@lAbA|AXRZTpDnAx@n@lBrAnAb@vATlAHn@Zn@t@Lf@FVLpAKh@Db@LLP?LQB[B]HYXc@jAu@^]Zk@|@sB@?X[VKPAh@A`@A`@Oj@_@x@w@j@Kh@A`@JZZJl@Af@@f@^Hn@h@dApAtBlCTp@Dr@C`AUfDKf@c@`@k@A_AU[HUf@A^?ZbAzGNp@lCnDvBbBvBbBLZFj@Gf@ET_@TuCj@uA`@iGxBqGzB]D]IYESJUj@SHKXE^B^Gn@KZQ^aB~AqEnEs@f@}@\\kA\\w@H_Ix@yAh@KMOEQFIRA\\KPgEvE}BfCaGbJQBMGQAKJGN@X@ZIV[d@iCzDg@Z}ALWLS`@[pAE^J`FNZRJRCLOJUDe@OwBIOMMWEeFt@sMlBq@^c@f@yCtEYPS?KMA?K[[sBMKUByA`@}Bp@qCi@mAZCBgFB_A@cCW_CL]EwB_BKIYCiWbDAM"
						 },
						 "start_location" : {
							"lat" : 46.065613,
							"lng" : 11.158009
						 },
						 "transit_details" : {
							"arrival_stop" : {
							   "location" : {
								  "lat" : 46.067846,
								  "lng" : 11.118867
							   },
							   "name" : "Rosmini S.Maria Maggiore"
							},
							"arrival_time" : {
							   "text" : "2:27pm",
							   "time_zone" : "Europe/Rome",
							   "value" : 1512739620
							},
							"departure_stop" : {
							   "location" : {
								  "lat" : 46.065613,
								  "lng" : 11.158009
							   },
							   "name" : "Povo \"Polo Sociale\" Cap."
							},
							"departure_time" : {
							   "text" : "2:10pm",
							   "time_zone" : "Europe/Rome",
							   "value" : 1512738600
							},
							"headsign" : "Gardolo P.Le Neufahrn Sud",
							"line" : {
							   "agencies" : [
								  {
									 "name" : "Trentino trasporti esercizio S.p.A.",
									 "phone" : "011 39 0461 821000",
									 "url" : "http://www.ttesercizio.it/"
								  }
							   ],
							   "color" : "#0277bd",
							   "name" : "Gardolo Roncafort Stazione V.Deg. Mad.Bianca",
							   "short_name" : "4",
							   "text_color" : "#ffffff",
							   "vehicle" : {
								  "icon" : "//maps.gstatic.com/mapfiles/transit/iw2/6/bus2.png",
								  "name" : "Bus",
								  "type" : "BUS"
							   }
							},
							"num_stops" : 22
						 },
						 "travel_mode" : "TRANSIT"
					  },
					  {
						 "distance" : {
							"text" : "0.3 km",
							"value" : 334
						 },
						 "duration" : {
							"text" : "4 mins",
							"value" : 264
						 },
						 "end_location" : {
							"lat" : 46.0703792,
							"lng" : 11.1189911
						 },
						 "html_instructions" : "Walk to 38121 Trento, Province of Trento, Italy",
						 "polyline" : {
							"points" : "asdxG}szbAs@Po@F[Bc@BsCl@MDQJm@ZC@A?C?E?KFC@A@?@ABAB?D?D?F?H?B?@A??@CBIBAEAMCW[wAYwA"
						 },
						 "start_location" : {
							"lat" : 46.067846,
							"lng" : 11.118867
						 },
						 "steps" : [
							{
							   "distance" : {
								  "text" : "26 m",
								  "value" : 26
							   },
							   "duration" : {
								  "text" : "1 min",
								  "value" : 19
							   },
							   "end_location" : {
								  "lat" : 46.0683461,
								  "lng" : 11.118741
							   },
							   "html_instructions" : "Head \u003cb\u003enorth\u003c/b\u003e on \u003cb\u003eVia Antonio Rosmini\u003c/b\u003e toward \u003cb\u003eVia Santa Margherita\u003c/b\u003e",
							   "polyline" : {
								  "points" : "asdxG}szbAs@Po@F"
							   },
							   "start_location" : {
								  "lat" : 46.067846,
								  "lng" : 11.118867
							   },
							   "travel_mode" : "WALKING"
							},
							{
							   "distance" : {
								  "text" : "0.2 km",
								  "value" : 176
							   },
							   "duration" : {
								  "text" : "2 mins",
								  "value" : 126
							   },
							   "end_location" : {
								  "lat" : 46.069877,
								  "lng" : 11.1182347
							   },
							   "html_instructions" : "Continue onto \u003cb\u003eVia della Prepositura\u003c/b\u003e",
							   "polyline" : {
								  "points" : "evdxGcszbA[Bc@BsCl@MDQJm@ZC@A?C?E?"
							   },
							   "start_location" : {
								  "lat" : 46.0683461,
								  "lng" : 11.118741
							   },
							   "travel_mode" : "WALKING"
							},
							{
							   "distance" : {
								  "text" : "0.1 km",
								  "value" : 132
							   },
							   "duration" : {
								  "text" : "2 mins",
								  "value" : 119
							   },
							   "end_location" : {
								  "lat" : 46.0703792,
								  "lng" : 11.1189911
							   },
							   "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCavalcavia S. Lorenzo\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eTake the stairs\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
							   "maneuver" : "turn-slight-left",
							   "polyline" : {
								  "points" : "w_exG}ozbAKFC@A@?@ABAB?D?D?F?H?B?@A??@CBIBAEAMCW[wAYwA"
							   },
							   "start_location" : {
								  "lat" : 46.069877,
								  "lng" : 11.1182347
							   },
							   "travel_mode" : "WALKING"
							}
						 ],
						 "travel_mode" : "WALKING"
					  }
				   ],
				   "traffic_speed_entry" : [],
				   "via_waypoint" : []
				}
			 ],
			 "overview_polyline" : {
				"points" : "aedxGqhbcAQDWp@{AvAQZIf@@`@N~C^rAJfCL^rCrDf@`AfC~HxEU~EPNNFVNtCZ~Ax@EdN^tAVrIlEnAV~C\\jJr@z@XfAp@n@r@~DhHtEhIj@h@j@XlC|@HXLDNAr@\\~@\\bBf@jAp@`CjDt@h@pDnAx@n@lBrAnAb@vATlAHn@Zn@t@T~@LpAKh@Db@LLP?LQFy@HYXc@jAu@^]xA_DZ[VKPAjAC`@Oj@_@x@w@j@Kh@A`@JZZJl@?nA^Hn@h@zD~ETp@Dr@C`AUfDKf@c@`@k@A_AU[HUf@Az@bAzGNp@lCnDvBbBvBbBLZFj@Gf@ET_@TuCj@uA`@{OtF]D]IYESJUj@SHKXE^B^Gn@]z@sHnHs@f@}@\\kA\\w@H_Ix@yAh@KMOEQFIRA\\KPeI~IaGbJQBMGQASZBt@IV[d@iCzDg@Z}ALWLS`@[pAE^J`FNZRJRCLOJUDe@OwBIOMMWEyTbDq@^c@f@yCtEYPS?MMK[[sBMKUBwErAqCi@mAZCBgFB_A@cCW_CL]EcCiBYCiWbDAMs@PkAJc@BsCl@_@Pw@\\QFEBCHAb@CDIBAEEe@u@oD"
			 },
			 "summary" : "",
			 "warnings" : [
				"Walking directions are in beta.    Use caution – This route may be missing sidewalks or pedestrian paths."
			 ],
			 "waypoint_order" : []
		  }
	   ],
	   "status" : "OK",
	   "expected": "OK"
	},
	{
	   /* https://maps.googleapis.com/maps/api/directions/json?origin=xxxxxxxxx&destination=yyyyyyyy&alternative=true&transit_mode=train|tram|bus&mode=transit&key=AIzaSyBm3HQcIrjGyQAjRemBa9HZjrbp2l0uMCc */
	   "available_travel_modes" : [ "DRIVING", "WALKING" ],
	   "geocoded_waypoints" : [
		  {
			 "geocoder_status" : "OK",
			 "place_id" : "ChIJM20yLBye4jAR8EE_Fab-6Zs",
			 "types" : [ "establishment", "point_of_interest" ]
		  },
		  {
			 "geocoder_status" : "OK",
			 "place_id" : "ChIJQZuSBDZxgkcREfDOGl1uir8",
			 "types" : [
				"bus_station",
				"establishment",
				"point_of_interest",
				"transit_station"
			 ]
		  }
	   ],
	   "routes" : [],
	   "status" : "ZERO_RESULTS",
	   "expected" : "ZERO_RESULTS"
	},
	{
		/* https://maps.googleapis.com/maps/api/directions/json?origin=&destination=&alternative=true&transit_mode=train|tram|bus&mode=transit&key=AIzaSyBm3HQcIrjGyQAjRemBa9HZjrbp2l0uMCc */
	   "error_message" : "Invalid request. Missing the 'origin' parameter.",
	   "routes" : [],
	   "status" : "INVALID_REQUEST",
	   "expected" : "ZERO_RESULTS"
	},
	{
		/* https://maps.googleapis.com/maps/api/directions/json?origin=Povo&destination=Trento-autostaz&alternative=true&transit_mode=train|tram|bus&mode=transit&key= */
	   "error_message" : "This functionality is only available if an API key or a client ID is provided: transit_mode",
	   "routes" : [],
	   "status" : "REQUEST_DENIED",
	   "expected" : "ZERO_RESULTS"
	}
];

for(var i = 0; i < testObjects.length; i++)
{
	EseguiTest(testObjects[i]);
}

function EseguiTest(testObject)
{
	test(testObject, () => {
		var resp = index.handleDirections(testObject);
		expect(resp.status).toEqual(testObject.expected); // OK vs NOT_DEFINED
	});	
}


/*,
	{
	   "geocoded_waypoints" : [
		  {
			 "geocoder_status" : "OK",
			 "place_id" : "ChIJM4r3mJN2gkcRcHPzi4kJBwo",
			 "types" : [ "locality", "political" ]
		  },
		  {
			 "geocoder_status" : "OK",
			 "place_id" : "ChIJQZuSBDZxgkcREfDOGl1uir8",
			 "types" : [
				"bus_station",
				"establishment",
				"point_of_interest",
				"transit_station"
			 ]
		  }
	   ],
	   "routes" : [
		  {
			 "bounds" : {
				"northeast" : {
				   "lat" : 46.0703792,
				   "lng" : 11.158009
				},
				"southwest" : {
				   "lat" : 46.03735,
				   "lng" : 11.1178852
				}
			 },
			 "copyrights" : "Map data ©2017 Google",
			 "legs" : [
				{
				   "arrival_time" : {
					  "text" : "2:31pm",
					  "time_zone" : "Europe/Rome",
					  "value" : 1512739884
				   },
				   "departure_time" : {
					  "text" : "2:09pm",
					  "time_zone" : "Europe/Rome",
					  "value" : 1512738591
				   },
				   "distance" : {
					  "text" : "9.2 km",
					  "value" : 9202
				   },
				   "duration" : {
					  "text" : "22 mins",
					  "value" : 1293
				   },
				   "end_address" : "38121 Trento, Province of Trento, Italy",
				   "end_location" : {
					  "lat" : 46.0703792,
					  "lng" : 11.1189911
				   },
				   "start_address" : "38123 Povo, Province of Trento, Italy",
				   "start_location" : {
					  "lat" : 46.065613,
					  "lng" : 11.158009
				   },
				   "steps" : [
					  {
						 "distance" : {
							"text" : "8.9 km",
							"value" : 8868
						 },
						 "duration" : {
							"text" : "17 mins",
							"value" : 1020
						 },
						 "end_location" : {
							"lat" : 46.067846,
							"lng" : 11.118867
						 },
						 "html_instructions" : "Bus towards Gardolo P.Le Neufahrn Sud",
						 "polyline" : {
							"points" : "aedxGqhbcAQDWp@{AvAQZIf@@`@N~C^rAJfCL^PT`C|Cf@`AfC~HnBKhBI~EPNNFVNtCDPTlAx@EdN^tAVrIlEnAV~C\\fBLbGd@z@XfAp@n@r@~DhHtEhIj@h@j@XlC|@HXLDNAr@\\JFr@TbBf@jAp@|@lAbA|AXRZTpDnAx@n@lBrAnAb@vATlAHn@Zn@t@Lf@FVLpAKh@Db@LLP?LQB[B]HYXc@jAu@^]Zk@|@sB@?X[VKPAh@A`@A`@Oj@_@x@w@j@Kh@A`@JZZJl@Af@@f@^Hn@h@dApAtBlCTp@Dr@C`AUfDKf@c@`@k@A_AU[HUf@A^?ZbAzGNp@lCnDvBbBvBbBLZFj@Gf@ET_@TuCj@uA`@iGxBqGzB]D]IYESJUj@SHKXE^B^Gn@KZQ^aB~AqEnEs@f@}@\\kA\\w@H_Ix@yAh@KMOEQFIRA\\KPgEvE}BfCaGbJQBMGQAKJGN@X@ZIV[d@iCzDg@Z}ALWLS`@[pAE^J`FNZRJRCLOJUDe@OwBIOMMWEeFt@sMlBq@^c@f@yCtEYPS?KMA?K[[sBMKUByA`@}Bp@qCi@mAZCBgFB_A@cCW_CL]EwB_BKIYCiWbDAM"
						 },
						 "start_location" : {
							"lat" : 46.065613,
							"lng" : 11.158009
						 },
						 "transit_details" : {
							"arrival_stop" : {
							   "location" : {
								  "lat" : 46.067846,
								  "lng" : 11.118867
							   },
							   "name" : "Rosmini S.Maria Maggiore"
							},
							"arrival_time" : {
							   "text" : "2:27pm",
							   "time_zone" : "Europe/Rome",
							   "value" : 1512739620
							},
							"departure_stop" : {
							   "location" : {
								  "lat" : 46.065613,
								  "lng" : 11.158009
							   },
							   "name" : "Povo \"Polo Sociale\" Cap."
							},
							"departure_time" : {
							   "text" : "2:10pm",
							   "time_zone" : "Europe/Rome",
							   "value" : 1512738600
							},
							"headsign" : "Gardolo P.Le Neufahrn Sud",
							"line" : {
							   "agencies" : [
								  {
									 "name" : "Trentino trasporti esercizio S.p.A.",
									 "phone" : "011 39 0461 821000",
									 "url" : "http://www.ttesercizio.it/"
								  }
							   ],
							   "color" : "#0277bd",
							   "name" : "Gardolo Roncafort Stazione V.Deg. Mad.Bianca",
							   "short_name" : "4",
							   "text_color" : "#ffffff",
							   "vehicle" : {
								  "icon" : "//maps.gstatic.com/mapfiles/transit/iw2/6/bus2.png",
								  "name" : "Bus",
								  "type" : "BUS"
							   }
							},
							"num_stops" : 22
						 },
						 "travel_mode" : "TRANSIT"
					  },
					  {
						 "distance" : {
							"text" : "0.3 km",
							"value" : 334
						 },
						 "duration" : {
							"text" : "4 mins",
							"value" : 264
						 },
						 "end_location" : {
							"lat" : 46.0703792,
							"lng" : 11.1189911
						 },
						 "html_instructions" : "Walk to 38121 Trento, Province of Trento, Italy",
						 "polyline" : {
							"points" : "asdxG}szbAs@Po@F[Bc@BsCl@MDQJm@ZC@A?C?E?KFC@A@?@ABAB?D?D?F?H?B?@A??@CBIBAEAMCW[wAYwA"
						 },
						 "start_location" : {
							"lat" : 46.067846,
							"lng" : 11.118867
						 },
						 "steps" : [
							{
							   "distance" : {
								  "text" : "26 m",
								  "value" : 26
							   },
							   "duration" : {
								  "text" : "1 min",
								  "value" : 19
							   },
							   "end_location" : {
								  "lat" : 46.0683461,
								  "lng" : 11.118741
							   },
							   "html_instructions" : "Head \u003cb\u003enorth\u003c/b\u003e on \u003cb\u003eVia Antonio Rosmini\u003c/b\u003e toward \u003cb\u003eVia Santa Margherita\u003c/b\u003e",
							   "polyline" : {
								  "points" : "asdxG}szbAs@Po@F"
							   },
							   "start_location" : {
								  "lat" : 46.067846,
								  "lng" : 11.118867
							   },
							   "travel_mode" : "WALKING"
							},
							{
							   "distance" : {
								  "text" : "0.2 km",
								  "value" : 176
							   },
							   "duration" : {
								  "text" : "2 mins",
								  "value" : 126
							   },
							   "end_location" : {
								  "lat" : 46.069877,
								  "lng" : 11.1182347
							   },
							   "html_instructions" : "Continue onto \u003cb\u003eVia della Prepositura\u003c/b\u003e",
							   "polyline" : {
								  "points" : "evdxGcszbA[Bc@BsCl@MDQJm@ZC@A?C?E?"
							   },
							   "start_location" : {
								  "lat" : 46.0683461,
								  "lng" : 11.118741
							   },
							   "travel_mode" : "WALKING"
							},
							{
							   "distance" : {
								  "text" : "0.1 km",
								  "value" : 132
							   },
							   "duration" : {
								  "text" : "2 mins",
								  "value" : 119
							   },
							   "end_location" : {
								  "lat" : 46.0703792,
								  "lng" : 11.1189911
							   },
							   "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCavalcavia S. Lorenzo\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eTake the stairs\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
							   "maneuver" : "turn-slight-left",
							   "polyline" : {
								  "points" : "w_exG}ozbAKFC@A@?@ABAB?D?D?F?H?B?@A??@CBIBAEAMCW[wAYwA"
							   },
							   "start_location" : {
								  "lat" : 46.069877,
								  "lng" : 11.1182347
							   },
							   "travel_mode" : "WALKING"
							}
						 ],
						 "travel_mode" : "WALKING"
					  }
				   ],
				   "traffic_speed_entry" : [],
				   "via_waypoint" : []
				}
			 ],
			 "overview_polyline" : {
				"points" : "aedxGqhbcAQDWp@{AvAQZIf@@`@N~C^rAJfCL^rCrDf@`AfC~HxEU~EPNNFVNtCZ~Ax@EdN^tAVrIlEnAV~C\\jJr@z@XfAp@n@r@~DhHtEhIj@h@j@XlC|@HXLDNAr@\\~@\\bBf@jAp@`CjDt@h@pDnAx@n@lBrAnAb@vATlAHn@Zn@t@T~@LpAKh@Db@LLP?LQFy@HYXc@jAu@^]xA_DZ[VKPAjAC`@Oj@_@x@w@j@Kh@A`@JZZJl@?nA^Hn@h@zD~ETp@Dr@C`AUfDKf@c@`@k@A_AU[HUf@Az@bAzGNp@lCnDvBbBvBbBLZFj@Gf@ET_@TuCj@uA`@{OtF]D]IYESJUj@SHKXE^B^Gn@]z@sHnHs@f@}@\\kA\\w@H_Ix@yAh@KMOEQFIRA\\KPeI~IaGbJQBMGQASZBt@IV[d@iCzDg@Z}ALWLS`@[pAE^J`FNZRJRCLOJUDe@OwBIOMMWEyTbDq@^c@f@yCtEYPS?MMK[[sBMKUBwErAqCi@mAZCBgFB_A@cCW_CL]EcCiBYCiWbDAMs@PkAJc@BsCl@_@Pw@\\QFEBCHAb@CDIBAEEe@u@oD"
			 },
			 "summary" : "",
			 "warnings" : [
				"Walking directions are in beta.    Use caution – This route may be missing sidewalks or pedestrian paths."
			 ],
			 "waypoint_order" : []
		  }
	   ],
	   "status" : "OK",
	   "expected": "OK"
	}*/










