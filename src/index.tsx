import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar } from './components/Navbar'
import { AppRoutes } from './routes'
import { ThemeColorProvider } from './contexts/ThemeColorContext'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeColorProvider>
        <div className='flex min-h-screen'>
          <Navbar />
          <AppRoutes />
        </div>
      </ThemeColorProvider>
    </BrowserRouter>
  </React.StrictMode>
)
