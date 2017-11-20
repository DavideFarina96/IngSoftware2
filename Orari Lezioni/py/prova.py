import requests

f=open('orari.txt','r')

r.requests.get('https://easyroom.unitn.it/Orario/grid_call.php?form-type=corso&anno=2017&corso=0514G&anno2=P0405%7C3&date=20-11-2017&_lang=en&all_events=0')

r.json()
f.write(r.text)

def prova:
	return r.text