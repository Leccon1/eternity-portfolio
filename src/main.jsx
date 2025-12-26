import { useAnimation, AnimationProvider } from '@hooks/useAnimationContext'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import './style/main.scss'
// eslint-disable-next-line import/order
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AnimationProvider>
  </React.StrictMode>
)
