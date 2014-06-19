///<reference path="jquery.d.ts"/>
class Chess {
	PIXEL_SCALE : number = 75;
	isWhite : boolean = true;

	resetBoard($board) {
		$board.empty();

		for (var i = 0; i < 8; i++) {
			for (var j = 0; j < 8; j++) {
				$('<div/>', {
					'class' : ((i + j) % 2 == 1 ? 'black' : 'white') + ' square'
				})
				.css({
					'left' : i * this.PIXEL_SCALE + 'px',
					'top' : j * this.PIXEL_SCALE + 'px'
				})
				.appendTo($board);
			}
		}
	}
}

var app = new Chess();
