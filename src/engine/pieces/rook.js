import Piece from './piece';
import Player from "../player";
import Square from "../square";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {

        let location = board.findPiece(this);
        let moves = [];
        for (let i = 1; i <= (7 - location.row); i++) {
            moves.push(Square.at(location.row + i, location.col)); // moves up
        }
        for (let i = 1; i <= (location.row); i++) {
            moves.push(Square.at(location.row - i, location.col)); // moves down
        }
        for (let i = 1; i <= (7 - location.col); i++) {
            moves.push(Square.at(location.row, location.col + i)); // moves right
        }
        for (let i = 1; i <= (location.col); i++) {
            moves.push(Square.at(location.row, location.col - i)); // moves left
        }
        return moves;
    }
}

