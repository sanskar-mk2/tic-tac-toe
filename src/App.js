import React, { Component } from "react";
import Square from "./components/Square";
import "./App.css";

class App extends Component {
    state = {
        board: new Array(9).fill(0),
        player: 1,
        win: 0,
    };

    win_condition = ["012", "345", "678", "036", "147", "258", "048", "246"];

    make_move = (idx) => {
        if (this.state.board[idx] !== 0 || this.state.win) return;
        const states = this.state;
        states.board[idx] = this.state.player;
        states.player = states.player * -1;
        for (let i = 0; i < this.win_condition.length; i++) {
            let trio = [...this.win_condition[i]].map((e) => states.board[e]);
            let filter_trio = trio.filter((e) => e !== 0);
            let p1 = 0;
            let p2 = 0;
            if (filter_trio.length === 3) {
                for (let i = 0; i < filter_trio.length; i++) {
                    if (filter_trio[i] === 1) p1++;
                    else p2++;
                }
            }
            if (p1 === 3) {
                states.win = 1;
                break;
            } else if (p2 === 3) {
                states.win = -1;
                break;
            }
        }
        this.setState({ states });
    };

    do_reset = () => {
        this.setState({
            board: new Array(9).fill(0),
            player: 1,
            win: 0,
        });
    };

    render() {
        return (
            <div>
                <input type="button" className="mb-2" value="Reset" onClick={this.do_reset} />
                <div className="container">
                    <Square on_move={this.make_move} board={this.state.board} />
                </div>
                <div>Player : {this.state.player === 1 ? "❌" : "⭕"}</div>
                <div>
                    {this.state.win === 1
                        ? `🏆 ❌/ 😭 ⭕`
                        : this.state.win === -1
                        ? `🏆 ⭕ / 😭 ❌`
                        : ""}
                </div>
            </div>
        );
    }
}

export default App;
