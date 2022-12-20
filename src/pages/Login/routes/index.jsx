import { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router'

import { Context } from '@/context/userContext'

import { LoginForm } from '../pages/LoginForm/LoginForm'
import { CreateAccountForm } from '../pages/CreateAccountForm'
import { ForgotLoginForm } from '../pages/ForgotLoginForm/ForgotLoginForm'
import { ResetAccountForm } from '../pages/ResetAccountForm'

export function Login() {
  const { login } = useContext(Context)

  if (login) {
    return <Navigate to="/account" />
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/forgot-login" element={<ForgotLoginForm />} />
        <Route path="/create-account" element={<CreateAccountForm />} />
        <Route path="/reset-account" element={<ResetAccountForm />} />
      </Routes>
    </>
  )
}
