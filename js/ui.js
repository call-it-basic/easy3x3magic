// MAKE THE BUTTONS

// This could all be iterated over.

// splitting the IDs and using a dynamic function call.

var read_squares = function () {
	$("#rowa-0").text(mygame.board.rowa[0])
	$("#rowa-1").text(mygame.board.rowa[1])
	$("#rowa-2").text(mygame.board.rowa[2])
	$("#rowb-0").text(mygame.board.rowb[0])
	$("#rowb-1").text(mygame.board.rowb[1])
	$("#rowb-2").text(mygame.board.rowb[2])
	$("#rowc-0").text(mygame.board.rowc[0])
	$("#rowc-1").text(mygame.board.rowc[1])
	$("#rowc-2").text(mygame.board.rowc[2])
}

// Dont let people edit your squares
var blank_squares = function () {
	$("#rowa-0").text() && $("#rowa-0").attr('contenteditable','false');
	$("#rowa-1").text() && $("#rowa-1").attr('contenteditable','false');
	$("#rowa-2").text() && $("#rowa-2").attr('contenteditable','false');

	$("#rowb-0").text() && $("#rowb-0").attr('contenteditable','false');
	$("#rowb-1").text() && $("#rowb-1").attr('contenteditable','false');
	$("#rowb-2").text() && $("#rowb-2").attr('contenteditable','false');

	$("#rowc-0").text() && $("#rowc-0").attr('contenteditable','false');
	$("#rowc-1").text() && $("#rowc-1").attr('contenteditable','false');
	$("#rowc-2").text() && $("#rowc-2").attr('contenteditable','false');

}


$(document).ready(function(){
	read_squares();
	blank_squares();
	// Then I will add some logic to all the buttons
	$("#checkifWin").click( function() {
		mygame.board.rowa[0]=$("#rowa-0").text();
		mygame.board.rowa[1]=$("#rowa-1").text();
		mygame.board.rowa[2]=$("#rowa-2").text();

		mygame.board.rowb[0]=$("#rowb-0").text();
		mygame.board.rowb[1]=$("#rowb-1").text();
		mygame.board.rowb[2]=$("#rowb-2").text();

		mygame.board.rowc[0]=$("#rowc-0").text();
		mygame.board.rowc[1]=$("#rowc-1").text();
		mygame.board.rowc[2]=$("#rowc-2").text();

		if ( mygame.checkWin() ) {
			alert("YOU HAVE WON");
		} else {
			alert("YOU HAVE FAILED");
		}

	} );
});