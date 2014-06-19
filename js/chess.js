///<reference path="jquery.d.ts"/>
var Chess = (function () {
    function Chess() {
        this.PIXEL_SCALE = 75;
        this.isWhite = true;
    }
    Chess.prototype.resetBoard = function ($board) {
        $board.empty();

        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                $('<div/>', {
                    'class': ((i + j) % 2 == 1 ? 'black' : 'white') + ' square'
                }).css({
                    'left': i * this.PIXEL_SCALE + 'px',
                    'top': j * this.PIXEL_SCALE + 'px'
                }).appendTo($board);
            }
        }
    };
    return Chess;
})();

var app = new Chess();
