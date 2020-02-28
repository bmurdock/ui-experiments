import React, { Component } from 'react';
import './App.css';

// Import the thing we built
import Container from './components/Container';
import Modal from './components/Modal';

class App extends Component {
  constructor() {
    super();
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.refs['modal'].updateVisibility(true);
  };

  hideModal = () => {
    this.refs['modal'].updateVisibility(false);
  };


  render() {
    return (
      <section className="sanity" >
        <Container />

        <p>Also...</p>
        <button className="openModalButton" type="button" onClick={this.showModal}>
          Open Modal
        </button>
        <Modal ref="modal" handleClose={this.hideModal} title="This is my modal">
          <p>Modal</p>
          <p>Data</p>
        </Modal>
      </section>
    )
  }

}

export default App;
