import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// Custom fetch
import customFetch from './utils/customFetch.js';

// TEST (Back-End)
const data = await customFetch.get('/test');
console.log(data);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
