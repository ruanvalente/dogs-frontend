import { createContext, useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { TOKEN_POST, GET_USER, VALIDATE_TOKEN_POST } from '../services/api'

import {
  saveStorageData,
  retrieveStorage,
  cleanStorageData
} from '../utils/localstorage'

export const Context = createContext()

export function UserStorage({ children }) {
  const [userData, setUserData] = useState(null)
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const userLogout = useCallback(
    async function () {
      setUserData(null)
      setError(null)
      setLoading(false)
      setLoading(false)

      cleanStorageData('DOG::TOKEN')

      navigate('/login')
    },
    [navigate]
  )

  useEffect(() => {
    async function initializeLogin() {
      const token = retrieveStorage('DOG::TOKEN')
      if (token) {
        try {
          setError(null)
          setLoading(true)
          const { url, options } = VALIDATE_TOKEN_POST(token)
          const response = await fetch(url, options)

          if (!response.ok) throw new Error('Invalid Token')

          await getUserToken(token)
          navigate('/account')
        } catch (error) {
          userLogout()
          console.error(error.message)
        } finally {
          setLoading(false)
        }
      }
    }

    initializeLogin()
  }, [userLogout, navigate])

  async function getUserToken(token) {
    const { url, options } = GET_USER(token)
    const response = await fetch(url, options)
    const userResponse = await response.json()

    setUserData(userResponse)
  }

  async function userLogin(username, password) {
    try {
      setError(null)
      setLoading(true)
      const { url, options } = TOKEN_POST(username, password)
      const response = await fetch(url, options)

      if (!response.ok) throw new Error('Invalid credentials')

      const { token } = await response.json()

      saveStorageData('DOG::TOKEN', token)

      await getUserToken(token)

      navigate('/account')
    } catch (error) {
      setError(error.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Context.Provider
      value={{ userLogin, userData, userLogout, error, loading, login }}
    >
      {children}
    </Context.Provider>
  )
}
