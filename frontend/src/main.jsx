import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { SnackBarProvider } from 'notistack';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SnackBarProvider>
      <App />
    </SnackBarProvider>
  </BrowserRouter>,
)
