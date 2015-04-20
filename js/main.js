var characters = [
	
	{
		character:'Iron Man',
		realname:'Tony Stark',
		team:'Avengers',	
		cast:'Robert Downey Jr.',
		image:'ironman.jpg'
	},
	
	
	{
		character: 'Captain America',
		realname:'Steve Rogers',
		team:'Avengers',	
		cast:'Chris Evans',
		image:'captainamerica.jpg'
	},
	
	{	character:'Hulk',
		realname:'Dr. Bruce Banner',
		team: 'Avengers',
		cast: 'Mark Ruffalo',	
		image:'hulk.jpg'
	},

	{
		character: 'Thor',
		realname: 'Null',
		team: 'Avengers',	
		cast: 'Chris Hemsworth',
		image:'thor.jpg'
	},

	
	{	character:'Black Widow',
		realname:'Natasha Romanoff',
		team: 'Avengers',
		cast: 'Scarlett Johansson',
		image:'blackwidow.jpg'
	},

	{
		character:'Hawkeye',
		realname:'Clint Barton',
		team: 'Avengers',
		cast: 'Jeremy Renner',
		image:'hawkeye.jpg'	
	}

];

var templateHtml = $('#avenger-template').html();
var templateFactory =_.template(templateHtml);

characters.forEach(function(result){
		$('#container').append(templateFactory(result));
});

