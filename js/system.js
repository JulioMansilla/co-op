var currentRoom = "house";
var currentEntity = "";
var commandList = ["go", "inspect", "use", "talk", "grab", "run", "red-button"];
var currentDescription = "";

function changeRoom(cardinalDirection) {

	if (locations[currentRoom].pathways[cardinalDirection] !== undefined){	
		currentRoom = locations[currentRoom].pathways[cardinalDirection];
		$('body').css("background-image", "url(" + locations[currentRoom].img + ")");  
		$('#g-output').empty("");
		$('#g-output').append("<p>" + locations[currentRoom].description + "</p>");
	}else{
		$('#g-output').append("<p>Error</p>");
	}

}

function changeFocus(entity) {
	if (locations[currentRoom].objects[entity] !== undefined && entities[entity] !== undefined)
	{
		currentEntity = entities[entity];
		currentDescription = currentEntity.description;
		
	}
	else if(locations[currentRoom].objects[entity] !== undefined) 
	{
		currentEntity = locations[currentRoom].objects[entity];
		currentDescription = currentEntity.description;

	}
	else 
	{
		currentDescription = "<p>" + entity + " is nowhere to be found.</p>";
	}

	

	$('#g-output').empty("");
	$('#g-output').append("<p>" + currentDescription + "</p>");
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
			changeFocus(entity);
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