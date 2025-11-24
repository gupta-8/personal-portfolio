import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Initialize theme based on stored preference or system default
const storedTheme = localStorage.getItem('harsh-theme-setting');
if (!storedTheme || storedTheme === 'system') {
  // Follow system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    document.documentElement.classList.add('dark');
  }
} else if (storedTheme === 'dark') {
  document.documentElement.classList.add('dark');
}

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
