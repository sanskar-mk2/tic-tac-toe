import React, { Component } from "react";

class Counter extends Component {
    styles = {
        fontSize: 10,
        fontWeight: "bold",
    };

    render() {
        return (
            <div>
                {this.props.children}
                <span className={this.get_badge_classes()}>
                    {this.format_count()}
                </span>
                <button
                    onClick={() => this.props.on_increment(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    +
                </button>
                <button
                    onClick={() => this.props.on_delete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }

    get_badge_classes() {
        let classes = "badge m-2 text-dark bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    //cool! 😎
    format_count() {
        const { value: count } = this.props.counter;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
