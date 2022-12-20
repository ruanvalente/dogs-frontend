import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { UserStorage } from '@/context/userContext'

import { AccountPage } from '@/pages/Account/AccountPage'
import { Home } from '@/pages/Home/Home'
import { Login } from '@/pages/Login/routes'

export function Router() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="account" element={<AccountPage />} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </>
  )
}
