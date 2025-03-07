import React, { Component } from 'react';
import style from '../errorBoundary/ErrorBoundary.module.scss'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className={style.ErrorTitle}>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

