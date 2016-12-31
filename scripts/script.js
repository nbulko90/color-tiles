$(document).ready(function(){
	
	var numTiles = prompt("Please specify the number of tiles across/down: ");
	
	populate(numTiles);
	init();
	
	$("#clear").click(function(){
		$("#container").css("background-color", "purple");
	});

function populate(numTiles){

	var tileSize = 800 / numTiles;

	for(var i=0; i<numTiles*numTiles; i++){
		$("#container").append("<div class='tile'></div>");
	}

	$(".tile").css("height", tileSize);
	$(".tile").css("width", tileSize);
	$(".tile").css("background-color", "black");
}

function init(){
	$(".tile").hover(function(){
		$(this).css("opacity", "+=.1");
	})
}
	
});