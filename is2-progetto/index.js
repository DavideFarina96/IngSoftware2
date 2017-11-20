/*globals require, console, process */

var express = require('express');
var bodyParser = require('body-parser');
var util = require('util');
var path = require('path');

//instantiate express
var app = express();

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

	console.log(botResponse);
	return botResponse;
}

// IMPORTANTE: restituire i file richiesti dal client(come lo stile, le immagini)
app.use(express.static(path.join(__dirname, 'public')));

app.all('/stops-map', function(req, res){
    // tolto temporaneamente response.sendfile('stops-map.html');
	// ******* codice tmp
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
    res.write('<h3>Pagine mappe:</h3>');
	res.write('<a href=\'/stops-map\'>/stops-map</a> --> collega alla pagina che visualizza le fermate di autobus e treni nelle vicinanze dell\'utente. \n');
	res.write('<a href=\'/posizione_dinamica\'>/posizione_dinamica</a> --> pagina con fermate vicino a posizione attuale. \n');
	res.write('<a href=\'/orari_Autobus\'>/orari_Autobus</a> --> lista orari prossimo autobus per trento. \n');

    //send response
    res.end();
});


/* prove. codice per gestire il "******* codice tmp" */
app.all('/posizione_dinamica', function(request, response){
    response.sendfile('posizione_dinamica.html');
});
app.all('/orari_Autobus', function(request, response){
    response.sendfile('orari_Autobus.html');
});
/* fine codice di prova */

// orari lezione e disponibilità delle varie aule
app.all('/orari_e_aule', function(request, response){
    response.sendfile('orari_e_aule.html');
});

//bot-related paths
app.all('/bot', function(request, response){
	response.sendfile('bot.html');
});

// pagina google calendar per visualizzare gli impegni dell'utente
app.all('/calendar', function(request, response){
	response.sendfile('quickstart.html');
});


app.post('/bot_message', function(req, res) {
	var numeroBus = req.body.result.parameters.busNumber;
	var citta = req.body.result.parameters.location;

	//a questo punto esegui la query. Per ora, è simulato
	var message = "Mi hai chiesto di andare a " + citta + " con il " + numeroBus;
	var createdResponse = CreateBotResponse(message);

	//invia la risposta
	res.set('Content-Type', 'application/json');
	res.send(createdResponse);
});

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


//listen in a specific port
app.listen(port);

//check status
//console.log('Server running at http://localhost:' + port);