import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CounterContextProvider } from './context/CounterContex.tsx'
import { TitleColorContextProvider } from './context/TitleColorContex.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Criando Provider */}
    <CounterContextProvider>
      <TitleColorContextProvider>
        <App />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>,
)
