import { Component } from "react";

class CardUi extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <img src={this.props.image} />
                    <div className="card-body">
                        <h4>{this.props.title}</h4>
                        <p>{this.props.para}</p>
                        <div className="card-footer">
                            <div className="row">
                                <div class="col-lg-6">
                                    <span class="text-secondary">{this.props.goal}</span>
                                </div>
                                <div class="col-lg-6">
                                    <span class="text-secondary">{this.props.raised}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CardUi