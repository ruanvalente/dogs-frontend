import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { UserStorage } from '../context/userContext'

import { App } from '../App'

export function Router() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/teste" element={<div>Teste</div>} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </>
  )
}
