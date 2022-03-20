import React, { Component } from "react";
import Counters from "./components/counters";
import {default as NavBar} from "./components/navbar";

class App extends Component {
    state = {
        counters: [
            { id: 0, value: 1 },
            { id: 1, value: 10 },
            { id: 2, value: 100 },
            { id: 3, value: 1000 },
        ],
    };

    handle_delete = (counter_id) => {
        const counters = this.state.counters.filter((c) => c.id !== counter_id);
        this.setState({ counters });
    };

    handle_increment = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    handle_reset = () => {
        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };
    render() {
        return (
            <React.Fragment>
                <NavBar total_counters={this.state.counters.filter(c => c.value > 0).length} />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        on_reset={this.handle_reset}
                        on_increment={this.handle_increment}
                        on_delete={this.handle_delete}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
