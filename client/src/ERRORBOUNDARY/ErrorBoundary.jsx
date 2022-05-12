import React from "react";
import img from '../resources/ErrorBoundary.png';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <img src={img} alt='Something went wrong, try it later !'/>;
      }
  
      return this.props.children; 
    }
  } 