import Piece from './piece';
import Square from "../square";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let moves = [];
        for (let i = 1; i < (7 - location.row); i++) {
            moves.push(Square.at(location.row + i, location.col + i));
        }
        for (let i = 1; i <= (location.row); i++) {
            moves.push(Square.at(location.row - i, location.col - i));
        }
        for (let i = 1; i < (7 - location.col); i++) {
            moves.push(Square.at(location.row + i, location.col - i));
        }
        for (let i = 1; i < (location.col); i++) {
            moves.push(Square.at(location.row - i, location.col + i));
        }

        return moves;
    }
}
