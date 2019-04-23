var currentRoom = "House";
var commandList = ["go", "inspect", "use", "talk", "grab", "run", "red-button"];

function changeRoom(cardinalDirection) {

	if (rooms[currentRoom].pathways[cardinalDirection] !== undefined)
	{	
		currentRoom = rooms[currentRoom].pathways[cardinalDirection];
		$('#g-output').append("<p>" + rooms[currentRoom].description + "<p>");
	}
	else {
		console.log("ERROR!");
		$('#g-output').append("<p>" + "ERROR!" + "<p>");
	}

}

function commands(gInput) {
	var command = gInput.split(" ")[0];
	if (command == "go") {
		var cardinalDirection = gInput.split(" ")[1];
		changeRoom(cardinalDirection);
	}
}

$(document).ready(function(){
	$('#g-output').val(' ');
	$('#g-output').append("<p>" + rooms[currentRoom].description + "<p>");

	$(document).keypress(function(key) {
		if (key.which == 13) 
		{
			var gInput = $('#g-input').val();
			$('#g-input').val(' ');

			commands(gInput);
		}
		  
	});
})