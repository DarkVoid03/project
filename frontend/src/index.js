import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import {AuthProvider} from "./components/AuthController";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AuthProvider>
);