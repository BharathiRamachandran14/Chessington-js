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
        let moves = [];
        // if (this.player === Player.WHITE) {
            for (let i = 1; i <= (7 - location.row); i++) {
                moves.push(Square.at(location.row + i, location.col)); // moves up
            }
            for (let i = 1; i <= (location.row); i++) {
                moves.push(Square.at(location.row - i, location.col)); // moves down
            }
            for (let i = 1; i <= (7 - location.column); i++) {
                moves.push(Square.at(location.row, location.col+i)); // moves right
            }
            for (let i = 1; i <= (location.column); i++) {
                moves.push(Square.at(location.row, location.col-i)); // moves left
            }
        // }
        // else {
        //     for (let i = 1; i <= (7 - location.row); i++) {
        //         moves.push(Square.at(location.row + i), location.col);
        //     }
        //     for (let i = 1; i <= (location.row); i++) {
        //         moves.push(Square.at(location.row - i), location.col);
        //     }
        //     for (let i = 1; i <= (7 - location.column); i++) {
        //         moves.push(Square.at(location.row), (location.col+i));
        //     }
        //     for (let i = 1; i <= (location.column); i++) {
        //         moves.push(Square.at(location.row), (location.col-i));
        //     }
        // }


            // 
            //     if (location.row === 0) {
            //         moves.push(Square.at(location.row + 7, location.col));
            //     }
            //     //  location - ( squares - location)  or location + 3
            //     moves.push(Square.at(location.row + 1, location.col));

            // } else {
            //     if (location.row === 6){
            //         moves.push(Square.at(location.row - 2, location.col));
            //     }
            //     moves.push(Square.at(location.row - 1, location.col));
            // }
            return moves;

            //return new Array(0);
        }
    }

