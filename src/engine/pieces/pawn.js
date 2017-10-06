import Player from '../player';
import Square from '../square';
import Piece from './piece';
import Board from '../board';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let moves = [];

        // Depending on the pawns current  location
        // get the 2 squares ahead first and then see if a piece is on either square
        // if the next 1 is not occupied  moves = [null]
        // if the 2nd next is occupied return moves = [one move]




        if (this.player === Player.WHITE) { //todo could possibly use a switch here if no need for player.

            if (!board.getPiece(Square.at(location.row + 1, location.col))) {

                if (location.row === 1) {
                    if (!board.getPiece(Square.at(location.row + 2, location.col))) {
                        moves.push(Square.at(location.row + 2, location.col));
                    }
                }
                moves.push(Square.at(location.row + 1, location.col));
            }
        } else {

            if (!board.getPiece(Square.at(location.row - 1, location.col))) {
                if (location.row === 6) {
                    if (!board.getPiece(Square.at(location.row - 2, location.col))) {
                        moves.push(Square.at(location.row - 2, location.col));
                    }
                }
                moves.push(Square.at(location.row - 1, location.col));
            }
        }

        return moves;
    }
}