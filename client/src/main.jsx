import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// TEST (Back-End)
// fetch('http://localhost:5000/api/v1/test')
fetch('/api/v1/test')
  .then((res) => res.json())
  .then((data) => console.log(data));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
