/*globals require, console, process */

// codice per attivare l'https 
var sslRedirect = require('heroku-ssl-redirect');
var express = require('express');
var bodyParser = require('body-parser');
var util = require('util');
var path = require('path');
var request = require('request');
//var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//var http = require('https');


//instantiate express
var app = express();
//var xhr = new XMLHttpRequest();

/* Configure express app to use bodyParser()
 * to parse body as URL encoded data
 * (this is how browser POST form data)
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set our port
var port = process.env.PORT || 8080;


// response-creating function. Used for the bot.
function CreateBotResponse(msg)
{
	var botResponse = "";
	botResponse += "{";
	botResponse += "\"speech\": " + "\"" + msg + "\"" + ",";
	botResponse += "\"displayText\": " + "\"" + msg + "\"" + ",";
	botResponse += "\"data\": {},";
	botResponse += "\"contextOut\": [],";
	botResponse += "\"source\": \"DISIer\"";
	botResponse += "}";

	return botResponse;
}

function GetDate(d){
	var month = d.getMonth()+1;
	var day = d.getDate();

	var date = (day < 10 ? '0' : '') + day + '-' +
		(month < 10 ? '0' : '') + month + '-' +
		d.getFullYear();
		
	return date;
}

// IMPORTANTE: restituire i file richiesti dal client(come lo stile, le immagini)
app.use(express.static(path.join(__dirname, 'public')));


// quando l'utente entra nella pagina con la mappa autobus, viene reindirizzato alla stessa pagina ma in versione https (perchè in http la localizzazione non va)
app.all('/orari_Autobus_s', function(request, response){
    response.redirect('https://is2-progetto.herokuapp.com/orari_Autobus');
});
app.all('/orari_Autobus', function(request, response){
    response.sendfile('orari_Autobus.html');
});
//****************************** fine google maps


// pagina google calendar per visualizzare gli impegni dell'utente
app.all('/calendar', function(request, response){
	response.sendfile('calendario_google.html');
});
app.all('/calendar_s', function(request, response){
    response.redirect('https://is2-progetto.herokuapp.com/calendar');
});
//****************************** fine google calendar




// orari lezione
app.all('/orari_corsi', function(request, response){
    response.sendfile('orari_corsi.html');
});

// disponibilità delle varie aule
app.all('/aule_libere', function(request, response){
    response.sendfile('aule_libere.html');
});

app.all('/orari', function(req, response, next){ 
	var date = GetDate(new Date());
	
	var url = 'https://easyroom.unitn.it/Orario/grid_call.php?form-type=corso&anno=2017&corso=' + req.query.corso + '&anno2=' + req.query.anno2 + '&date=' + date + '&_lang=it&all_events=0'; 
	//var url = 'https://easyroom.unitn.it/Orario/grid_call.php?form-type=corso&anno=2017&corso=0514G&anno2=P0405%7C3&date=20-11-2017&_lang=en&all_events=0'; 
    console.log(url);
	
	request({ 
		url: url, 
		json: true 
	}, function (error, res, body) { 
		if (!error && res.statusCode === 200) { 
			response.json(body); 
		} 
	}) 
});

app.all('/aule', function(req, response, next){
	var date = GetDate(new Date());
		
	var url = 'https://easyroom.unitn.it/Orario/rooms_call.php?form-type=rooms&sede=E0503&date=' + date + '&_lang=it'; 
	
	request({ 
		url: url, 
		json: true 
	}, function (error, res, body) { 
		if (!error && res.statusCode === 200) { 
			response.json(body); 
		} 
	})
});

//bot-related paths
app.all('/bot', function(req, res){
	res.sendfile('bot.html');
});

app.all('/bot_message', function(req, res) {
	res.set('Content-Type', 'application/json');
	var numeroBus, citta;
	var myBody = req.body;
	
	console.log("SKRR");

	//se arrivo dalla home e non dal bot, faccio la richiesta per avere l'oggetto generalmente creato dal bot.
	if(myBody.result == null)
	{
		var msg = req.query.msg;
		let myUrl = "https://api.dialogflow.com/v1/query?v=20150910&contexts=shop&lang=it&query="+ msg +"&sessionId=12345&timezone=Italy/Rome";
			request({	url: myUrl,  
			method: "GET",  
			json: true,
			headers: {
					'Authorization': "Bearer 1b94791a77af4cafa8a96f45476d7907"
				} }, function(error, response, body) {
				if (!error && response.statusCode == 200) 
				{	
					myBody = body;
					numeroBus = myBody.result.parameters.busNumber;
					citta = myBody.result.parameters.location;

					var finalMsg = ContinueRequest(numeroBus, citta, res);		
				}
				else
					res.send(CreateBotResponse("errore parsing"));
			});
	}
	else 
	{
		/*numeroBus = myBody.result.parameters.busNumber;
		citta = myBody.result.parameters.location;


		var finalMsg = ContinueRequest(numeroBus, citta, res);	*/
	}
	
});

//-----------------------------

function handleDirections(data){
		//console.log(data);
		var times = { time: '00.00', stop: 'not_defined', line: '0', destination:'not_defined', status:'ZERO_RESULTS' };
		for(var i = 0; i < data.routes.length; i++)
		{
				for(var j = 0; j<data.routes[i].legs[0].steps.length; j++){
					if(data.routes[0].legs[0].steps[j].travel_mode == "TRANSIT"){
						//console.log(data);
						times.time = data.routes[0].legs[0].steps[j].transit_details.departure_time.text;
						times.stop = data.routes[0].legs[0].steps[j].transit_details.departure_stop.name;
						times.line = data.routes[0].legs[0].steps[j].transit_details.line.short_name;
						times.destination = data.routes[0].legs[0].steps[j].transit_details.arrival_stop.name;
						times.status = "OK";
						return(times);
					}
			}
		}
		return times;
	
	}


function ContinueRequest(numeroBus, citta, res) {
	if(citta == null || citta == "")
	{	
		res.send(CreateBotResponse("Per favore dammi sia il numero del bus che il luogo in cui andare"));
		return CreateBotResponse("Per favore dammi sia il numero del bus che il luogo in cui andare");
	}
	//riformatto le città per comodità dell'utente
	citta = citta.toLowerCase();
	if(citta.indexOf("trento") >= 0)
		citta = "Trento-Autostaz";
	if(citta.indexOf("mesiano") >= 0)
		citta = 'Mesiano Fac. Ingegneria';
	if(citta.indexOf("povo") >= 0)
		citta = 'Povo Fac. Scienze';

	var myUrl = "https://maps.googleapis.com/maps/api/directions/json?origin=Povo&destination=" + citta + "&alternative=true&transit_mode=train|tram|bus&mode=transit&key=AIzaSyBm3HQcIrjGyQAjRemBa9HZjrbp2l0uMCc";
	var times = { time: "00.00", stop: "not_defined", line: "0", destination:"not_defined", status:"ZERO_RESULTS" };

	request({	url: myUrl,  
				method: "GET",  
				json: true,
				headers: {
						'Origin': "https://is2-progetto.herokuapp.com"
						} }, function(error, response, body) {
						if (!error && response.statusCode == 200) 
						{	
							times = handleDirections(body);
							var msg = "";	
							// -1 = no bus.		
							if(times.status != "ZERO_RESULTS")
							{	
								if(numeroBus == times.line)
									msg = "Il prossimo " + times.line + " per " + citta + " è alle " + times.time + ".";
								else if(numeroBus > 0)
									msg = "Non c'è il " + numeroBus + ", ma puoi prendere il " + times.line + " alle " + times.time + ".";									
								else
									msg = "Per andare a " + citta + " puoi prendere il " + times.line + " alle " + times.time + ".";
							}						
							else
								msg = "Non c'è un autobus per " + citta + ".";						
							res.send(CreateBotResponse(msg));
							return CreateBotResponse(msg);
						}
						else
						{ 
							res.send(CreateBotResponse("Errore: " + response.statusCode));
							return CreateBotResponse("Errore: " + response.statusCode);
						}
		});
}

//-----------------------------------------

//handle requests on /
app.all('/', function (req, res) {
	res.sendfile('homepage.html');
    
});




app.all('/info', function (req, res) {
	res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    //Enabling CORS
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === 'Options') {
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
        return res.status(200).json({});
    }
    
    //write response
    res.write('<h1>Server working properly.</h1>');
    res.write('<p>url: ' + req.url + '</p>');
    res.write('<p>method: ' + req.method.toLowerCase() + '</p>');
    res.write('<h3>Operazioni supportate:</h3>');
	res.write('<a href=\'/stops-map\'>/stops-map</a> --> collega alla pagina che visualizza le fermate di autobus e treni nelle vicinanze dell\'utente. \n');

    //send response
    res.end();
});

/* Se la richiesta dell'utente non è nessuna delle precedenti, allora ... */
app.all('*',function(req, res, next){
  res.status(404);
  res.write('<h1>Resource not found.</h1>');
  res.write('<h4><a href="/">Clicca qui</a> per tornare alla HOME</h4>');

  //send response
  res.end();
});


//listen in a specific port
app.listen(port);

//check status
//console.log('Server running at http://localhost:' + port);

module.exports.CreateBotResponse = CreateBotResponse;
module.exports.handleDirections = handleDirections;
module.exports.GetDate = GetDate;
module.exports.ContinueRequest = ContinueRequest;
