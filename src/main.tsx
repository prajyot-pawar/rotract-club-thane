import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from '../src/utils/auth-context.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>  
    
    <BrowserRouter>  
    <AuthProvider>
    <App />
    </AuthProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
