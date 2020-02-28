import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showHideClassName: "modal display-none",
        };
        this.updateVisibility = this.updateVisibility.bind(this);
    }

    updateVisibility(show) {
        this.setState({
            showHideClassName: show ? "modal display-block" : "modal display-none",
        });
    }


    render() {
        return (
            <div className={this.state.showHideClassName}>
                <section className="modal-main">
                    <section className="modal-header">
                        <h3>{this.props.title}</h3>
                        <button className="modal-close" onClick={this.props.handleClose}>X</button>
                    </section>
                    {this.props.children}
                </section>
            </div>
        )
    }
}