// A class component becomes an error boundary if it defines either (or both)
// of the lifecycle methods static getDerivedStateFromError() or componentDidCatch().
// Use static getDerivedStateFromError() to render a fallback UI after an error has been thrown.
// Use componentDidCatch() to log error information.

import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: null,
    errorInfo: null,
  };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }
  render() {
    return this.state.errorInfo ? (
      <div>
        <h2>Something went wrong...</h2>
        <details style={{ whiteSpace: "pre-wrap" }}>
          {this.state.error && this.state.errorInfo.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </details>
      </div>
    ) : (
      this.props.children
    );
  }
}

class BuggyCounter extends Component {
  state = {
    counter: 0,
  };
  handleCounter = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };
  render() {
    if (this.state.counter === 5) {
      throw new Error("i crashed");
    }
    return <h1 onClick={this.handleCounter}>{this.state.counter}</h1>;
  }
}

function ErrorBoundaryApp() {
  return (
    <div>
      <p>
        <b>
          This is an example of error boundaries in React 16.
          <br />
          <br />
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw when it reaches 5. This simulates a
          JavaScript error in a component.
        </b>
      </p>
      <hr />
      <ErrorBoundary>
        <p>
          These two counters are inside the same error boundary. If one crashes,
          the error boundary will replace both of them.
        </p>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>
        These two counters are each inside of their own error boundary. So if
        one crashes, the other is not affected.
      </p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </div>
  );
}

export default ErrorBoundaryApp;
