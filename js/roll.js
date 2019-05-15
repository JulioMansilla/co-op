function roll(num) {
	var output = Math.floor(Math.random()* (num - 1) + 1); 
	// Math.floor rounds the number down to the nearest integer
	console.log(output);
	return output;
}
