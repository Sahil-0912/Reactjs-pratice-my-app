import { Component } from "react";

class ClassSate extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            name: "hello"
        }
    }

    inc = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    dec = () => {
        const counter = this.state.count
        this.setState({
            count: counter > 0 ? counter - 1 : counter
        })
    }

    changename = () => {
        this.setState({
            name:"world",
        })
    }
    render() {
        return (
            <>
                <div className="col-6 mx-auto my-5 p-5 shadow text-center">
                    <h4>Counter {this.state.count}</h4>
                    <p>Name {this.state.name}</p>
                    <button className="btn btn-outline-danger" onClick={this.changename}>Change Name</button>
                    <button className="btn btn-outline-danger mx-4" onClick={this.inc}>+</button>
                    <button className="btn btn-outline-danger" onClick={this.dec}>-</button>
                </div>
            </>
        )
    }
}

export default ClassSate