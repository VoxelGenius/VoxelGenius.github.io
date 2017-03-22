window.onload = function () {
};
var number = document.getElementById('total');
var paragraphs = " ";
var quotes = [];
quotes[0] = "The key is that I’m the king.\n ";
quotes[1] = "I’m all about peace. I’m all about unity. I’m all about love. \n";
quotes[2] = "Stay focused and secure your bag, because they want you to fail and they don’t want us to win.\n";
quotes[3] = "You can never run out of keys.\n";
quotes[4] = "They kick you when you’re down, but they wanna kick it when you’re up \n";

function khaled() {

	for (var i = 1; i <= number.value; i++) {
		var random = 0;
		random = Math.floor(Math.random() * quotes.length);
		paragraphs += quotes[random] + "<br><br>";
		document.getElementById("paragraphs").innerHTML = paragraphs;
		
	}
}


