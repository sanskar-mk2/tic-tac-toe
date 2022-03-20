import React, { Component } from "react";

class Square extends Component {
    state = {};
    render() {
        return this.props.board.map((square, idx) => (
            <div key={idx} onClick={() => this.props.on_move(idx)}>
                {square === 1 ? "❌" : square === -1 ? "⭕" : ""}
            </div>
        )); // css grids
    }
}

export default Square;
