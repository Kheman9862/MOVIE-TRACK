import React, { Component } from "react";
class Modal extends Component {
  constructor(props) {
    super(props);
    this.closeButton = null;
  }

  closeModal = () => {
    this.closeButton.click();
  };
  submitModal = () => {
    console.log("Form Submitted");
    this.closeModal();
  };
  render() {
    return (
      <div className="improv">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Create Movie
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create Movie
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{this.props.children}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  ref={(ele) => (this.closeButton = ele)}
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                {this.props.hasSubmit && (
                  <button
                    type="button"
                    onClick={this.submitModal}
                    className="btn btn-primary"
                  >
                    Save changes
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .improv {
            margin-top: 35px;
          }
        `}</style>
      </div>
    );
  }
}

export default Modal;
