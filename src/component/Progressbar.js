import { Component } from "react";
import { ReactComponent as Checkmark } from "../vector/checkmark.svg";

class Progressbar extends Component {
  state = { currentIndex: 0 };

  render() {
    const { steps } = this.props;
    const { currentIndex } = this.state;

    const next = () => {
      const { currentIndex } = this.state;
      if (currentIndex === steps.length - 1) {
        return;
      }
      this.setState({ currentIndex: currentIndex + 1 });
    };

    const prev = () => {
      const { currentIndex } = this.state;
      if (currentIndex === 0) {
        return;
      }
      this.setState({ currentIndex: currentIndex - 1 });
    };

    return (
      <div className="progress-bar-wrapper">
        <ul className="step-progress-bar">
          {steps.map((step, index) => {
            return (
              <li
                key={index}
                className={`${"progress-step"}${
                  index < currentIndex ? " completed" : ""
                }${index === currentIndex ? " current" : ""}`}
              >
                {index < currentIndex ? (
                  <span className="step-icon">
                    <Checkmark />
                  </span>
                ) : (
                  <span className="step-index">{index + 1}</span>
                )}
                <div className="step-label">
                  {step.label}
                  {step.subtitle && (
                    <div className="step-label-subtitle">{step.subtitle}</div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="step-content">
          {this.props.steps[currentIndex].content}
        </div>

        <div className="step-buttons">
          <button
            className={`${"step-action-btn"} ${"action-btn-secondary"} ${
              currentIndex === 0 && "disabled"
            }`}
            onClick={prev}
          >
            Previous
          </button>
          {currentIndex === steps.length - 1 ? (
            <button className="step-action-btn action-btn-primary disabled">
              Success!
            </button>
          ) : (
            <button
              className="step-action-btn action-btn-primary"
              onClick={next}
            >
              Proceed
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Progressbar;
