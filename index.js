import React from 'react';
import ReactDOMClient from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import App from './App.css'

const root = document.getElementById('root');
ReactDOMClient.createRoot(root).render(<AppRouter />)