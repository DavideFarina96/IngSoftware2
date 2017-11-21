var times = {time: "00.00", stop: "fermata", line: "0", destination:"_"};

module.exports = {


	//funzione che richiede alle api di maps indicazioni per raggiungere un posto in input
	//e restituisce le informazioni sulla partenza del prossimo autobus dalla fermata più vicina
	//salvandola nella variavile "times"

	//la richiesta viene fatta con stopLocation come posizione di partenza, e endLocation come destinazione
	//result è boh, cancella pure i parametri che non ti servono.
	CreateStopsWithDetails: function (stopLocation, endLocation){
		var strStart = stopLocation;
		var url = "https://maps.googleapis.com/maps/api/directions/json?origin=Povo&destination="+endLocation+"-Autostaz.&alternative=true&transit_mode=train|tram|bus&mode=transit&key=AIzaSyBm3HQcIrjGyQAjRemBa9HZjrbp2l0uMCc";
		/*
		request({url, json:true}, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				//times = handleDirections(body);
				return body;
			}
			else
				return error;
		})*/
request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
	return "fatto";
});
/*
		$.ajaxPrefilter( function (options) {
		  if (options.crossDomain && jQuery.support.cors) {
			var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
			options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
		  }
		});*/
	
	
	}
}

	function handleDirections(data){
			//console.log(data);
			for(var i = 0; i < data.routes.length; i++)
			{
					for(var j = 0; j<data.routes[i].legs[0].steps.length; j++){
						if(data.routes[0].legs[0].steps[j].travel_mode == "TRANSIT"){
							//console.log(data);
							times.time = data.routes[0].legs[0].steps[j].transit_details.departure_time.text;
							times.stop = data.routes[0].legs[0].steps[j].transit_details.departure_stop.name;
							times.line = data.routes[0].legs[0].steps[j].transit_details.line.short_name;
							times.destination = data.routes[0].legs[0].steps[j].transit_details.arrival_stop.name;
							return(times);
						}
				}
			}
		
		}

