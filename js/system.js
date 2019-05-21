var cliff = {
	hp : roll(8)+calcBonus(currentEntity.stats.Constitution),
	ab : calcBonus(currentEntity.stats.Dexterity),
	ac : 10 + calcBonus(currentEntity.stats.Dexterity),
	wdmg : calcBonus(currentEntity.stats.Strength),
	wdice : 3,
	hit : currentEntity.dialogue.attack.text,
	miss : currentEntity.dialogue.miss.text,
	win : currentEntity.dialogue.win.text,
	lose : currentEntity.dialogue.lose.text

	}
var currentRoom = "house";
var currentEntity = {};
var commandList = ["go", "inspect", "attack", "use", "talk", "grab", "run", "red-button"];
var currentDescription = "";
var spawn = {};

function calcBonus(stat) {
	var bonus = Math.floor(stat - 10)/2;
	return bonus;
}

function changeRoom(cardinalDirection) {

	if (locations[currentRoom].pathways[cardinalDirection] !== undefined){	
		currentRoom = locations[currentRoom].pathways[cardinalDirection];
		$('body').css("background-image", "url(" + locations[currentRoom].img + ")");  
		$('#g-output').empty("");
		$('.fifty').css("background-image", "url(img/character-images/character0.png)");
		$('#g-output').append("<p>" + locations[currentRoom].description + "</p>");
	}else{
		$('#g-output').append("<p>Error</p>");
	}

}

function inspect(entity) {
	
	if(locations[currentRoom].objects[entity] !== undefined) 
	{
		currentEntity = locations[currentRoom].objects[entity];
		currentDescription = currentEntity.description;
		spawn = {
			hp : roll(8)+calcBonus(currentEntity.stats.Constitution),
			ab : calcBonus(currentEntity.stats.Dexterity),
			ac : 10 + calcBonus(currentEntity.stats.Dexterity),
			wdmg : calcBonus(currentEntity.stats.Strength),
			wdice : 3,
			hit : currentEntity.dialogue.attack.text,
			miss : currentEntity.dialogue.miss.text,
			win : currentEntity.dialogue.win.text,
			lose : currentEntity.dialogue.lose.text

		}
		
	}
	else
	{
		currentDescription = "<p>" + entity + " is nowhere to be found.</p>";
	}
	if (entities[entity] !== undefined)
	{
		currentEntity = entities[entity];
		currentDescription = currentEntity.description;
		$('.fifty').css("background", "url(" + currentEntity.image + ") no-repeat fixed center"); 
		$('.fifty').css("background-size", "50%"); 
		spawn = {
			hp : roll(8)+calcBonus(currentEntity.stats.Constitution),
			ab : calcBonus(currentEntity.stats.Dexterity),
			ac : 10 + calcBonus(currentEntity.stats.Dexterity),
			wdmg : calcBonus(currentEntity.stats.Strength),
			wdice : 3,
			hit : currentEntity.dialogue.attack.text,
			miss : currentEntity.dialogue.miss.text,
			win : currentEntity.dialogue.win.text,
			lose : currentEntity.dialogue.lose.text

		}

		
	}
	

	

	$('#g-output').empty("");
	$('#g-output').append("<p>" + currentDescription + "</p>");
}

function attack(target) {

}

function commands(gInput) {
	console.log(gInput);
	var command = gInput.split(" ")[0];
	switch(command) {
		case "go":
			var cardinalDirection = gInput.split(" ")[1];
			changeRoom(cardinalDirection);
			break;
		case "inspect":
			var entity = gInput.split(" ")[1];
			console.log(entity);
			inspect(entity);
			break;
		case "attack":
			var target =gInput.split(" ")[1];
			attack(target);
			break;
		default:
			$('#g-output').append("<p> Invalid command: you typed" +command+ "</p>");
	}
}

$(document).ready(function(){
	$('body').css("background-image", "url(" + locations[currentRoom].img + ")");  
	$('#g-output').append("<p>" + locations[currentRoom].description + "</p>");
	$(document).keypress(function(key) {
		if(key.which == 13) 
		{
			var gInput = $('#g-input').val().toLowerCase();
			$('#g-input').val("");
			commands(gInput);
		}
		  
	});
})