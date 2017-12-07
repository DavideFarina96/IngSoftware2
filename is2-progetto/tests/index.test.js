const index = require('../index');

var testObjects = [
	{
		"message": "Una sola parola",
		"input": "ciao",
		"output": {"speech": "ciao","displayText": "ciao","data": {},"contextOut": [],"source": "DISIer"}
	},
	{
		"message": "Stringa vuota",
		"input": "",
		"output": {"speech": "","displayText": "","data": {},"contextOut": [],"source": "DISIer"}
	},
	{
		"message": "Array vuoto, anche se dovrei ricevere solamente stringhe",
		"input": [],
		"output": {"speech": "","displayText": "","data": {},"contextOut": [],"source": "DISIer"}
	},
	{
		"message": "Frase piu lunga delle altre",
		"input": "Frase molto piu lunga delle altre con spazi",
		"output": {"speech": "Frase molto piu lunga delle altre con spazi","displayText": "Frase molto piu lunga delle altre con spazi","data": {},"contextOut": [],"source": "DISIer"}
	},
	{
		"message": "Frase con virgolette",
		"input": "Frase che contiene anche apostrofo ' ' '",
		"output": {"speech": "Frase che contiene anche apostrofo ' ' '","displayText": "Frase che contiene anche apostrofo ' ' '","data": {},"contextOut": [],"source": "DISIer"}
	}
];

for(var i = 0; i < testObjects.length; i++)
{
	EseguiTest(testObjects[i]);
}

function EseguiTest(testObject)
{
	test(testObject.message, () => {
		var resp = index.CreateBotResponse(testObject.input);
		var json = JSON.parse(resp);

		expect(json).toEqual(testObject.output);
	});	
}
