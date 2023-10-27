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
    return (
      <Modal show={!close} onHide={this.closeTour} style={{ top: "100px" }}>
        <div className="modal-content">
          <div className="modal-body">
            <p> {steps[currentStep]}</p>
          </div>
          <div className="modal-footer">
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
              className="btn btn-primary"
              style={{ background: "# ", border: "none" }}
              onClick={() =>
                currentStep >= steps.length ? this.closeTour() : this.nextStep()
              }
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
