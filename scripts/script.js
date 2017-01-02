$(document).ready(function(){
	
	var numTiles = prompt("Please specify the number of tiles across/down: ");
	
	populate(numTiles);
	init();
	
	$("#clear").click(function(){
		$(".tile").remove();

		numTiles = prompt("Please specify the number of tiles across/down: ");

		populate(numTiles);
		init();
	});

function populate(numTiles){

	var tileSize = 800 / numTiles;

	for(var i=0; i<numTiles*numTiles; i++){
		$("#container").append("<div class='tile'></div>");
	}

	$(".tile").css("height", tileSize);
	$(".tile").css("width", tileSize);
}

function init(){
	$(".tile").hover(function(){
		var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		$(this).css("background-color", randomColor);
		$(this).css("opacity", "+=.2");
	})
}
	
});