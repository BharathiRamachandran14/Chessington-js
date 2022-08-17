import Piece from './piece';
import Square from "../square";


export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    squareTaken(board, square) {
        if (board.getPiece(square)) {
            return true;
        }
    }

    getAvailableMoves(board) {

        let location = board.findPiece(this);
        let moves = [];

        for (let i = 1; i <= (7 - location.row); i++) {
            let square = Square.at(location.row + i, location.col);
            if (this.squareTaken(board, square)) {
                break;
            } else {
                moves.push(square); // moves up}
            }
        }
        for (let i = 1; i <= (location.row); i++) {
            let square = Square.at(location.row - i, location.col);
            if (this.squareTaken(board, square)) {
                break;
            } else {
                moves.push(square); // moves down}
            }
        }
        for (let i = 1; i <= (7 - location.col); i++) {
            let square = Square.at(location.row, location.col + i);

            if (this.squareTaken(board, square)) {
                break;
            } else {
                moves.push(square);
            } // moves right;}
        }

        for (let i = 1; i <= (location.col); i++) {

            let square = Square.at(location.row, location.col - i);

            if (this.squareTaken(board, square)) {
                break;
            } else {
                moves.push(square); // moves left;}
            }

        }
        return moves;
    }
}


