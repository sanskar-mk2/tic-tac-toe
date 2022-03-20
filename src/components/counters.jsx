import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {


    render() {
        const {on_reset, counters, on_delete, on_increment} = this.props;
        return (
            <div>
                <button onClick={on_reset} className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        on_delete={on_delete}
                        on_increment={on_increment}
                        counter={counter}
                    >
                        <h2>Counter #{counter.id}</h2>
                    </Counter>
                ))}
            </div>
        );
    }
}

export default Counters;
