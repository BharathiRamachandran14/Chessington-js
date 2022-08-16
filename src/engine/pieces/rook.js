import Piece from './piece';
import Player from "../player";
import Square from "../square";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        //6 rows and 6 columns
        // if rook modle of the board +nO of rows  /
        //16 squares from 0
        let location = board.findPiece(this);

        if (location === 0){
            let squares = 8;
        }
        let moves = [];
        if (this.player === Player.WHITE) {
            if (location.row === 0) {
                moves.push(Square.at(location.row + 7, location.col));
            }
            //  location - ( squares - location)  or location + 3
            moves.push(Square.at(location.row + 1, location.col));

        } else {
            if (location.row === 6){
                moves.push(Square.at(location.row - 2, location.col));
            }
            moves.push(Square.at(location.row - 1, location.col));
        }
        return moves;

        return new Array(0);
    }
}
