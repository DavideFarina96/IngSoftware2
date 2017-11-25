$(document).ready(function() {
	$('#corso-selection').change(function() {
		if(this.value == '0521H'){
			$('#anno-selection').html(
				'<option value="no-selection">-</option>' +
				'<option value="P0105|1">1 anno - Biotechnological track</option>' +
				'<option value="P0105|2">2 anno - Biotechnological track</option>' +
				'<option value="P0205|1">1 anno - Computational track</option>' +
				'<option value="P0205|2">2 anno - Computational track</option>' +
				'<option value="P0105|0">Biotechnological track - Tutti gli anni</option>' +
				'<option value="P0205|0">Computational track - Tutti gli anni</option>'
			)
		} else if(this.value == '0517H'){
			$('#anno-selection').html(
				'<option value="no-selection">-</option>' +
				'<option value="P0205.3|2">2 anno - Ict innovation: area ES</option>' +
				'<option value="P0205.4|2">2 anno - Ict innovation: area hcid</option>' +
				'<option value="P0205.2|1">1 anno - Ict innovation: area s and p</option>' +
				'<option value="P0205.2|2">2 anno - Ict innovation: area s and p</option>' +
				'<option value="P0205.1|1">1 anno - Ict innovation: area sde</option>' +
				'<option value="P0205.1|2">2 anno - Ict innovation: area sde</option>' +
				'<option value="P0105.1|1">1 anno - Scienze e tecnologie informatiche: area DS</option>' +
				'<option value="P0105.2|1">1 anno - Scienze e tecnologie informatiche: area sde</option>' +
				'<option value="P0105.3|1">1 anno - Scienze e tecnologie informatiche: area SN</option>' +
				'<option value="P0205.3|0">Ict innovation: area ES - Tutti gli anni</option>' +
				'<option value="P0205.4|0">Ict innovation: area hcid - Tutti gli anni</option>' +
				'<option value="P0205.2|0">Ict innovation: area s and p - Tutti gli anni</option>' +
				'<option value="P0205.1|0">Ict innovation: area sde - Tutti gli anni</option>' +
				'<option value="P0105.1|0">Scienze e tecnologie informatiche: area DS - Tutti gli anni</option>' +
				'<option value="P0105.2|0">Scienze e tecnologie informatiche: area sde - Tutti gli anni</option>' +
				'<option value="P0105.3|0">Scienze e tecnologie informatiche: area SN - Tutti gli anni</option>'
			)
		} else if(this.value == '0514G') {
			$('#anno-selection').html(
				'<option value="no-selection">-</option>' +
				'<option value="P0405|3">3 anno - Scienze e tecnologie informatiche</option>' +
				'<option value="P0605|3">3 anno - Sistemi</option>' +
				'<option value="P0005|1">1 anno - Standard</option>' +
				'<option value="P0005|2">2 anno - Standard</option>' +
				'<option value="P0405|0">Scienze e tecnologie informatiche - Tutti gli anni</option>' +
				'<option value="P0605|0">Sistemi - Tutti gli anni</option>' +
				'<option value="P0005|0">Standard - Tutti gli anni</option>'
			)
		} else if(this.value == '0340H'){
			$('#anno-selection').html(		
				'<option value="no-selection">-</option>' +			
				'<option value="P0203.2|1" >1 anno - Ict innovation: area dmt</option>' +
				'<option value="P0203.2|2" >2 anno - Ict innovation: area dmt</option>' +
				'<option value="P0203.1|1" >1 anno - Ict innovation: area ita</option>' +
				'<option value="P0203.1|2" >2 anno - Ict innovation: area ita</option>' +
				'<option value="P0103.3|1" >1 anno - Ingegneria dell\'informazione e delle comunicazioni: area ibe</option>' +
				'<option value="P0103.3|2" >2 anno - Ingegneria dell\'informazione e delle comunicazioni: area ibe</option>' +
				'<option value="P0103.1|1" >1 anno - Ingegneria dell\'informazione e delle comunicazioni: area spu</option>' +
				'<option value="P0103.1|2" >2 anno - Ingegneria dell\'informazione e delle comunicazioni: area spu</option>' +
				'<option value="P0103.2|1" >1 anno - Ingegneria dell\'informazione e delle comunicazioni: area WN</option>' +
				'<option value="P0103.2|2" >2 anno - Ingegneria dell\'informazione e delle comunicazioni: area WN</option>' +
				'<option value="P0203.2|0" >Ict innovation: area dmt - Tutti gli anni</option>' +
				'<option value="P0203.1|0" >Ict innovation: area ita - Tutti gli anni</option>' +
				'<option value="P0103.3|0" >Ingegneria dell\'informazione e delle comunicazioni: area ibe - Tutti gli anni</option>' +
				'<option value="P0103.1|0" >Ingegneria dell\'informazione e delle comunicazioni: area spu - Tutti gli anni</option>' +
				'<option value="P0103.2|0" >Ingegneria dell\'informazione e delle comunicazioni: area WN - Tutti gli anni</option>'
			)
		} else if(this.value == '0338G'){
			$('#anno-selection').html(
				'<option value="no-selection">-</option>' +
				'<option value="P0003|1">1 anno - Standard</option>' +
				'<option value="P0003|2">2 anno - Standard</option>' +
				'<option value="P0003|3">3 anno - Standard</option>' +
				'<option value="P0003|0">Standard - Tutti gli anni</option>'
			)
		} else if(this.value == '0330G'){
			$('#anno-selection').html(
				'<option value="no-selection">-</option>' +
				'<option value="P0203|3">3 anno - Informatica</option>' +
				'<option value="P0103|3">3 anno - Informazione</option>' +
				'<option value="P0003|1">1 anno - Standard</option>' +
				'<option value="P0003|2">2 anno - Standard</option>' +
				'<option value="P0203|0">Informatica - Tutti gli anni</option>' +
				'<option value="P0103|0">Informazione - Tutti gli anni</option>' +
				'<option value="P0003|0">Standard - Tutti gli anni</option>'
			)
		}
	});
});