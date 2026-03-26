import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Toastify CSS
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App.jsx';
// Toastify
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer position="top-center" />
  </StrictMode>,
);
