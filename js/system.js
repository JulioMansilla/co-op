var currentRoom = "House";
var commandList = ["go", "inspect", "use", "talk", "grab", "run", "red-button"];

function changeRoom(cardinalDirection) {

	if (locations[currentRoom].pathways[cardinalDirection] !== undefined){	
		currentRoom = locations[currentRoom].pathways[cardinalDirection];
		$('#g-output').empty("");
		$('#g-output').append("<p>" + locations[currentRoom].description + "</p>");
	}else{
		$('#g-output').append("<p>Error</p>");
	}

}

function commands(gInput) {
	console.log(gInput);
	var command = gInput.split(" ")[0];
	switch(command) {
		case "go":
			var cardinalDirection = gInput.split(" ")[1];
			changeRoom(cardinalDirection);
			break;
		default:
			$('#g-output').append("<p> Invalid command: you typed" +command+ "</p>");
	}
}

$(document).ready(function(){
	$('#g-output').append("<p>" + locations[currentRoom].description + "</p>");
	$(document).keypress(function(key) {
		if(key.which == 13) 
		{
			var gInput = $('#g-input').val();
			$('#g-input').val("");
			commands(gInput);
		}
		  
	});
})