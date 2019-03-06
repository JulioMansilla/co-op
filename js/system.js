$('#g-input').val();
$(document).ready(function(){
	console.log($('#g-input').val());
	$(document).keypress(function(key) {
		console.log(key.which);
		if (key.which == 13) 
		{
			var gInput = $('#g-input').val();
			console.log(gInput);
			$('#g-output').append("<p>" + gInput + "<p>");
		}
		  
	});
})