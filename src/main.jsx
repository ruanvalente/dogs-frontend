import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { UserStorage } from './context/userContext'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserStorage>
      <App />
    </UserStorage>
  </React.StrictMode>
)
