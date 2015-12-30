console.log("JavaScript 4Lyfe");

function makeGrid(row, col){
	for(var j = 0; j <= row; j++){
		$("#sketch").append("<div class='row'></div>");		
	}

	for(var i = 1; i <= col; i++){
		$(".row").append("<div class='grid'></div>");
	}
}

$(document).ready(function(){
	makeGrid(16, 16);

	$('.grid').on('mouseover', function(){
		$(this).css('background-color', 'red');
	});

	$('button').on('click', function(event){
		$('.grid').css('background-color', 'white');
		// var gridNum = prompt('How many?');
		// console.log("This many: " + gridNum);
		// makeGrid(gridNum, gridNum);
	});
});