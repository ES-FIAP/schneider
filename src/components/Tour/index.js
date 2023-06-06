import React from "react";
import { Modal } from "react-bootstrap";

class Tour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      close: null,
    };
  }

  nextStep() {
    this.setState((prevState) => ({
      currentStep: prevState.currentStep + 1,
    }));
  }

  closeTour() {
    this.setState((prevState) => ({
      close: true,
    }));
  }

  render() {
    const { currentStep } = this.state;
    const { close } = this.state;
    const { steps } = this.props;
    console.log("close", close);
    return (
      <Modal show={!close} onHide={this.closeTour}>
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Tutorial</h5>
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              onClick={() => this.closeTour()}
            ></button>
          </div>
          <div class="modal-body">
            <p> {steps[currentStep]}</p>
          </div>
          <div class="modal-footer">
            <a
              style={{
                color: "#219bfd",
                fontSize: "18px",
                cursor: "pointer",
                marginRight: "20px",
              }}
              onClick={() => this.closeTour()}
            >
              Fechar
            </a>
            <button
              type="button"
              class="btn btn-primary"
              style={{ background: "# ", border: "none" }}
              onClick={() => this.nextStep()}
            >
              Próximo
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default Tour;
