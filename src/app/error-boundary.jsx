import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

componentDidCatch(error, errorInfo) {
  console.error("Error caught by ErrorBoundary:", error, errorInfo);
  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
}

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-3xl font-bold mb-4">
            Something went wrong 🚨
          </h1>

          <p className="text-gray-600 mb-6">
            {this.state.error?.message || "Unexpected error occurred"}
          </p>

          <button
            onClick={this.handleReset}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Reload App
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}