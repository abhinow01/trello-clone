import React from 'react'
import ReactDOM from 'react-dom/client'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DnDContextProvider from './components/DndContextProvider.jsx';

import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <DndProvider backend={HTML5Backend}>
    <DnDContextProvider>
    <App />
    </DnDContextProvider>
    </DndProvider>
  </React.StrictMode>,
)
