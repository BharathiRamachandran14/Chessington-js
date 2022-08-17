import Piece from './piece';
import Player from "../player";
import Square from "../square";
import Board from "../board";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    checkIfFriendlies(board, square) {
        if (board.getPiece(square) === this.player.symbol) {
            return true;
        }
    }

    getAvailableMoves(board) {

        let location = board.findPiece(this);
        let moves = [];

        for (let i = 1; i <= (7 - location.row); i++) {
            let square = Square.at(location.row + i, location.col);
            if (this.checkIfFriendlies(board, square)) {
                break;
            } else {
                moves.push(square); // moves up}
            }
        }
        for (let i = 1; i <= (location.row); i++) {
            let square = Square.at(location.row - i, location.col);
            if (this.checkIfFriendlies(board, square)) {
                break;
            } else {
                moves.push(square); // moves down}
            }
        }
        for (let i = 1; i <= (7 - location.col); i++) {
            let square = Square.at(location.row, location.col + i);

            if (this.checkIfFriendlies(board, square)) {
                break;
            } else {
                moves.push(square);
            } // moves right;}
        }

        for (let i = 1; i <= (location.col); i++) {

            let square = Square.at(location.row, location.col - i);

            if (this.checkIfFriendlies(board, square)) {
                break;
            } else {
                moves.push(square); // moves left;}
            }

        }
        return moves;
    }
}


