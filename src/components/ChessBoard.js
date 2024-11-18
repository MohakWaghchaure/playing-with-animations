import { Fragment } from 'react';
 
function ChessBoard(){
    return(
        <Fragment>
            <div className='chessboard-section'>
                <div className='container chessboard-conatiner'>
                    <h2>It can be leveraged to build interactive chessboards or other engaging board games, enhancing user interaction and creativity.</h2>
                    <div className='hint-line'>(You can play by dragging the pieces)</div>
                    <div className='chessboard-wrapper'>
                        <div className="chessboard">
                            <div className='board-row'>
                                <div className='board-column even'><div className='piece rook-light'></div></div>
                                <div className='board-column odd'><div className='piece knight-light'></div></div>
                                <div className='board-column even'><div className='piece bishop-light'></div></div>
                                <div className='board-column odd'><div className='piece king-light'></div></div>
                                <div className='board-column even'><div className='piece queen-light'></div></div>
                                <div className='board-column odd'><div className='piece bishop-light'></div></div>
                                <div className='board-column even'><div className='piece knight-light'></div></div>
                                <div className='board-column odd'><div className='piece rook-light'></div></div>
                            </div>
                            <div className='board-row'>
                                <div className='board-column odd'><div className='piece pawn-light'></div></div>
                                <div className='board-column even'><div className='piece pawn-light'></div></div>
                                <div className='board-column odd'><div className='piece pawn-light'></div></div>
                                <div className='board-column even'><div className='piece pawn-light'></div></div>
                                <div className='board-column odd'><div className='piece pawn-light'></div></div>
                                <div className='board-column even'><div className='piece pawn-light'></div></div>
                                <div className='board-column odd'><div className='piece pawn-light'></div></div>
                                <div className='board-column even'><div className='piece pawn-light'></div></div>
                            </div>
                            <div className='board-row'>
                                <div className='board-column even'></div>
                                <div className='board-column odd'></div>
                                <div className='board-column even'></div>
                                <div className='board-column odd'></div>
                                <div className='board-column even'></div>
                                <div className='board-column odd'></div>
                                <div className='board-column even'></div>
                                <div className='board-column odd'></div>
                            </div>
                            <div className='board-row'>
                                <div className='board-column odd'></div>
                                <div className='board-column even'></div>
                                <div className='board-column odd'></div>
                                <div className='board-column even'></div>
                                <div className='board-column odd'></div>
                                <div className='board-column even'></div>
                                <div className='board-column odd'></div>
                                <div className='board-column even'></div>
                            </div>
                            <div className='board-row'>
                                <div className='board-column even'></div>
                                <div className='board-column odd'></div>
                                <div className='board-column even'></div>
                                <div className='board-column odd'></div>
                                <div className='board-column even'></div>
                                <div className='board-column odd'></div>
                                <div className='board-column even'></div>
                                <div className='board-column odd'></div>
                            </div>
                            <div className='board-row'>
                                <div className='board-column odd'></div>
                                <div className='board-column even'></div>
                                <div className='board-column odd'></div>
                                <div className='board-column even'></div>
                                <div className='board-column odd'></div>
                                <div className='board-column even'></div>
                                <div className='board-column odd'></div>
                                <div className='board-column even'></div>
                            </div>
                            <div className='board-row'>
                                <div className='board-column even'><div className='piece pawn-dark'></div></div>
                                <div className='board-column odd'><div className='piece pawn-dark'></div></div>
                                <div className='board-column even'><div className='piece pawn-dark'></div></div>
                                <div className='board-column odd'><div className='piece pawn-dark'></div></div>
                                <div className='board-column even'><div className='piece pawn-dark'></div></div>
                                <div className='board-column odd'><div className='piece pawn-dark'></div></div>
                                <div className='board-column even'><div className='piece pawn-dark'></div></div>
                                <div className='board-column odd'><div className='piece pawn-dark'></div></div>
                            </div>
                            <div className='board-row'>
                                <div className='board-column odd'><div className='piece rook-dark'></div></div>
                                <div className='board-column even'><div className='piece knight-dark'></div></div>
                                <div className='board-column odd'><div className='piece bishop-dark'></div></div>
                                <div className='board-column even'><div className='piece queen-dark'></div></div>
                                <div className='board-column odd'><div className='piece king-dark'></div></div>
                                <div className='board-column even'><div className='piece bishop-dark'></div></div>
                                <div className='board-column odd'><div className='piece knight-dark'></div></div>
                                <div className='board-column even'><div className='piece rook-dark'></div></div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </Fragment>
    )
}

export default ChessBoard;