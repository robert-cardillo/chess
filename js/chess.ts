///<reference path="jquery.d.ts"/>
class Chess {
	PIXEL_SCALE : number = 75;
	isWhite : boolean = true;

	initBoard($board) {
		var pieces = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];

		$board.empty();

		for (var i = 0; i < 8; i++) {
			for (var j = 0; j < 8; j++) {
				var left = i * this.PIXEL_SCALE + 'px';
				var top = j * this.PIXEL_SCALE + 'px';
				
				$('<div/>', {
					'class' : ((i + j) % 2 == 1 ? 'black' : 'white') + ' square'
				})
				.css({
					'left' : left,
					'top' : top
				})
				.appendTo($board);
				
				if (j == 0 || j == 7) {
					$('<div/>', {
						'class' : 'piece ' + (j == 0 ? 'black' : 'white') + ' ' + pieces[i]
					})
					.css({
						'left' : left,
						'top' : top
					})
					.appendTo($board);
				}
				
				if (j == 1 || j == 6) {
					$('<div/>', {
						'class' : 'piece ' + (j == 1 ? 'black' : 'white') + ' pawn'
					})
					.css({
						'left' : left,
						'top' : top
					})
					.appendTo($board);
				}
			}
		}
	}
}

var app = new Chess();

app.initBoard($('#board'));