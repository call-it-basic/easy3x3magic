// You can rip this all out of a class...

var gameBoard = class {
	// This is cheating/lazy
	constructor() {
		this.xshift = Math.floor(Math.random() * 3);
		this.yshift = Math.floor(Math.random() * 3);
		// All magic squares are essentially the same or variation.
		// You can use an algo to make it....
		// Or use a model, shift/wrap the outcome.
		this.modela = [ 8, 1, 6 ];
		this.modelb = [ 3, 5, 7 ];
		this.modelc = [ 4, 9, 2 ];
		this.rowa = [ '', '', '' ];
		this.rowb = [ '', '', '' ];
		this.rowc = [ '', '', '' ];
		this.board = [ this.rowa, this.rowb, this.rowc ];
		this.makeXRow('rowa', 'modela');
		this.makeXRow('rowb', 'modelb');
		this.makeXRow('rowc', 'modelc');
		this.shiftYrow();
		// I want a deep clone of the rows to my solution prior to dropping letters
		// Think... There is ONLY one way to solve this.
		this.solutiona = Object.assign({}, this.rowa);
		this.asum = this.solutiona[0] + this.solutiona[1]+ this.solutiona[2];
		this.solutionb = Object.assign({}, this.rowb);
		this.bsum = this.solutionb[0] + this.solutionb[1]+ this.solutionb[2];
		this.solutionc = Object.assign({}, this.rowc);
		this.csum = this.solutionc[0] + this.solutionc[1]+ this.solutionc[2];
		// Drop letters
		this.makePuzzle();
	}
	makeXRow(row, model) {
		// shiftnum will now be element #1
		var shiftnum = this.xshift;
		this[row][0] = this[model][shiftnum];
		shiftnum++;
		if ( shiftnum == 3 ) { shiftnum = 0; };
		this[row][1] = this[model][shiftnum];
		shiftnum++;
		if ( shiftnum == 3 ) { shiftnum = 0; };
		this[row][2] = this[model][shiftnum];
	}
	shiftYrow() {
		// Cheating... 3 rows only...
		var rowa = this.rowa;
		var rowb = this.rowb;
		var rowc = this.rowc;
		if ( this.yshift == 0 ) {
			return;
		}
		if ( this.yshift == 1 ) {
			this.rowa = rowc;
			this.rowb = rowa;
			this.rowc = rowb;
		}
		if ( this.yshift == 2 ) {
			this.rowa = rowb;
			this.rowb = rowc;
			this.rowc = rowa;
		}
	}
	randomDrop() {
		var dropind = Math.floor(Math.random() * 3);
		return dropind;
	}
	makePuzzle() {
		this.rowa[this.randomDrop()] = '';
		this.rowb[this.randomDrop()] = '';
		this.rowc[this.randomDrop()] = '';
		this.rowa[this.randomDrop()] = '';
		this.rowb[this.randomDrop()] = '';
		this.rowc[this.randomDrop()] = '';
	}
};

var game = class {
	constructor() {
		this.board = new gameBoard();
	}
	checkWin() {
		if ( this.board.rowa.join() == Object.values(this.board.solutiona).join() && this.board.rowb.join() == Object.values(this.board.solutionb).join() && this.board.rowc.join() == Object.values(this.board.solutionc).join() ) {
			return true;
		}
	}
};

var mygame=new game();
