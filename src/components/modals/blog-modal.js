import React, {Component } from 'react';
import ReactModal from 'react-modal'

export default class BlogModal extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <ReactModal isOpen={this.props.modalIsOpen}>
                <h1>I'm a MODAL</h1>
            </ReactModal>
        )
    }
}