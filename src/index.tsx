import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './routes/AppRoutes';

import ToggleColorMode from './components/dark-mode/DarkMode';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <AppRoutes /> */}
    
        <ToggleColorMode />
    
  </React.StrictMode>
);

